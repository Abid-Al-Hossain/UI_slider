"use client";

import type { CSSProperties } from "react";
import type { SliderState } from "../types";

function shellStyle(state: SliderState): CSSProperties {
  const invalid = state.invalid || state.previewState === "invalid";
  return {
    width: state.width,
    minHeight: state.height,
    padding: state.padding,
    gap: state.gap,
    borderRadius: state.radius,
    border: `${state.borderWidth}px solid ${invalid ? "#fb7185" : state.previewState === "focus" ? state.accent : state.border}`,
    boxShadow: `0 ${Math.round(state.shadow / 3)}px ${state.shadow}px rgba(0,0,0,.28)`,
    background: state.background,
    color: state.foreground,
    fontFamily: state.fontFamily,
    opacity: state.disabled || state.previewState === "disabled" ? 0.55 : 1,
    outline: state.previewState === "focus" ? `${state.focusRing}px solid ${state.accent}` : "none",
    transition: state.motion ? "all 180ms ease" : "none",
  };
}

export default function LivePreview({ state }: { state: SliderState }) {
  const invalid = state.invalid || state.previewState === "invalid";
  const message = invalid ? state.errorText : state.showSuccess ? state.successText : state.showHelper ? state.helper : "";
  const commonInput = "w-full rounded-xl border bg-white/10 px-3 py-2 outline-none";
  const optionCount = "optionCount" in state && typeof state.optionCount === "number" ? state.optionCount : 4;
  const options = Array.from({ length: optionCount }, (_, index) => `Option ${index + 1}`);

  return (
    <div style={shellStyle(state)} className="grid content-center">
      <label htmlFor={state.id} style={{ fontSize: state.labelSize, fontWeight: state.fontWeight }}>{state.label}{state.required ? " *" : ""}</label>
      <p className="text-sm" style={{ color: state.muted }}>{state.description}</p>
      <div className="grid gap-2"><input id={state.id} name={state.name} title={state.title} tabIndex={state.tabIndex} dir={state.dir} lang={state.lang} type="range" min={state.min} max={state.max} step={state.step} value={state.value} disabled={state.disabled} aria-invalid={invalid || undefined} aria-valuetext={state.valueText} style={{ accentColor: state.accent }} onChange={() => undefined} />{state.outputMode !== "none" && <output htmlFor={state.id}>{state.valueText}</output>}</div>
      <small style={{ color: invalid ? "#fb7185" : state.showSuccess ? "#22c55e" : state.muted }}>{message}</small>
    </div>
  );
}
