import { benefits } from "@/content/site";
import styles from "./Benefits.module.css";

const icons = [
  // clock
  <svg key="clock" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // phone
  <svg key="phone" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
  // shield check
  <svg key="shield" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v5.5c0 4.5-3 7.9-7 9.5-4-1.6-7-5-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // layers
  <svg key="layers" viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
    <path d="M12 4l8 4.2-8 4.2-8-4.2L12 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 12.2 12 16.4l8-4.2M4 16.2 12 20.4l8-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

export function Benefits() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="benefits-title">
      <div className="wrap">
        <div className={`section-head ${styles.head}`}>
          <h2 id="benefits-title">What an AI phone line gives you that a voicemail can&apos;t</h2>
        </div>

        <ul className={styles.grid}>
          {benefits.map((b, i) => (
            <li key={b.title} className={styles.item}>
              <span className={styles.icon}>{icons[i]}</span>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
