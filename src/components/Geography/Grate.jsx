import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Grate = ({ room }) => {
  const [result, setResult] = useState();
  const [isLifted, setIsLifted] = useState(false);
  const [complete, setComplete] = useState(false);
  const str = useBoundStore((state) => state.str.primary);
  const strong = useBoundStore((state) => state.strong.score);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 96;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const liftGrate = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(str) + parseInt(strong)) {
      setIsLifted(true);
      const searchRoll = new DiceRoll("d10");
      switch (searchRoll.total) {
        case 1:
        case 2:
        case 3:
        case 4:
          setResult("It was nothing of interest.");
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          setResult("It's just an item. Item");
          break;
        case 9:
        case 10:
          setResult("It's a treasure. TA");
          break;
        default:
          break;
      }
      room.geoFeatureComplete = true;
      useBoundStore.setState({ mapTiles: tiles });
    } else {
      setResult("The grate remains unmoved. Time +1");
      passTime();
    }
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Grate (96-97)</strong> Recessed in the floor is a small grate
          and after a quick search you find it is covering a narrow pit filled
          with muck. Something buried in the dirt catches the eye. You may
          attempt to lift the grate as many times as you wish until it is
          lifted.
          <br />
          {!isLifted && (
            <button data-testid="liftGrate" onClick={liftGrate}>
              Lift Grate
            </button>
          )}
        </p>
        <p>{result}</p>
      </>
    )
  );
};
