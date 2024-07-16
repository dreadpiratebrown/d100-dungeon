import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import "./styles.css";

export const Portcullis = ({ room }) => {
  const [result, setResult] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [complete, setComplete] = useState(false);
  const str = useBoundStore((state) => state.str.primary);
  const strong = useBoundStore((state) => state.strong.score);
  const passTime = useBoundStore((state) => state.passTime);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    const currentRoom = document.getElementById(room.gridLocation);
    const portcullis = document.createElement("img");
    portcullis.src = "assets/portcullis.png";
    portcullis.classList.add("geoFeature");
    currentRoom.appendChild(portcullis);

    room.geoFeature = 49;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const openPortcullis = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(str) + parseInt(strong) - 15) {
      setResult("You open the portcullis enough to slip underneath.");
      setIsOpened(true);
      room.geoFeatureComplete = true;
      useBoundStore.setState({ mapTiles: tiles });
    } else {
      setResult(
        "The portcullis remains closed despite your best efforts. Area off-limits, time + 1, -1 HP"
      );
      setAdjustedHP(-1);
      passTime();
    }
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Portcullis (49)</strong> A large iron portcullis blocks the
          way across the entrance to this area of the dungeon, and will need to
          be lifted and wedged open, or you will be forced to retreat. You may
          attempt to lift the portcullis as many times as you wish until it is
          lifted, or you give up trying.
          <br />
          {!isOpened && (
            <button data-testid="openPortcullis" onClick={openPortcullis}>
              Open Portcullis
            </button>
          )}
        </p>
        <p>{result}</p>
      </>
    )
  );
};
