"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Slider from "@/components/shared/input/Slider";
import type { SliderState } from "../types";

type Props = {
  state: SliderState;
  update: <K extends keyof SliderState>(key: K, value: SliderState[K]) => void;
};

export default function ShadowSection({ state, update }: Props) {
  return (
    <SectionCard title="Shadow" subtitle="Shadow controls that are native, preview-honest, and React-export-honest.">
      <Slider label="Shadow" value={state.shadow} min={0} max={80} step={1} onChange={(value) => update("shadow", value)} />
    </SectionCard>
  );
}
