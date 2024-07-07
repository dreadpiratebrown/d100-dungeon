import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const GiantBallTrap = () => {
  const [passed, setPassed] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    if (roll.total <= dex + traps + aware + lucky - 5) {
      setPassed(true);
    } else {
      setPassed(false);
      setAdjustedHP(-6);
    }
  }, []);

  return (
    <>
      <Markdown>
        **Giant Ball Trap (1)** Part of the dungeon wall has been rigged to drop
        down into the floor and release a huge stone ball that will roll itself
        towards anyone entering the area and crush them.
      </Markdown>
      {passed && <Markdown>You avoid the trap.</Markdown>}
      {!passed && (
        <Markdown>You fail to avoid the trap. Belt check and -6 HP.</Markdown>
      )}
    </>
  );
};
