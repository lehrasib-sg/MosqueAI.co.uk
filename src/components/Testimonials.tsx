import { VideoTestimonial } from "./VideoTestimonial";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`section ${styles.section}`}
      aria-labelledby="testimonials-title"
    >
      <div className="wrap">
        <div className="section-head">
          <h2 id="testimonials-title">In the words of committee members</h2>
        </div>

        <VideoTestimonial />
      </div>
    </section>
  );
}
