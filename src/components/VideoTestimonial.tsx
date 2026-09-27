"use client";

import { useState } from "react";
import Image from "next/image";
import { videoTestimonial } from "@/content/site";
import styles from "./VideoTestimonial.module.css";

export function VideoTestimonial() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.frame} ${playing ? styles.playing : ""}`}>
        {playing ? (
          <video
            className={styles.media}
            src={videoTestimonial.video}
            title={`A word from ${videoTestimonial.name}, ${videoTestimonial.role}`}
            autoPlay
            controls
            playsInline
          />
        ) : (
          <button
            type="button"
            className={styles.poster}
            onClick={() => setPlaying(true)}
            aria-label={`Play a video testimonial from ${videoTestimonial.name}, ${videoTestimonial.role}`}
          >
            <Image
              src={videoTestimonial.poster}
              alt=""
              fill
              placeholder="blur"
              sizes="(max-width: 620px) 100vw, 280px"
              className={styles.image}
            />
            <span className={styles.shade} aria-hidden="true" />
            <span className={styles.play} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" />
              </svg>
            </span>
            <span className={styles.caption}>
              <strong>{videoTestimonial.name}</strong>
              <small>{videoTestimonial.role}</small>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
