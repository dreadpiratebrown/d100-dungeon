import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const CageTrap = ({ room }) => {
  const [passed, setPassed] = useState();
  const [trapped, setTrapped] = useState();
  const [liftResults, setLiftResults] = useState("");
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const str = useBoundStore((state) => state.str.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const aware = useBoundStore((state) => state.aware.score);
  const strong = useBoundStore((state) => state.strong.score);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(dex) + parseInt(traps) + parseInt(aware) - 10) {
      setPassed(true);
    } else {
      setPassed(false);
      setTrapped(true);
    }
  }, []);

  const liftCage = () => {
    room.geoFeature = 11;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const roll = new DiceRoll("d100");
      if (roll.total <= parseInt(str) + parseInt(strong) - 20) {
        setTrapped(false);
      } else {
        setLiftResults(
          liftResults +
            `(${roll.total}) You fail to lift the cage. Try again. 
        `
        );
        passTime();
      }
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Cage Trap (11)</strong> A huge cage, hidden from view, has
          been suspended from the ceiling high above and will drop down over
          anyone walking by.
        </p>
        {passed && <p>You avoid the trap.</p>}
        {!passed && <p>You fail to avoid the trap.</p>}
        {trapped && (
          <p>
            You are trapped by the cage and must lift it to free yourself and
            proceed with the dungeon.
            <br />
            {liftResults}
            <br />
            <button onClick={liftCage} data-testid="liftCage">
              Lift Cage
            </button>
          </p>
        )}
        {trapped === false && <p>You lift the cage and free yourself.</p>}
      </>
    )
  );
};
