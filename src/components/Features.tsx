import Image from "next/image";
import { features } from "@/content/site";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="wrap">
        <div className={`section-head ${styles.head}`}>
          <h2 id="why-title">Built around the way mosques really run</h2>
          <p>
            Set up with your own timetable, services and contacts, and trained on the
            calls your community actually makes.
          </p>
        </div>

        <ul className={styles.grid}>
          {features.map((f) => (
            <li key={f.title} className={styles.item}>
              <div className={styles.itemMedia}>
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  placeholder="blur"
                  quality={68}
                  sizes="(max-width: 460px) 100vw, 300px"
                  className={styles.itemPhoto}
                />
              </div>
              <div className={styles.itemBody}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
