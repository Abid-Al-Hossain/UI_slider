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
  return [
    "import * as React from \"react\";",
    "",
    "const state = " + JSON.stringify(state, null, 2) + ";",
    "",
    "export default function SliderComponent() {",
    "  return (",
        "    <label htmlFor={state.id}>{state.label}</label>",
    "    <input id={state.id} name={state.name} type=\"range\" min={state.min} max={state.max} step={state.step} value={state.value} disabled={state.disabled} aria-valuetext={state.valueText} onChange={() => undefined} />",
    "  );",
    "}",
    "",
  ].join("\n");
}
