import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const LeverTwo = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const setLevers = useBoundStore((state) => state.setLevers);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 36;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const pullLever = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
        setResult("Something bad happens. Curse.");
        break;
      case 2:
      case 3:
      case 4:
        setResult("Nothing seems to happen.");
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setResult(
          "After it is pulled a far-off rumble can be heard. Levers +1"
        );
        setLevers(1);
        break;
      default:
        break;
    }
    room.geoFeatureComplete = true;
    useBoundStore.setState({ mapTiles: tiles });
  };

  return (
    !complete && (
      <>
        <p>
          {!result && (
            <>
              <strong>Lever (36-40)</strong> In a secluded part of the dungeon
              you find a lever protruding from the wall.
              <br />
              <button onClick={pullLever} data-testid="pullLever">
                Pull Lever
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
