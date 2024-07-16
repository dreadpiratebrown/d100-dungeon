import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const CrossfireTrap = ({ room }) => {
  const [passed, setPassed] = useState();
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 10;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const roll = new DiceRoll("d100");
      if (
        roll.total <=
        parseInt(dex) + parseInt(traps) + parseInt(aware) + parseInt(lucky)
      ) {
        setPassed(true);
      } else {
        setPassed(false);
        setAdjustedHP(-1);
      }
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Crossfire Trap (10)</strong> Arrows have been set to shoot out
          from hidden holes in the dungeon wall.
        </p>
        {passed && <p>You avoid the trap.</p>}
        {!passed && <p>You fail to avoid the trap. -1 HP.</p>}
      </>
    )
  );
};
