"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Switch from "@/components/shared/input/Switch";
import type { SliderState } from "../types";

type Props = {
  state: SliderState;
  update: <K extends keyof SliderState>(key: K, value: SliderState[K]) => void;
};

export default function BehaviorSection({ state, update }: Props) {
  return (
    <SectionCard title="Behavior" subtitle="Behavior controls that are native, preview-honest, and React-export-honest.">
      <Switch label="Motion safe transition" checked={state.motion} onChange={(value) => update("motion", value)} />
    </SectionCard>
  );
}
