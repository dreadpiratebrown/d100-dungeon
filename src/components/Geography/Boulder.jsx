import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import "./styles.css";

export const Boulder = ({ room }) => {
  const [result, setResult] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [complete, setComplete] = useState(false);
  const str = useBoundStore((state) => state.str.primary);
  const strong = useBoundStore((state) => state.strong.score);
  const passTime = useBoundStore((state) => state.passTime);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  // HOW TO MAKE THIS PERSISTENT?
  useEffect(() => {
    const currentRoom = document.getElementById(room.gridLocation);
    const boulder = document.createElement("img");
    boulder.src = "assets/boulder.png";
    boulder.classList.add("geoFeature");
    currentRoom.appendChild(boulder);

    room.geoFeature = 51;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const moveBoulder = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(str) + parseInt(strong) - 10) {
      setResult("You move the boulder enough to get into the room.");
      setIsOpened(true);
      room.geoFeatureComplete = true;
      useBoundStore.setState({ mapTiles: tiles });
    } else {
      setResult(
        "The boulder remains unmoved despite your best efforts. Area off-limits, time + 1, -1 HP"
      );
      setAdjustedHP(-1);
      passTime();
    }
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Boulder (51)</strong> A large boulder blocks the way through
          this area of the dungeon, and will need to be moved, or you will be
          forced to retreat. You may attempt to move the boulder as many times
          as you wish until it is moved, or you give up trying.
          <br />
          {!isOpened && (
            <button data-testid="moveBoulder" onClick={moveBoulder}>
              Move Boulder
            </button>
          )}
        </p>
        <p>{result}</p>
      </>
    )
  );
};
