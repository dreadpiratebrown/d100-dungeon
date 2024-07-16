import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import "./styles.css";

export const RopeBridgeTwo = ({ room }) => {
  const [result, setResult] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const agility = useBoundStore((state) => state.agility.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  // HOW TO MAKE THIS PERSISTENT?
  useEffect(() => {
    const currentRoom = document.getElementById(room.gridLocation);
    const bridge = document.createElement("img");
    bridge.src = "assets/rope-bridge-2.png";
    bridge.classList.add("geoFeature");
    currentRoom.appendChild(bridge);

    room.geoFeature = 30;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const crossBridge = () => {
    const roll = new DiceRoll("d100");
    if (roll.total <= parseInt(dex) + parseInt(agility) + parseInt(lucky) - 5) {
      setResult(
        "You manage to make your way across the bridge without incident."
      );
    } else {
      setResult(
        "You fall while crossing the bridge. -10 HP, but you can still use the exits."
      );
      setAdjustedHP(-10);
    }
  };

  return (
    <>
      <p>
        <strong>Rope Bridge (30)</strong> A huge area of the dungeon floor has
        at one time collapsed, leaving behind a deep void running from the top
        left hand corner to the bottom right hand corner of this area. At some
        time someone, or something, has erected a crude rope bridge that now
        provides the only way across this bottomless gorge. Each time you wish
        to use an exit on the opposite side of the gorge you must cross the
        bridge.
        <br />
        {!result && (
          <button data-testid="crossBridge" onClick={crossBridge}>
            Cross Bridge
          </button>
        )}
      </p>
      <p>{result}</p>
    </>
  );
};
