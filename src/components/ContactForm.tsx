"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitEnquiry, type ContactField, type ContactState } from "@/app/contact/actions";
import styles from "./ContactForm.module.css";

const initialState: ContactState = { status: "idle" };

type FieldProps = {
  name: ContactField;
  label: string;
  state: ContactState;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  optional?: boolean;
  multiline?: boolean;
  wide?: boolean;
};

function Field({
  name,
  label,
  state,
  type = "text",
  autoComplete,
  placeholder,
  optional,
  multiline,
  wide,
}: FieldProps) {
  const error = state.fieldErrors?.[name];
  const errorId = `${name}-error`;
  const common = {
    id: name,
    name,
    placeholder,
    autoComplete,
    required: !optional,
    defaultValue: state.values?.[name] ?? "",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: styles.input,
  };

  return (
    <div className={`${styles.field} ${wide ? styles.wide : ""}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>Optional</span>}
      </label>
      {multiline ? (
        <textarea {...common} rows={5} maxLength={2000} />
      ) : (
        <input {...common} type={type} />
      )}
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      statusRef.current?.focus();
    } else if (state.status === "error" && state.fieldErrors) {
      const first = Object.keys(state.fieldErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className={styles.success}>
        <span className={styles.tick} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <h2>Thank you, we have your enquiry</h2>
        <p>
          A member of our team will be in touch within one working day to arrange a
          conversation about your mosque.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className={styles.form}>
      <div className={styles.grid}>
        <Field name="name" label="Your name" autoComplete="name" state={state} />
        <Field name="mosque" label="Mosque or organisation" autoComplete="organization" state={state} />
        <Field name="email" label="Email address" type="email" autoComplete="email" state={state} />
        <Field name="phone" label="Phone number" type="tel" autoComplete="tel" placeholder="07700 900123" state={state} />
        <Field
          name="website"
          label="Website or Facebook page"
          autoComplete="url"
          placeholder="yourmasjid.org.uk or facebook.com/yourmasjid"
          optional
          wide
          state={state}
        />
        <Field
          name="message"
          label="How are calls handled at the moment?"
          placeholder="For example: roughly how many calls you get, who answers them, and what people usually ask about."
          optional
          multiline
          wide
          state={state}
        />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.consent}>
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={state.fieldErrors?.consent ? true : undefined}
          aria-describedby={state.fieldErrors?.consent ? "consent-error" : undefined}
        />
        <label htmlFor="consent">
          I agree to MosqueAI using these details to respond to my enquiry.
        </label>
        {state.fieldErrors?.consent && (
          <p id="consent-error" className={styles.error}>
            {state.fieldErrors.consent}
          </p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className={styles.formError}>
          {state.message}
        </p>
      )}

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={pending}>
        {pending ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}
