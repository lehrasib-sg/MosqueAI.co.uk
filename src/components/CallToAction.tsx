import Image from "next/image";
import Link from "next/link";
import { images, site } from "@/content/site";
import styles from "./CallToAction.module.css";

export function CallToAction() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <Image
        src={images.reflection.src}
        alt={images.reflection.alt}
        fill
        placeholder="blur"
        sizes="100vw"
        className={styles.bg}
      />
      <div className={`wrap ${styles.inner}`}>
        <h2 id="contact-title" className={styles.title}>
          Let&apos;s talk about your mosque&apos;s phone line
        </h2>
        <p className={styles.lead}>
          Tell us how calls are handled today, and we will show you how MosqueAI would
          deal with them. No obligation, and no long-term contract.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-light">
            Send us an enquiry
          </Link>
          <a href={site.phone.href} className={`btn ${styles.ghost}`}>
            Call {site.phone.display}
          </a>
        </div>

        <dl className={styles.details}>
          <div>
            <dt>Based in</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Live demo line</dt>
            <dd>UK number coming soon</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
