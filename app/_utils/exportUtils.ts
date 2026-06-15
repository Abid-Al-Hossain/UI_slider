import type { SliderState } from "../types";

export type ExportPayload = {
  fileName: string;
  mimeType: "text/plain;charset=utf-8";
  content: string;
};

export function buildExportPayload(state: SliderState, fileName = "slider") : ExportPayload {
  return {
    fileName: `${fileName || "slider"}.jsx`,
    mimeType: "text/plain;charset=utf-8",
    content: buildReactCode(state),
  };
}

export function buildReactCode(state: SliderState) {
  return `import * as React from "react";

const state = ${JSON.stringify(state, null, 2)};
function resolveFont(s) { return s.fontBucket === "google" ? '"' + s.googleFontFamily + '", sans-serif' : "inherit"; }
function buildShadow(s) { if (!s.shadowEnabled) return "none"; var hex = Math.round(s.shadowOpacity * 255).toString(16).padStart(2, "0"); return s.shadowX + "px " + s.shadowY + "px " + s.shadowBlur + "px " + s.shadowSpread + "px " + s.shadowColor + hex; }


export default function SliderComponent() {
  const invalid = state.invalid || state.previewState === "invalid";
  const message = invalid ? state.errorText : state.showSuccess ? state.successText : state.showHelper ? state.helper : "";
  const datalistId = \`\${state.id}-marks\`;
  const step = Math.max(1, state.step);
  const clampedValue = Math.min(state.max, Math.max(state.min, state.value));
  const markValues =
    state.markMode === "none"
      ? []
      : Array.from({ length: Math.floor((state.max - state.min) / step) + 1 }, (_, index) => state.min + index * step).filter((value) => value <= state.max);
  const rangeStyle = {
    accentColor: state.accent,
    width: state.orientation === "vertical" ? state.height : "100%",
    writingMode: state.orientation === "vertical" ? "vertical-lr" : "horizontal-tb",
  };

  return (
    <div
      style={{
        width: state.width,
        minHeight: state.height,
        padding: state.padding,
        display: "grid",
        alignContent: "center",
        gap: state.gap,
        borderRadius: state.radius,
        border: \`\${state.borderWidth}px ${state.borderStyle} \${invalid ? state.errorColor : state.previewState === "focus" ? state.accent : state.border}\`,
        boxShadow: \`0 \${Math.round(state.shadow / 3)}px \${state.shadow}px rgba(0,0,0,.28)\`,
        background: state.background,
        color: state.foreground,
        fontFamily: resolveFont(state),
        opacity: state.disabled || state.previewState === "disabled" ? 0.55 : 1,
        outline: state.previewState === "focus" ? \`\${state.focusRing}px solid \${state.accent}\` : "none",
        transition: state.transitionDuration > 0 ? "all " + state.transitionDuration + "ms " + state.transitionEasing : "none",
      }}
    >
      <label htmlFor={state.id} style={{ fontSize: state.labelSize, fontWeight: state.fontWeight }}>
        {state.label}{state.required ? " *" : ""}
      </label>
      <p style={{ margin: 0, color: state.muted }}>{state.description}</p>
      <div style={{ display: "grid", gap: 8, justifyItems: state.orientation === "vertical" ? "start" : "stretch" }}>
        <input
          id={state.id}
          name={state.name}
          title={state.title}
          tabIndex={state.tabIndex}
          dir={state.dir}
          lang={state.lang}
          type="range"
          min={state.min}
          max={state.max}
          step={state.step}
          value={clampedValue}
          list={markValues.length ? datalistId : undefined}
          disabled={state.disabled}
          aria-invalid={invalid || undefined}
          aria-orientation={state.orientation}
          aria-valuetext={state.valueText}
          style={rangeStyle}
          onChange={() => undefined}
        />
        {markValues.length > 0 && (
          <datalist id={datalistId}>
            {markValues.map((value) => (
              <option key={value} value={value} label={state.markMode === "labels" ? String(value) : undefined} />
            ))}
          </datalist>
        )}
        {state.outputMode !== "none" && (
          <output
            htmlFor={state.id}
            style={{
              justifySelf: "start",
              borderRadius: 999,
              padding: state.outputMode === "tooltip" ? "4px 12px" : 0,
              background: state.outputMode === "tooltip" ? state.accent : "transparent",
              color: state.outputMode === "tooltip" ? "#ffffff" : state.foreground,
            }}
          >
            {state.valueText || clampedValue}
          </output>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", width: state.orientation === "vertical" ? state.height : "100%", color: state.muted, fontSize: 12 }}>
          <span>{state.min}</span>
          <span>{state.max}</span>
        </div>
      </div>
      <small style={{ color: invalid ? state.errorColor : state.showSuccess ? state.successColor : state.muted }}>{message}</small>
    </div>
  );
}
`;
}
