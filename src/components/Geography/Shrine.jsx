import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Shrine = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 79;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const pray = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
        setResult(
          "After some time something appears not quite right. Time + 1, Curse"
        );
        break;
      case 3:
      case 4:
      case 5:
        setResult("Nothing seems to happen. Time +1");
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setResult("A statue of a god glows brightly. Time +1, Boost");
        break;
      default:
        break;
    }
    passTime();
    room.geoFeatureComplete = true;
    useBoundStore.setState({ mapTiles: tiles });
  };

  return (
    !complete && (
      <>
        <p>
          {!result && (
            <>
              <strong>Shrine (79)</strong> A magnificent shrine stands alone and
              offers a place of worship. Pray to your deity?
              <br />
              <button onClick={pray} data-testid="prayBtn">
                Pray
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
