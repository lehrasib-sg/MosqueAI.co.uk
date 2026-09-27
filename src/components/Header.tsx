"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Logo />

        <nav
          id="site-nav"
          aria-label="Main"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={`btn btn-primary ${styles.cta}`} onClick={() => setOpen(false)}>
            Talk to us
          </Link>
        </nav>

        <div className={styles.mobileActions}>
          <Link
            href="/contact"
            className={`btn btn-primary ${styles.mobileCta}`}
            style={open ? { display: "none" } : undefined}
          >
            Talk to us
          </Link>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
            <span className={styles.bars} data-open={open} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
