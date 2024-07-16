import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Lava = ({ room }) => {
  const [passed, setPassed] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const agility = useBoundStore((state) => state.agility.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 25;
    useBoundStore.setState({ mapTiles: tiles });

    const roll = new DiceRoll("d100");
    if (
      roll.total <=
      parseInt(dex) + parseInt(agility) + parseInt(lucky) - 10
    ) {
      setPassed(true);
      setAdjustedHP(-1);
    } else {
      setPassed(false);
      setAdjustedHP(-3);
    }
  }, []);

  return (
    <>
      <p>
        <strong>Lava (25)</strong> Pools of glowing hot lava gurgle and bubble
        all around, and every few seconds pieces of rock explode into fragments,
        sending hot lava in all directions.
      </p>
      {passed && (
        <p>You barely avoid the lava but still take some damage. -1 HP</p>
      )}
      {!passed && <p>You get burned by the lava and exploding rocks. -3 HP</p>}
    </>
  );
};
