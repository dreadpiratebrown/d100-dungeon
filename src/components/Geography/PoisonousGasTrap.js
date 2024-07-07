import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const PoisonousGasTrap = () => {
  const [passed, setPassed] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const passTime = useBoundStore((state) => state.passTime);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    if (roll.total <= dex + traps + aware + lucky) {
      setPassed(true);
    } else {
      setPassed(false);
      passTime();
      setAdjustedHP(-3);
    }
  }, []);

  return (
    <>
      <Markdown>
        **Poisonous Gas Trap (2)** A vapour of green poisonous gas has been set
        to billow out from hidden slots in the dungeon floor.
      </Markdown>
      {passed && <Markdown>You avoid the trap.</Markdown>}
      {!passed && (
        <Markdown>You fail to avoid the trap. Time +1 and -3 HP.</Markdown>
      )}
    </>
  );
};
