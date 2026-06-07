import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Orgchief — Your AI Exec Team";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#FFFFFF",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 13,
            backgroundColor: "#FF5722",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            OC
          </span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#FF5722",
            }}
          />
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: "#FF5722",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            AI Employees for your business
          </span>
        </div>

        {/* Headline line 1 */}
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: "#111110",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 4,
          }}
        >
          Your business deserves
        </div>

        {/* Headline line 2 — accent */}
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 800,
            color: "#FF5722",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 28,
          }}
        >
          a real exec team.
        </div>

        {/* Sub */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#4A4A46",
            lineHeight: 1.5,
            maxWidth: 680,
            marginBottom: 44,
          }}
        >
          AI CMO, COO, CRO — executives who watch your numbers and get things done.
        </div>

        {/* Role chips */}
        <div style={{ display: "flex", gap: 10 }}>
          {(["CMO", "CRO", "COO", "CTO", "CFO", "CHRO"] as const).map((role) => {
            const active = role === "CMO" || role === "CRO" || role === "COO";
            return (
              <div
                key={role}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: 100,
                  backgroundColor: active ? "#FFF3EE" : "#F7F5F1",
                  border: `1.5px solid ${active ? "rgba(255,87,34,0.25)" : "rgba(17,17,16,0.08)"}`,
                  fontSize: 18,
                  fontWeight: 700,
                  color: active ? "#FF5722" : "#8A8A82",
                }}
              >
                {role}
              </div>
            );
          })}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 96,
            display: "flex",
            fontSize: 20,
            color: "#BBBBB0",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          orgchief.com
        </div>
      </div>
    ),
    { ...size }
  );
}
