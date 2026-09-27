import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your mosque and how calls are handled today. Our Manchester team will be in touch within one working day.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We reply within one working day to arrange a short call.",
  "We talk through your services, timetable and the calls you receive.",
  "If it's a good fit, we set everything up and you review it before going live.",
];

export default function ContactPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>
          <h1 className={styles.title}>Tell us about your mosque</h1>
          <p className={styles.lead}>
            Share a few details and we will show you how MosqueAI would handle the calls
            your mosque receives. There is no obligation and no long-term contract.
          </p>

          <div className={styles.block}>
            <h2>What happens next</h2>
            <ol className={styles.steps}>
              {nextSteps.map((step, i) => (
                <li key={step}>
                  <span aria-hidden="true">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <dl className={styles.details}>
            <div>
              <dt>Prefer to call?</dt>
              <dd>
                <a href={site.phone.href}>{site.phone.display}</a>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.card}>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
