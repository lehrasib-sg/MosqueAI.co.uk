"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/content/site";
import styles from "./DemoVideo.module.css";

const SLIDE_INTERVAL_MS = 4500;

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const [slide, setSlide] = useState(0);
  const slides = images.heroSlideshow;

  useEffect(() => {
    if (playing) return;
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing, slides.length]);

  return (
    <div className={styles.wrap} id="demo">
      <div className={`${styles.frame} ${playing ? styles.playing : ""}`}>
        {playing ? (
          <video
            className={styles.media}
            src="/mosqueai.mp4"
            title="MosqueAI demo video"
            autoPlay
            controls
            playsInline
          />
        ) : (
          <button
            type="button"
            className={styles.poster}
            onClick={() => setPlaying(true)}
            aria-label="Play the MosqueAI demo video, 37 seconds"
          >
            {slides.map((s, i) => (
              <Image
                key={s.alt}
                src={s.src}
                alt=""
                fill
                preload={i === 0}
                placeholder="blur"
                sizes="(max-width: 900px) 100vw, 448px"
                quality={72}
                className={`${styles.image} ${i === slide ? styles.imageActive : ""}`}
              />
            ))}
            <span className={styles.shade} aria-hidden="true" />
            <span className={styles.dots} aria-hidden="true">
              {slides.map((s, i) => (
                <span key={s.alt} className={i === slide ? `${styles.dot} ${styles.dotActive}` : styles.dot} />
              ))}
            </span>
            <span className={styles.control} aria-hidden="true">
              <span className={styles.play}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" />
                </svg>
              </span>
              <span className={styles.label}>
                Watch the demo
                <span className={styles.duration}>0:37</span>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
