import Link from "next/link";
import { site } from "@/content/site";
import { DemoVideo } from "./DemoVideo";
import styles from "./Hero.module.css";

const points = [
  "Answers prayer times and general enquiries",
  "Puts urgent and janazah calls straight through",
  "Texts your committee a summary after every call",
];

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            Every call to your mosque, <span className={styles.accent}>answered</span>.
          </h1>
          <p className={styles.lead}>
            MosqueAI is a phone receptionist for UK mosques. It picks up when your
            volunteers can&apos;t, day or night.
          </p>

          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <span className={styles.check} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="13" height="13">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              Book a call with our team
            </Link>
            <a href={site.phone.href} className={`btn btn-outline ${styles.phone}`}>
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
                  fill="currentColor"
                />
              </svg>
              {site.phone.display}
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <DemoVideo />
        </div>
      </div>
    </section>
  );
}
