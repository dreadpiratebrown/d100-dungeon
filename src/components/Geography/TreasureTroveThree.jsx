import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const TreasureTroveThree = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const [treasureRolled, setTreasureRolled] = useState(false);
  const setGold = useBoundStore((state) => state.setGold);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 100;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const goldRoll = new DiceRoll("d100");
      const goldFound = goldRoll.total * 20;
      setGold(goldFound);
      setResult(`You find ${goldFound} gold. `);
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const rollTA = () => {
    setResult(result + "You find a treasure. ");
    setResult(result + "You find a treasure. ");
    setResult(result + "You find a treasure. ");
    setTreasureRolled(true);
  };

  const rollTB = () => {
    setResult(result + "You find a treasure. ");
    setResult(result + "You find a treasure. ");
    setTreasureRolled(true);
  };

  const rollTC = () => {
    setResult(result + "You find a treasure. ");
    setTreasureRolled(true);
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Treasure Trove (100)</strong> You stumble into an area filled
          with treasures.
          <br />
          {!treasureRolled && (
            <>
              <button onClick={rollTC} data-testid="rollTC">
                Roll TC Once
              </button>
              <button onClick={rollTB} data-testid="rollTB">
                Roll TB Twice
              </button>
              <button onClick={rollTA} data-testid="rollTA">
                Roll TA Thrice
              </button>
            </>
          )}
          <br />
          {result && treasureRolled && (
            <span data-testid="result">{result}</span>
          )}
        </p>
      </>
    )
  );
};
