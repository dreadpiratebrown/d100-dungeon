import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Crypt = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 54;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const openCrypt = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
        setResult(
          "Inside a skeleton animates and rises from the tomb and then attacks. Encounter (72)"
        );
        break;
      case 2:
      case 3:
      case 4:
        setResult("The tomb is empty.");
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setResult(
          "Hidden under the bones of a long dead corpse is a treasure. TA"
        );
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
              <strong>Crypt (54)</strong> The area is dank and foul smelling.
              All around are tombs which have been disturbed and still hold
              remains of the dead. One sarcophagus catches the eye as it is
              still intact. Open it?
              <br />
              <button onClick={openCrypt} data-testid="openCrypt">
                Open Crypt
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
