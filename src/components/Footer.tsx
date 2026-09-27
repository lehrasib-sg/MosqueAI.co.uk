import Link from "next/link";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p>A 24/7 phone receptionist for UK mosques, built by Muslims in Manchester.</p>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <address className={styles.contact}>
          <a href={site.phone.href}>{site.phone.display}</a>
          <span>{site.location}</span>
        </address>
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} MosqueAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
