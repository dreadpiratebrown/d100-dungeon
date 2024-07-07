import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const PendulumTrap = () => {
  const [passed, setPassed] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    if (roll.total <= dex + traps + aware + lucky - 10) {
      setPassed(true);
    } else {
      setPassed(false);
      setAdjustedHP(-4);
    }
  }, []);

  return (
    <>
      <Markdown>
        **Pendulum Trap (3)** Several large axes have been suspended above, and
        rigged to swing out from hidden slots in the dungeon wall.
      </Markdown>
      {passed && <Markdown>You avoid the trap.</Markdown>}
      {!passed && <Markdown>You fail to avoid the trap. -4 HP.</Markdown>}
    </>
  );
};
