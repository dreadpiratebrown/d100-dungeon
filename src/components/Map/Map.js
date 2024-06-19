import { useEffect } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { Tile } from "./";
import { tiles } from "../../shared/map";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Map = () => {
  const mapTiles = useBoundStore((state) => state.mapTiles);
  const locations = useBoundStore((state) => state.locations);
  const addMapTile = useBoundStore((state) => state.addMapTile);
  const addLocation = useBoundStore((state) => state.addLocation);
  const resetMap = useBoundStore((state) => state.resetMap);
  const startNewDungeon = () => {
    resetMap();
    const oldExits = document.querySelectorAll(`.${styles["possibleExit"]}`);
    oldExits.forEach((exit) => exit.classList.remove(styles["possibleExit"]));
    const roll = new DiceRoll("d100");
    const newTile = tiles.filter((tile) => tile.d100 === roll.total);
    const copy = {};
    Object.assign(copy, newTile[0]);
    copy.gridLocation = "grid190";
    copy.rotation = "0";
    highlightExits(copy.exits, copy.gridLocation, copy.rotation);
    addMapTile(copy);
    addLocation("grid190");
  };

  const highlightExits = (exits, tile, rotation) => {
    const tileNum = parseInt(tile.replace("grid", ""));
    exits.map((exit) => {
      let adjustedExit = (exit.wall + (rotation % 4)) % 4;
      if (adjustedExit === 0) adjustedExit = 4;
      switch (adjustedExit) {
        case 1:
          const tileN = document.getElementById(`grid${tileNum - 20}`);
          tileN.setAttribute("data-exit", "north");
          tileN.setAttribute("data-rotation", "0");
          tileN.classList.add(styles["possibleExit"]);
          break;
        case 2:
          const tileE = document.getElementById(`grid${tileNum + 1}`);
          tileE.setAttribute("data-exit", "east");
          tileE.setAttribute("data-rotation", "1");
          tileE.classList.add(styles["possibleExit"]);
          break;
        case 3:
          const tileS = document.getElementById(`grid${tileNum + 20}`);
          tileS.setAttribute("data-exit", "south");
          tileS.setAttribute("data-rotation", "2");
          tileS.classList.add(styles["possibleExit"]);
          break;
        case 4:
          const tileW = document.getElementById(`grid${tileNum - 1}`);
          tileW.setAttribute("data-exit", "west");
          tileW.setAttribute("data-rotation", "3");
          tileW.classList.add(styles["possibleExit"]);
          break;
        default:
          break;
      }
    });
  };

  const addNewTile = (event) => {
    if (event.target.dataset.hasOwnProperty("exit")) {
      const roll = new DiceRoll("d100");
      const newTile = tiles.filter((tile) => tile.d100 === roll.total);
      const copy = {};
      Object.assign(copy, newTile[0]);
      copy.gridLocation = event.target.id;
      copy.rotation = event.target.dataset.rotation;
      highlightExits(
        copy.exits,
        event.target.id,
        event.target.dataset.rotation
      );
      addMapTile(copy);
      addLocation(event.target.id);
    }
  };

  useEffect(() => {
    console.log(mapTiles);
    mapTiles.map((tile) => {
      highlightExits(tile.exits, tile.gridLocation, tile.rotation);
    });
  }, []);
  return (
    <div className={styles.mapWrapper}>
      <h2>Dungeon Map</h2>
      <button onClick={startNewDungeon}>Start New Dungeon</button>
      <div className={styles.grid}>
        {[...Array(400)].map((gridItem, i) => (
          <div
            className={styles.gridItem}
            id={`grid${i}`}
            key={i}
            onClick={(e) => addNewTile(e)}
          >
            {locations.includes(`grid${i}`) ? (
              <Tile
                tile={mapTiles.filter((t) => t.gridLocation === `grid${i}`)}
              />
            ) : (
              <></>
            )}
            {i === 210 ? (
              <div className={styles.entrance}>
                <FontAwesomeIcon icon={faDungeon} />
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
