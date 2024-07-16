import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Fountain = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 66;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const drink = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
        setResult("The liquid is foul tasting and you feel ill. Curse");
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        setResult("The liquid is refreshing but nothing else happens.");
        break;
      case 7:
      case 8:
      case 9:
      case 10:
        setResult("The liquid tastes sweet and you drink greedily. Boost");
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
              <strong>Fountain (66-69)</strong> A strangely colored glowing
              liquid pours from holes in the wals and flows to a central
              fountain. A wooden cup resting on a platform nearby invites all to
              sample its delights. Drink?
              <br />
              <button onClick={drink} data-testid="drinkBtn">
                Drink
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
