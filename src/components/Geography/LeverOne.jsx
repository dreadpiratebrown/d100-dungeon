import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const LeverOne = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const setLevers = useBoundStore((state) => state.setLevers);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 23;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const pullLever = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
        setResult("Something bad happens. Curse.");
        break;
      case 3:
      case 4:
      case 5:
        setResult("Nothing seems to happen.");
        break;
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
              <strong>Lever (23-24)</strong> In a secluded part of the dungeon
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
