import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Snehitham Charity Group — Educate a child, empower a future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundImage:
            "linear-gradient(120deg, #4A0B2E 0%, #6E1246 38%, #C21E7A 72%, #F5A623 130%)",
          color: "#F7F1EA",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={96}
            height={96}
            alt=""
            style={{ borderRadius: "50%", background: "#fff" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
              Snehitham
            </span>
            <span
              style={{
                fontSize: 20,
                letterSpacing: 4,
                textTransform: "uppercase",
                opacity: 0.85,
              }}
            >
              Charity Group
            </span>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <span
            style={{
              fontSize: 26,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#F5A623",
              fontWeight: 600,
            }}
          >
            School to Society
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Educate a Child, Empower a Future
          </span>
        </div>

        {/* Bottom: url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          <span>Every child can change the world</span>
          <span>snehitham.org</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
