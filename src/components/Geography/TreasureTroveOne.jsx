import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const TreasureTroveOne = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const setGold = useBoundStore((state) => state.setGold);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 98;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const goldRoll = new DiceRoll("d100");
      const goldFound = goldRoll.total * 5;
      setGold(goldFound);
      setResult(`You find ${goldFound} gold and a treasure. TA`);
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Treasure Trove (98)</strong> You stumble into an area filled
          with treasures.
          <br />
          <br />
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
