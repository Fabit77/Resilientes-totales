import { ImageResponse } from "next/og";
export const alt = "Resilientes Totales · Detrás de cada logro, una historia.";
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
          justifyContent: "space-between",
          background: "#141511",
          color: "#f3f0e7",
          padding: "65px",
          borderBottom: "18px solid #e7663d",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          <span>RESILIENTES TOTALES</span>
          <span>DOCUMENTALES · CHILE</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: -4,
          }}
        >
          <span>Detrás de cada logro,</span>
          <span style={{ color: "#e7663d" }}>una historia.</span>
        </div>
        <div style={{ display: "flex", fontSize: 24 }}>
          El lado humano del deporte chileno.
        </div>
      </div>
    ),
    size,
  );
}
