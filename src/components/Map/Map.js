import { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { tiles } from "../../shared/map";
import styles from "./styles.module.css";

export const Map = () => {
  const [mapTiles, setMapTiles] = useState([]);
  const startNewDungeon = () => {
    const roll = new DiceRoll("d100");
    const newTile = tiles.filter((tile) => tile.d100 === roll.total);
    setMapTiles(...mapTiles, ...newTile);
    console.log(mapTiles);
  };
  return (
    <div className={styles.mapWrapper}>
      <h2>Dungeon Map</h2>
      <button onClick={startNewDungeon}>Start New Dungeon</button>
      <div className={styles.grid}>
        {[...Array(400)].map((gridItem, i) => (
          <div className={styles.gridItem} id={`grid${i}`} key={i}></div>
        ))}
      </div>
    </div>
  );
};
