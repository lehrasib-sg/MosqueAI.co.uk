import { faqs } from "@/content/site";
import styles from "./Faq.module.css";

export function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className={`wrap ${styles.grid}`}>
        <div className="section-head">
          <h2 id="faq-title">Questions committees usually ask</h2>
          <p>
            Anything else you would like to know? Give us a ring and we will talk it
            through.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((f) => (
            <details key={f.q} name="faq" className={styles.item}>
              <summary>
                {f.q}
                <span className={styles.marker} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
