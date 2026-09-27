import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f6f2e9",
          fontFamily: "Georgia, serif",
        }}
      >
        <svg width="64" height="72" viewBox="0 0 28 32" style={{ marginBottom: 32 }}>
          <path
            d="M2 31V13.5C2 6.6 7.4 1.5 14 1.5s12 5.1 12 12V31"
            fill="none"
            stroke="#0e3b2e"
            strokeWidth="2.25"
          />
          <path
            d="M8.5 31V16.5c0-3.2 2.4-5.75 5.5-5.75s5.5 2.55 5.5 5.75V31"
            fill="none"
            stroke="#a87b35"
            strokeWidth="2.25"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 76, color: "#0a2e24", fontWeight: 600 }}>
          MosqueAI
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#4a5a53", marginTop: 24, maxWidth: 900 }}>
          {site.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
