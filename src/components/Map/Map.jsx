import React, { useEffect, useRef, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon, faPerson } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";
import { messager } from "../../utils/messager";
import { Modal, RoomActions, Tile, Toggle } from "..";
import MiniSheet from "../AdventureSheet/MiniSheet";
import { doors, encounters, geography, tiles } from "../../shared";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Map = () => {
  const [personGridLoc, setPersonGridLoc] = useState("");
  const [modal, setModal] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({});
  const resumeRef = useRef(false);
  const personRef = useRef(null);
  const resetMap = useBoundStore((state) => state.resetMap);
  const resetTime = useBoundStore((state) => state.resetTime);
  const addEventTxt = useBoundStore((state) => state.addEventTxt);
  const passTime = useBoundStore((state) => state.passTime);
  const timeTracker = useBoundStore((state) => state.currentQuest.timeTracker);
  const addMapTile = useBoundStore((state) => state.addMapTile);
  const addLocation = useBoundStore((state) => state.addLocation);
  const mapTiles = useBoundStore((state) => state.mapTiles);
  const modifier = useBoundStore((state) => state.modifier);
  const eventHtml = useBoundStore((state) => state.eventHtml);
  const heroPosition = useBoundStore((state) => state.heroPosition);
  const setHeroPosition = useBoundStore((state) => state.setHeroPosition);
  const oil = useBoundStore((state) => state.oil);
  const food = useBoundStore((state) => state.food);
  const picks = useBoundStore((state) => state.picks);
  const setOil = useBoundStore((state) => state.setOil);
  const setFood = useBoundStore((state) => state.setFood);
  const setPicks = useBoundStore((state) => state.setPicks);
  const darkness = useBoundStore((state) => state.currentQuest.darkness);
  const toggleDarkness = useBoundStore((state) => state.toggleDarkness);
  const setStrAdjusted = useBoundStore((state) => state.setStrAdjusted);
  const setDexAdjusted = useBoundStore((state) => state.setDexAdjusted);
  const setIntAdjusted = useBoundStore((state) => state.setIntAdjusted);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);

  const startNewDungeon = async () => {
    resetMap();
    resetTime();
    //setPersonPosition({ left: "-9999px", top: 0 });
    resumeRef.current = false;
    // clear out all old possible exits
    const oldExits = document.querySelectorAll(`.${styles["grid"]} > div`);
    oldExits.forEach((exit) => {
      exit.classList.remove(styles["possibleExit"]);
      exit.classList.remove(styles["secretPassage"]);
      delete exit.dataset.exit;
      delete exit.dataset.passage;
      delete exit.dataset.rotation;
      delete exit.dataset.tiled;
      delete exit.dataset.door_open;
    });
    const roll = new DiceRoll("d100");
    const newTile = tiles.find((tile) => tile.d100 === roll.total);

    if (newTile) {
      const currentTurn = 1;
      addEventTxt(messager({ eventCode: "start" }));
      addEventTxt(
        messager({
          eventCode: "turn",
          turn: currentTurn,
        })
      );
      await track(currentTurn);
      addEventTxt(
        messager({ eventCode: "move", roll: roll.total, direction: "north" })
      );

      const copy = { ...newTile };
      copy.gridLocation = "grid190";
      copy.rotation = "0";
      copy.exits.map((exit) => {
        if (exit.type === "open") {
          addEventTxt(
            `<p>There is an exit to the ${
              exit.wall === 1
                ? "north.</p>"
                : exit.wall === 2
                ? "east.</p>"
                : exit.wall === 3
                ? "south.</p>"
                : "west.</p>"
            }`
          );
        }
        if (exit.type === "door") {
          const roll = new DiceRoll("d100");
          const door = doors.find((door) => door.d100.includes(roll.total));
          addEventTxt(
            `<p>There is a door to the ${
              exit.wall === 1
                ? "north.</p>"
                : exit.wall === 2
                ? "east.</p>"
                : exit.wall === 3
                ? "south.</p>"
                : "west.</p>"
            }`
          );
          addEventTxt(`<p>${door.details} (${roll.total} - ${door.code})</p>`);
          exit.code = door.code;
          exit.doorOpen = door.code === "O" ? "true" : "false";
        }
      });
      setCurrentRoom(copy);
      addMapTile(copy);
      addLocation("grid190");

      // Set entrance and highlight exits
      const start = document.getElementById("grid190");
      const entrance = document.getElementById("grid210");

      if (start) {
        start.dataset.tiled = true;
        setHeroPosition({
          left: start.offsetLeft,
          top: start.offsetTop + 16,
        });
        setPersonGridLoc("grid190");
      }

      if (entrance) {
        entrance.classList.add("entrance");
      }

      highlightExits(copy.exits, copy.gridLocation, copy.rotation);

      setModal(true);

      if (copy.color === "red") {
        rollEncounter();
      }

      passTime();
    }
  };

  const track = (turn) => {
    switch (turn % 12) {
      case 1:
      case 5:
      case 9:
        addEventTxt(messager({ eventCode: "oil" }));
        break;
      case 2:
      case 4:
      case 6:
      case 8:
      case 10:
        resumeRef.current = true;
        break;
      case 3:
        const roll4 = new DiceRoll("1d10");
        if (roll4.total < 4) {
          addEventTxt(messager({ eventCode: "encounter" }));
        }
        resumeRef.current = true;
        break;
      case 7:
        const roll5 = new DiceRoll("1d10");
        if (roll5.total < 5) {
          addEventTxt(messager({ eventCode: "encounter" }));
        }
        resumeRef.current = true;
        break;
      case 11:
        const roll6 = new DiceRoll("1d10");
        if (roll6.total < 6) {
          addEventTxt(messager({ eventCode: "encounter" }));
        }
        resumeRef.current = true;
        break;
      case 0:
        addEventTxt(messager({ eventCode: "food" }));
        break;
      default:
        break;
    }
    //passTime();
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (resumeRef.current) {
          clearInterval(interval);
          resolve();
        }
      }, 300);
    });
  };

  const highlightExits = (exits, tile, rotation) => {
    const tileNum = parseInt(tile.replace("grid", ""));
    exits.forEach((exit) => {
      let adjustedExit = (exit.wall + (rotation % 4)) % 4;
      if (adjustedExit === 0) adjustedExit = 4;
      switch (adjustedExit) {
        case 1:
          setExitAttribute(tileNum - 20, "north", "0", exit?.doorOpen);
          break;
        case 2:
          setExitAttribute(tileNum + 1, "east", "1", exit?.doorOpen);
          break;
        case 3:
          setExitAttribute(tileNum + 20, "south", "2", exit?.doorOpen);
          break;
        case 4:
          setExitAttribute(tileNum - 1, "west", "3", exit?.doorOpen);
          break;
        default:
          break;
      }
    });
  };

  const setExitAttribute = (
    tileNum,
    exitDirection,
    rotation,
    doorOpen = "true"
  ) => {
    const tileElement = document.getElementById(`grid${tileNum}`);
    if (
      tileElement &&
      !tileElement.dataset.tiled &&
      !tileElement.classList.contains("entrance")
    ) {
      tileElement.setAttribute("data-exit", exitDirection);
      tileElement.setAttribute("data-rotation", rotation);
      tileElement.setAttribute("data-door_open", doorOpen);
      tileElement.classList.add(styles["possibleExit"]);
    }
  };

  const highlightPassages = () => {
    const remainingExits = document.querySelectorAll(
      `.${styles["possibleExit"]}`
    );
    if (remainingExits.length === 0 && mapTiles.length > 0) {
      addEventTxt(messager({ eventCode: "blocked" }));
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

  const addNewTile = async (event) => {
    resumeRef.current = false;
    addEventTxt("<hr />");
    const { exit, passage, door_open, tiled } = event.currentTarget.dataset;
    if (door_open === "false") {
      addEventTxt(messager({ eventCode: "door_shut" }));
      return false;
    }
    if (tiled) {
      const destination = parseInt(event.currentTarget.id.replace("grid", ""));
      const currentLoc = parseInt(
        personRef.current.dataset.current_square.replace("grid", "")
      );
      const move = destination - currentLoc;
      if (move === 1 || move === -1 || move === 20 || move === -20) {
        setHeroPosition({
          left: event.currentTarget.offsetLeft,
          top: event.currentTarget.offsetTop + 16,
        });
        setPersonGridLoc(event.currentTarget.id);
        const currentTurn = timeTracker + 1;
        addEventTxt(
          messager({
            eventCode: "turn",
            turn: currentTurn,
          })
        );
        await track(currentTurn);
        passTime();
        return false;
      } else {
        addEventTxt(messager({ eventCode: "invalid_move" }));
        return false;
      }
    }
    if (exit || passage) {
      const currentTurn = timeTracker + 1;
      const roll = new DiceRoll("d100");
      const newTile = tiles.find((tile) => tile.d100 === roll.total);

      addEventTxt(
        messager({
          eventCode: "turn",
          turn: currentTurn,
        })
      );
      await track(currentTurn);

      addEventTxt(
        messager({ eventCode: "move", roll: roll.total, direction: exit })
      );
      if (newTile) {
        const copy = { ...newTile };
        copy.gridLocation = event.target.id;
        copy.rotation = event.target.dataset.rotation;
        event.target.dataset.tiled = true;
        copy.exits.map((exit) => {
          let adjustedExit = (exit.wall + (copy.rotation % 4)) % 4;
          if (adjustedExit === 0) adjustedExit = 4;
          if (exit.type === "open") {
            addEventTxt(
              `<p>There is an exit to the ${
                adjustedExit === 1
                  ? "north.</p>"
                  : adjustedExit === 2
                  ? "east.</p>"
                  : adjustedExit === 3
                  ? "south.</p>"
                  : "west.</p>"
              }`
            );
          }
          if (exit.type === "door") {
            const roll = new DiceRoll("d100");
            const door = doors.find((door) => door.d100.includes(roll.total));
            addEventTxt(
              `<p>There is a door to the ${
                adjustedExit === 1
                  ? "north.</p>"
                  : adjustedExit === 2
                  ? "east.</p>"
                  : adjustedExit === 3
                  ? "south.</p>"
                  : "west.</p>"
              }`
            );
            addEventTxt(
              `<p>${door.details} (${roll.total} - ${door.code})</p>`
            );
            exit.code = door.code;
            exit.doorOpen = door.code === "O" ? true : false;
          }
        });
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
        setHeroPosition({
          left: event.target.offsetLeft,
          top: event.target.offsetTop + 16,
        });
        setPersonGridLoc(event.target.id);

        if (copy.color === "red") {
          rollEncounter();
        }

        passTime();
      }
    }
  };

  const rollEncounter = () => {
    const roll = new DiceRoll("d100");
    const modifiedRoll =
      roll.total + modifier <= 0
        ? 1
        : roll.total + modifier > 100
        ? 100
        : roll.total + modifier;
    const encounter = encounters.find((e) => e.d100.includes(modifiedRoll));
  };

  const handleOil = (choice) => {
    if (choice === "yes") {
      setOil(-1);
      if (darkness) {
        toggleDarkness();
        setStrAdjusted(20);
        setDexAdjusted(20);
        setIntAdjusted(20);
        addEventTxt(messager({ eventCode: "lift_darkness" }));
      }
    } else {
      if (!darkness) {
        toggleDarkness();
        setStrAdjusted(-20);
        setDexAdjusted(-20);
        setIntAdjusted(-20);
        addEventTxt(messager({ eventCode: "set_darkness" }));
      }
    }
    resumeRef.current = true;
  };

  const handleFood = (choice) => {
    if (choice === "yes") {
      setFood(-1);
      addEventTxt(messager({ eventCode: "eat_food" }));
    } else {
      setAdjustedHP(-5);
      addEventTxt(messager({ eventCode: "no_food" }));
    }
    resumeRef.current = true;
  };

  useEffect(() => {
    // Highlight exits for existing tiles on mount
    mapTiles.forEach((tile) => {
      highlightExits(tile.exits, tile.gridLocation, tile.rotation);
    });
    highlightPassages();
  }, [mapTiles]);

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
          <div className={styles.logScroll}>
            {eventHtml.map((message) =>
              parse(message, {
                replace(domNode) {
                  if (domNode.attribs && domNode.attribs.id === "oilReplace") {
                    return (
                      <>
                        <button
                          onClick={() => handleOil("yes")}
                          disabled={oil === 0}
                        >
                          Yes
                        </button>
                        <button onClick={() => handleOil("no")}>No</button>
                      </>
                    );
                  }
                  if (domNode.attribs && domNode.attribs.id === "foodReplace") {
                    return (
                      <>
                        <button
                          onClick={() => handleFood("yes")}
                          disabled={food === 0}
                        >
                          Yes
                        </button>
                        <button onClick={() => handleFood("no")}>No</button>
                      </>
                    );
                  }
                },
              })
            )}
          </div>
          <MiniSheet />
          OIL
          <br />
          {[...Array(20)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= oil}
              tracker={i + 1 <= oil ? () => setOil(-1) : () => setOil(1)}
              flag="darkness"
            />
          ))}
          <br />
          FOOD
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= food}
              tracker={i + 1 <= food ? () => setFood(-1) : () => setFood(1)}
            />
          ))}
          <br />
          PICKS
          <br />
          {[...Array(30)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= picks}
              tracker={i + 1 <= picks ? () => setPicks(-1) : () => setPicks(1)}
            />
          ))}
          <br />
          KEYS
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
          <br />
          LEVERS
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
          <br />
          POISON
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
          <br />
          DISEASE
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
        </div>
      </div>
      <FontAwesomeIcon
        ref={personRef}
        icon={faPerson}
        className={styles.hero}
        style={{ left: heroPosition.left, top: heroPosition.top }}
        data-current_square={personGridLoc}
      />
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        ROOM ACTIONS
        <ul>
          <li>Door actions</li>
          <li>Search action</li>
          <li>Geographic features</li>
          <li>Encounters</li>
        </ul>
        <RoomActions room={currentRoom} />
      </Modal>
    </div>
  );
};
