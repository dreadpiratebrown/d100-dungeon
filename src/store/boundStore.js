import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEquipmentStore } from "./equipment";
import { useHeroInfoStore } from "./hero";
import { useQuestsStore } from "./quests";
import { useSkillsStore } from "./skills";
import { useStatsStore } from "./stats";

export const useBoundStore = create(
  persist(
    (...a) => ({
      ...useEquipmentStore(...a),
      ...useHeroInfoStore(...a),
      ...useQuestsStore(...a),
      ...useSkillsStore(...a),
      ...useStatsStore(...a),
    }),
    { name: "d100-store" }
  )
);
