import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const PitTrap = ({ room }) => {
  const [passed, setPassed] = useState();
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 6;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const roll = new DiceRoll("d100");
      if (
        roll.total <=
        parseInt(dex) + parseInt(traps) + parseInt(aware) + parseInt(lucky) - 5
      ) {
        setPassed(true);
      } else {
        setPassed(false);
        passTime();
        setAdjustedHP(-2);
      }
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Pit Trap (6)</strong> Part of the dunegon floor has been
          rigged to fall away, dropping anyone foolish enough into a deep pit.
        </p>
        {passed && <p>You avoid the trap.</p>}
        {!passed && (
          <p>You fail to avoid the trap. Belt check, time +1, -2 HP.</p>
        )}
      </>
    )
  );
};
