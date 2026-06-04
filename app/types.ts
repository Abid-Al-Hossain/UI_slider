export type SectionId = "presets" | "basics" | "metadata" | "field" | "validation" | "behavior" | "layout" | "sizing" | "colors" | "border" | "radius" | "shadow" | "typography" | "focus" | "states" | "accessibility";

export type SliderState = {
  showHelper: boolean;
  showSuccess: boolean;
  width: number;
  height: number;
  gap: number;
  padding: number;
  radius: number;
  borderWidth: number;
  shadow: number;
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  border: string;
  fontFamily: string;
  labelSize: number;
  inputSize: number;
  fontWeight: number;
  focusRing: number;
  motion: boolean;
  previewState: "default" | "hover" | "focus" | "active" | "disabled" | "invalid" | "loading" | "empty" | "filled";
  label: string;
  description: string;
  helper: string;
  errorText: string;
  successText: string;
  value: number;
  min: number;
  max: number;
  step: number;
  id: string;
  name: string;
  title: string;
  tabIndex: number;
  dir: "ltr" | "rtl" | "auto";
  lang: string;
  orientation: "horizontal" | "vertical";
  valueText: string;
  markMode: "none" | "steps" | "labels";
  outputMode: "none" | "inline" | "tooltip";
  rangeMode: boolean;
  required: boolean;
  disabled: boolean;
  readOnly: boolean;
  invalid: boolean;
};

export type StudioPreset = {
  id: string;
  family: string;
  archetype: string;
  variant: string;
  size: string;
  tags: string[];
  state: SliderState;
};

export const SECTIONS: Array<{ id: SectionId; label: string }> = [
  {
    "id": "presets",
    "label": "Presets"
  },
  {
    "id": "basics",
    "label": "Basics"
  },
  {
    "id": "metadata",
    "label": "Metadata"
  },
  {
    "id": "field",
    "label": "Field"
  },
  {
    "id": "validation",
    "label": "Validation"
  },
  {
    "id": "behavior",
    "label": "Behavior"
  },
  {
    "id": "layout",
    "label": "Layout"
  },
  {
    "id": "sizing",
    "label": "Sizing"
  },
  {
    "id": "colors",
    "label": "Colors"
  },
  {
    "id": "border",
    "label": "Border"
  },
  {
    "id": "radius",
    "label": "Radius"
  },
  {
    "id": "shadow",
    "label": "Shadow"
  },
  {
    "id": "typography",
    "label": "Typography"
  },
  {
    "id": "focus",
    "label": "Focus"
  },
  {
    "id": "states",
    "label": "State Preview"
  },
  {
    "id": "accessibility",
    "label": "Accessibility"
  }
];
