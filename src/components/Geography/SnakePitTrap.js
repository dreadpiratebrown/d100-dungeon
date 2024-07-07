import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const SnakePitTrap = () => {
  const [passed, setPassed] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const passTime = useBoundStore((state) => state.passTime);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    if (roll.total <= dex + traps + aware + lucky - 15) {
      setPassed(true);
    } else {
      setPassed(false);
      passTime();
      setAdjustedHP(-2);
    }
  }, []);

  return (
    <>
      <Markdown>
        **Snake Pit Trap (4)** Part of the dunegon floor has been rigged to fall
        away, dropping anyone foolish enough into a deep pit where a giant snake
        waits for its next meal.
      </Markdown>
      {passed && <Markdown>You avoid the trap.</Markdown>}
      {!passed && (
        <Markdown>
          You fail to avoid the trap. Belt check, time +1, -2 HP, encounter
          (73).
        </Markdown>
      )}
    </>
  );
};
