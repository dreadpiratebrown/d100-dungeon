import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const TrappedChestFour = ({ room }) => {
  const [result, setResult] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const traps = useBoundStore((state) => state.traps.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const passTime = useBoundStore((state) => state.passTime);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 80;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const openChest = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(dex) + parseInt(traps) + parseInt(lucky) - 5) {
      setResult(
        `You successfully disarm the trap and open the chest (${roll.total}). TA`
      );
      setIsOpened(true);
      room.geoFeatureComplete = true;
      useBoundStore.setState({ mapTiles: tiles });
    } else {
      setResult(`You fail to disarm the trap (${roll.total}). Time +1, -2 HP.`);
      passTime();
      setAdjustedHP(-2);
    }
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Trapped Chest (80)</strong> A large wooden chest banded with
          wooden trim sits proudly waiting to be opened. You may try and open
          the chest by making a TRAPPED CHEST test as many times as you wish
          until it is opened.
          <br />
          {!isOpened && (
            <button data-testid="openChest" onClick={openChest}>
              Open Chest
            </button>
          )}
        </p>
        <p>{result}</p>
      </>
    )
  );
};
