import Image from "next/image";
import { images, valuePoints } from "@/content/site";
import styles from "./ValueProp.module.css";

export function ValueProp() {
  return (
    <section className="section" aria-labelledby="value-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.media}>
          <Image
            src={images.valueProp.src}
            alt={images.valueProp.alt}
            fill
            placeholder="blur"
            sizes="(max-width: 880px) 100vw, 500px"
            className={styles.photo}
          />
        </div>

        <div>
          <div className="section-head">
            <h2 id="value-title">Callers get a real answer, not an answering machine</h2>
          </div>

          <ul className={styles.list}>
            {valuePoints.map((v) => (
              <li key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
