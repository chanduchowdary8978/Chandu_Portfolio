import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c0906",
          color: "#e8e0d8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#f0701c", fontFamily: "monospace", marginBottom: 24 }}>
          Portfolio · 2026
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginBottom: 24 }}>Chandu</div>
        <div style={{ fontSize: 36, color: "#e8e0d8" }}>
          Machine Learning · Deep Learning · ML Systems
        </div>
      </div>
    ),
    { ...size }
  )
}
