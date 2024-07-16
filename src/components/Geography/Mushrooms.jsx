import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Mushrooms = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const setFood = useBoundStore((state) => state.setFood);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 71;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const eatMushrooms = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
        setResult("They taste foul and make you very ill. Curse");
        break;
      case 3:
      case 4:
        setResult("They have an unpleasant flavor. Curse +20");
        break;
      case 5:
      case 6:
        setResult("The mushrooms are pleasant but nothing else happens.");
        break;
      case 7:
      case 8:
        setResult(
          "The mushrooms are nourishing and you gather enough for some meals. Food +2"
        );
        setFood(2);
        break;
      case 9:
      case 10:
        setResult(
          "The mushrooms taste wonderful and you feel overwhelmed. Boost"
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
              <strong>Mushrooms (71)</strong> The whole area is home to some
              strange looking mushrooms. They are growing everywhere, and as you
              move through them their stalks twist and turn trying to get close.
              Eat some?
              <br />
              <button onClick={eatMushrooms} data-testid="eatMushrooms">
                Eat Mushrooms
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
