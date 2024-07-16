import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const BottomlessPit = ({ room }) => {
  const [result, setResult] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const agility = useBoundStore((state) => state.agility.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 31;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const jumpPit = () => {
    const roll = new DiceRoll("d100");
    if (
      roll.total <=
      parseInt(dex) + parseInt(agility) + parseInt(lucky) - 10
    ) {
      setResult("You successfully jump across the pit.");
    } else {
      setResult("You fall into the abyss. You are dead.");
      setAdjustedHP(-1000);
    }
  };

  return (
    <>
      <p>
        <strong>Bottomless Pit (31)</strong> A deep pit, probably once a mine
        shaft, blocks the way to all other exits. The pit seems to go on
        forever, which suggests it's a waste of time trying to descend. The only
        way to leave this area other than the way you came is to jump the pit.
        <br />
        {!result && (
          <button data-testid="jumpPit" onClick={jumpPit}>
            Jump Pit
          </button>
        )}
      </p>
      <p>{result}</p>
    </>
  );
};
