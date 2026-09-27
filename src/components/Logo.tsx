import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={`${styles.logo} ${styles[tone]}`}>
      <svg viewBox="0 0 28 32" width="24" height="28" aria-hidden="true" focusable="false">
        <path
          d="M2 31V13.5C2 6.6 7.4 1.5 14 1.5s12 5.1 12 12V31"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
        />
        <path
          d="M8.5 31V16.5c0-3.2 2.4-5.75 5.5-5.75s5.5 2.55 5.5 5.75V31"
          fill="none"
          stroke="var(--brass)"
          strokeWidth="2.25"
        />
      </svg>
      <span className={styles.text}>
        <span className={styles.name}>MosqueAI</span>
        <span className={styles.credit}>by Simply Genius AI</span>
      </span>
    </Link>
  );
}
