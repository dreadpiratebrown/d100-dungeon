import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import "./styles.css";

export const RiverOne = ({ room }) => {
  const [result, setResult] = useState();
  const [success, setSuccess] = useState();
  const str = useBoundStore((state) => state.str.primary);
  const strong = useBoundStore((state) => state.strong.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  // HOW TO MAKE THIS PERSISTENT?
  useEffect(() => {
    const currentRoom = document.getElementById(room.gridLocation);
    const river = document.createElement("img");
    river.src = "assets/river-1.png";
    river.classList.add("geoFeature");
    currentRoom.appendChild(river);

    room.geoFeature = 41;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const swimRiver = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(str) + parseInt(strong) - 10) {
      setResult("You swim the river and make it to the other side.");
      setSuccess(true);
    } else {
      setResult(
        "You fail to swim the river and wash back up on the side you started from. Time +1, -2 HP"
      );
      setAdjustedHP(-2);
      passTime();
    }
  };

  return (
    <>
      <p>
        <strong>River (41)</strong> A fast flowing river is running from the top
        left hand corner to the bottom right hand corner of this area and will
        need to be crossed to proceed through any exits on the other side.
        <br />
        {!result && !success && (
          <button data-testid="swimRiver" onClick={swimRiver}>
            Swim River
          </button>
        )}
      </p>
      <p>{result}</p>
    </>
  );
};
