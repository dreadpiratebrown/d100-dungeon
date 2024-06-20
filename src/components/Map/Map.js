import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { Modal, Tile } from "../../components";
import { tiles } from "../../shared/map";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Map = () => {
  const [modal, setModal] = useState(false);
  const mapTiles = useBoundStore((state) => state.mapTiles);
  const locations = useBoundStore((state) => state.locations);
  const addMapTile = useBoundStore((state) => state.addMapTile);
  const addLocation = useBoundStore((state) => state.addLocation);
  const resetMap = useBoundStore((state) => state.resetMap);
  const startNewDungeon = () => {
    resetMap();
    // clear out all old possible exits
    const oldExits = document.querySelectorAll(`.${styles["possibleExit"]}`);
    oldExits.forEach((exit) => {
      exit.classList.remove(styles["possibleExit"]);
      delete exit.dataset.exit;
      delete exit.dataset.rotation;
    });
    document
      .querySelectorAll(`.${styles["secretPassage"]}`)
      .forEach((passage) => passage.classList.remove(styles["secretPassage"]));
    // roll a new tile and make a deep copy
    const roll = new DiceRoll("d100");
    const newTile = tiles.filter((tile) => tile.d100 === roll.total);
    const copy = {};
    Object.assign(copy, newTile[0]);
    // assign some extra information for location & rotation
    copy.gridLocation = "grid190";
    copy.rotation = "0";
    // highlight possible exits and add to the store
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
    const remainingExits = document.querySelectorAll(
      `.${styles["possibleExit"]}:empty`
    );
    if (remainingExits.length === 0 && mapTiles.length > 0) {
      setModal(true);
      mapTiles.map((tile) => {
        const tileNum = parseInt(tile.gridLocation.replace("grid", ""));
        const passageN = document.getElementById(`grid${tileNum - 20}`);
        passageN.setAttribute("data-passage", "north");
        passageN.setAttribute("data-rotation", "0");
        passageN.classList.add(styles["secretPassage"]);
        const passageE = document.getElementById(`grid${tileNum + 1}`);
        passageE.setAttribute("data-passage", "east");
        passageE.setAttribute("data-rotation", "1");
        passageE.classList.add(styles["secretPassage"]);
        const passageS = document.getElementById(`grid${tileNum + 20}`);
        passageS.setAttribute("data-passage", "south");
        passageS.setAttribute("data-rotation", "2");
        passageS.classList.add(styles["secretPassage"]);
        const passageW = document.getElementById(`grid${tileNum - 1}`);
        passageW.setAttribute("data-passage", "west");
        passageW.setAttribute("data-rotation", "4");
        passageW.classList.add(styles["secretPassage"]);
      });
    }
  };

  const addNewTile = (event) => {
    if (
      event.target.dataset.hasOwnProperty("exit") ||
      event.target.dataset.hasOwnProperty("passage")
    ) {
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
      document
        .querySelectorAll(`.${styles["secretPassage"]}`)
        .forEach((passage) =>
          passage.classList.remove(styles["secretPassage"])
        );
    }
  };

  useEffect(() => {
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
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <p>
          There are no more possible exits. Click any yellow tile to create a
          secret passage.
        </p>
      </Modal>
    </div>
  );
};
