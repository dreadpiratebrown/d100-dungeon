import { useEffect, useRef, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon, faPerson } from "@fortawesome/free-solid-svg-icons";
import { Modal, Tile } from "../../components";
import { tiles } from "../../shared/map";
import { encounters } from "../../shared/encounters";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Map = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [personPosition, setPersonPosition] = useState({ left: 0, top: 0 });
  const personRef = useRef(null);
  const mapTiles = useBoundStore((state) => state.mapTiles);
  const addMapTile = useBoundStore((state) => state.addMapTile);
  const addLocation = useBoundStore((state) => state.addLocation);
  const resetMap = useBoundStore((state) => state.resetMap);
  const modifier = useBoundStore((state) => state.currentQuest.modifier);

  // useEffect(() => {
  //   // Initialize map on component mount
  //   resetMap();
  // }, [resetMap]);

  const startNewDungeon = () => {
    resetMap();
    // clear out all old possible exits
    const oldExits = document.querySelectorAll(`.${styles["grid"]} > div`);
    oldExits.forEach((exit) => {
      exit.classList.remove(styles["possibleExit"]);
      exit.classList.remove(styles["secretPassage"]);
      delete exit.dataset.exit;
      delete exit.dataset.passage;
      delete exit.dataset.rotation;
      delete exit.dataset.tiled;
    });
    const roll = new DiceRoll("d100");
    const newTile = tiles.find((tile) => tile.d100 === roll.total);

    if (newTile) {
      const copy = { ...newTile };
      copy.gridLocation = "grid190";
      copy.rotation = "0";
      addMapTile(copy);
      addLocation("grid190");

      // Set entrance and highlight exits
      const start = document.getElementById("grid190");
      const entrance = document.getElementById("grid210");

      if (start) {
        start.dataset.tiled = true;
        setPersonPosition({
          left: start.offsetLeft,
          top: start.offsetTop + 16,
        });
      }

      if (entrance) {
        entrance.classList.add("entrance");
      }

      highlightExits(copy.exits, copy.gridLocation, copy.rotation);

      if (copy.color === "red") {
        rollEncounter();
      }
    }
  };

  const highlightExits = (exits, tile, rotation) => {
    const tileNum = parseInt(tile.replace("grid", ""));
    exits.forEach((exit) => {
      let adjustedExit = (exit.wall + (rotation % 4)) % 4;
      if (adjustedExit === 0) adjustedExit = 4;
      switch (adjustedExit) {
        case 1:
          setExitAttribute(tileNum - 20, "north", "0");
          break;
        case 2:
          setExitAttribute(tileNum + 1, "east", "1");
          break;
        case 3:
          setExitAttribute(tileNum + 20, "south", "2");
          break;
        case 4:
          setExitAttribute(tileNum - 1, "west", "3");
          break;
        default:
          break;
      }
    });
  };

  const setExitAttribute = (tileNum, exitDirection, rotation) => {
    const tileElement = document.getElementById(`grid${tileNum}`);
    if (
      tileElement &&
      !tileElement.dataset.tiled &&
      !tileElement.classList.contains("entrance")
    ) {
      tileElement.setAttribute("data-exit", exitDirection);
      tileElement.setAttribute("data-rotation", rotation);
      tileElement.classList.add(styles["possibleExit"]);
    }
  };

  const highlightPassages = () => {
    const remainingExits = document.querySelectorAll(
      `.${styles["possibleExit"]}`
    );
    console.log("remaining exits", remainingExits);
    console.log("map tiles", mapTiles);
    if (remainingExits.length === 0 && mapTiles.length > 0) {
      setModalOpen(true);
      mapTiles.forEach((tile) => {
        highlightPassageTile(tile.gridLocation);
      });
    }
  };

  const highlightPassageTile = (gridLocation) => {
    const tileNum = parseInt(gridLocation.replace("grid", ""));
    const directions = ["north", "east", "south", "west"];
    directions.forEach((direction, index) => {
      const passageElement = document.getElementById(
        `grid${
          tileNum +
          (index === 3 ? -1 : index === 2 ? 20 : index === 1 ? 1 : -20)
        }`
      );
      if (passageElement) {
        passageElement.setAttribute("data-passage", direction);
        passageElement.setAttribute("data-rotation", index.toString());
        passageElement.classList.add(styles["secretPassage"]);
      }
    });
  };

  const addNewTile = (event) => {
    const { exit, passage } = event.target.dataset;
    if (exit || passage) {
      const roll = new DiceRoll("d100");
      const newTile = tiles.find((tile) => tile.d100 === roll.total);
      if (newTile) {
        const copy = { ...newTile };
        copy.gridLocation = event.target.id;
        copy.rotation = event.target.dataset.rotation;
        event.target.dataset.tiled = true;
        highlightExits(
          copy.exits,
          event.target.id,
          event.target.dataset.rotation
        );
        event.target.classList.remove(styles["possibleExit"]);
        addMapTile(copy);
        addLocation(event.target.id);
        document
          .querySelectorAll(`.${styles["secretPassage"]}`)
          .forEach((passage) => {
            passage.classList.remove(styles["secretPassage"]);
            delete passage.dataset.passage;
          });
        setPersonPosition({
          left: event.target.offsetLeft,
          top: event.target.offsetTop + 16,
        });
      }
    }
  };

  const rollEncounter = () => {
    const roll = new DiceRoll("d100");
    console.log("roll", roll.total);
    const modifiedRoll =
      roll.total + modifier <= 0
        ? 1
        : roll.total + modifier > 100
        ? 100
        : roll.total + modifier;
    console.log("modified roll", modifiedRoll);
    const encounter = encounters.find((e) => e.d100.includes(modifiedRoll));
    console.log(encounter);
  };

  useEffect(() => {
    // Highlight exits for existing tiles on mount
    mapTiles.forEach((tile) => {
      highlightExits(tile.exits, tile.gridLocation, tile.rotation);
    });
    highlightPassages();
  }, [mapTiles]);

  useEffect(() => {
    // Set initial position of personRef
    const start = document.getElementById("grid190");
    if (start) {
      setPersonPosition({
        left: start.offsetLeft,
        top: start.offsetTop + 16,
      });
    }
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <h2>Dungeon Map</h2>
      <button onClick={startNewDungeon}>Start New Dungeon</button>
      <div className={styles.flexWrapper}>
        <div className={styles.grid}>
          {[...Array(400)].map((_, i) => (
            <div
              className={styles.gridItem}
              id={`grid${i}`}
              key={i}
              onClick={addNewTile}
            >
              {mapTiles.some((tile) => tile.gridLocation === `grid${i}`) && (
                <Tile
                  tile={mapTiles.find(
                    (tile) => tile.gridLocation === `grid${i}`
                  )}
                />
              )}
              {i === 210 && (
                <div className={styles.entrance}>
                  <FontAwesomeIcon icon={faDungeon} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.eventTracker}>
          <h3>Events</h3>
        </div>
      </div>
      <FontAwesomeIcon
        ref={personRef}
        icon={faPerson}
        className={styles.hero}
        style={{ left: personPosition.left, top: personPosition.top }}
      />
      <Modal openModal={modalOpen} closeModal={() => setModalOpen(false)}>
        <p>
          There are no more possible exits. Click any yellow tile to create a
          secret passage.
        </p>
      </Modal>
    </div>
  );
};
