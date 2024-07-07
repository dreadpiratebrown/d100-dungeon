import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const SpikedPitTrap = () => {
  const [passed, setPassed] = useState();
  const [damage, setDamage] = useState();
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
      const spikeRoll = new DiceRoll("d10");
      if (spikeRoll < 6) {
        setAdjustedHP(-2);
        setDamage(-2);
      } else {
        setAdjustedHP(-4);
        setDamage(-4);
      }
    }
  }, []);

  return (
    <>
      <Markdown>
        **Spiked Pit Trap (5)** Part of the dunegon floor has been rigged to
        fall away, dropping anyone foolish enough into a deep pit furnished with
        razor sharp spikes.
      </Markdown>
      {passed && <Markdown>You avoid the trap.</Markdown>}
      {!passed && (
        <Markdown>
          You fail to avoid the trap. Belt check, time +1, {damage} HP.
        </Markdown>
      )}
    </>
  );
};
