"use server";

import { z } from "zod";

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .max(200)
    .pipe(z.email("Please enter a valid email address")),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{8,20}$/, "Please enter a valid phone number"),
  mosque: z
    .string()
    .trim()
    .min(2, "Please enter your mosque or organisation name")
    .max(150, "Name must be under 150 characters"),
  website: optionalText(200),
  message: optionalText(2000),
  consent: z.literal("on", { error: "Please confirm we can contact you about your enquiry" }),
});

export type ContactField = keyof z.infer<typeof schema>;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
};

const fields: ContactField[] = ["name", "email", "phone", "mosque", "website", "message", "consent"];

export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (formData.get("company_url")) {
    return { status: "success" };
  }

  const raw = Object.fromEntries(
    fields.map((f) => [f, formData.get(f)?.toString() ?? undefined]),
  );
  const values = Object.fromEntries(
    fields.filter((f) => f !== "consent").map((f) => [f, raw[f] ?? ""]),
  ) as ContactState["values"];

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      fieldErrors[key] ??= issue.message;
    }
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const { name, email, phone, mosque, website, message } = parsed.data;
  // Field names match the n8n workflow's Google Sheets mapping (body.name, body.company, ...).
  const payload = {
    name,
    email,
    phone,
    company: mosque,
    message: [message, website && `Website: ${website}`].filter(Boolean).join("\n\n"),
    website,
    source: "mosqueai.co.uk/contact",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] CONTACT_WEBHOOK_URL not set. Enquiry received:", payload);
      return { status: "success" };
    }
    console.error("[contact] CONTACT_WEBHOOK_URL is not configured");
    return failure(values);
  }

  const body = JSON.stringify(payload);
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (secret) {
    headers["X-Webhook-Secret"] = secret;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[contact] Webhook responded with ${res.status}`);
      return failure(values);
    }
  } catch (err) {
    console.error("[contact] Webhook request failed:", err);
    return failure(values);
  }

  return { status: "success" };
}

function failure(values: ContactState["values"]): ContactState {
  return {
    status: "error",
    message:
      "Sorry, we couldn't send your enquiry just now. Please try again, or call us on +44 7974 457772.",
    values,
  };
}
