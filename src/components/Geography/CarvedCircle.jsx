import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const CarvedCircle = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const setLevers = useBoundStore((state) => state.setLevers);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 60;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const stand = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
        setResult("When you step into the circle it starts to glow red. Curse");
        break;
      case 2:
      case 3:
        setResult(
          "The circle drops and you fall into a pit., Time +1, belt check"
        );
        passTime();
        break;
      case 4:
      case 5:
        setResult(
          "As you near the circle there is a flash and a puff of smoke, and a monster appears. Encounter"
        );
        break;
      case 6:
      case 7:
        setResult(
          "Standing on the circle causes it to drop slightly and a distant rumble can be heard. Levers +1"
        );
        setLevers(1);
        break;
      case 8:
      case 9:
      case 10:
        setResult(
          "When you step into the circle it starts to glow green. Boost"
        );
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
              <strong>Carved Circle (60-62)</strong> A large circle has been
              carved into the dungeon floor. Stand on it?
              <br />
              <button onClick={stand} data-testid="standBtn">
                Stand on Circle
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
