import { steps } from "@/content/site";
import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  return (
    <section id="how" className={`section ${styles.section}`} aria-labelledby="how-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="how-title" className={styles.title}>
            Four steps, and we do most of the work
          </h2>
          <p>
            Your committee stays involved at every stage, and nothing goes live until
            you are happy with it.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className={styles.num}>
                Step {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
