import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const PendulumTrap = ({ room }) => {
  const [passed, setPassed] = useState();
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 3;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const roll = new DiceRoll("d100");
      if (
        roll.total <=
        parseInt(dex) + parseInt(traps) + parseInt(aware) + parseInt(lucky) - 10
      ) {
        setPassed(true);
      } else {
        setPassed(false);
        setAdjustedHP(-4);
      }
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Pendulum Trap (3)</strong> Several large axes have been
          suspended above, and rigged to swing out from hidden slots in the
          dungeon wall.
        </p>
        {passed && <p>You avoid the trap.</p>}
        {!passed && <p>You fail to avoid the trap. -4 HP.</p>}
      </>
    )
  );
};
