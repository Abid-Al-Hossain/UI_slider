"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Slider from "@/components/shared/input/Slider";
import Select from "@/components/shared/input/Select";
import type { SliderState } from "../types";

type Props = {
  state: SliderState;
  update: <K extends keyof SliderState>(key: K, value: SliderState[K]) => void;
};

export default function FieldSection({ state, update }: Props) {
  return (
    <SectionCard title="Field" subtitle="Field controls that are native, preview-honest, and React-export-honest.">
      <Slider label="Value" value={state.value} min={0} max={100} step={1} onChange={(value) => update("value", value)} />
      <Slider label="Min" value={state.min} min={0} max={50} step={1} onChange={(value) => update("min", value)} />
      <Slider label="Max" value={state.max} min={60} max={200} step={1} onChange={(value) => update("max", value)} />
      <Slider label="Step" value={state.step} min={1} max={25} step={1} onChange={(value) => update("step", value)} />
      <Select label="Orientation" value={state.orientation} options={[
  "horizontal",
  "vertical"
]} onChange={(value) => update("orientation", value)} />
      <Input label="aria-valuetext" value={state.valueText} onChange={(value) => update("valueText", value)} />
      <Select label="Marks" value={state.markMode} options={[
  "none",
  "steps",
  "labels"
]} onChange={(value) => update("markMode", value)} />
      <Select label="Output" value={state.outputMode} options={[
  "none",
  "inline",
  "tooltip"
]} onChange={(value) => update("outputMode", value)} />
    </SectionCard>
  );
}
