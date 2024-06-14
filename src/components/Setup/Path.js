import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Path = ({ onPrev, onNext }) => {
  const [assigned, setAssigned] = useState(false);
  const path = useBoundStore((state) => state.path);
  const setPath = useBoundStore((state) => state.setPath);
  const store = useBoundStore();
  const setWarrior = () => {
    unsetRogue();
    unsetSorceror();
    if (path !== "Warrior") {
      setPath("Warrior");
      store.setStrAdjusted(10);
      store.setStrAttuned(true);
      store.setDexAdjusted(-5);
      store.setIntAdjusted(-5);
      store.setBravery(5);
      store.setBraveryAttuned(true);
      store.setEscape(5);
      store.setEscapeAttuned(true);
    }
  };
  const unsetWarrior = () => {
    if (path === "Warrior") {
      store.setStrAdjusted(-10);
      store.setStrAttuned(false);
      store.setDexAdjusted(5);
      store.setIntAdjusted(5);
      store.setBravery(-5);
      store.setBraveryAttuned(false);
      store.setEscape(-5);
      store.setEscapeAttuned(false);
    }
  };
  const setRogue = () => {
    unsetWarrior();
    unsetSorceror();
    if (path !== "Rogue") {
      setPath("Rogue");
      store.setDexAdjusted(10);
      store.setDexAttuned(true);
      store.setStrAdjusted(-5);
      store.setIntAdjusted(-5);
      store.setLocks(5);
      store.setLocksAttuned(true);
      store.setTraps(5);
      store.setTrapsAttuned(true);
    }
  };
  const unsetRogue = () => {
    if (path === "Rogue") {
      store.setDexAdjusted(-10);
      store.setDexAttuned(false);
      store.setStrAdjusted(5);
      store.setIntAdjusted(5);
      store.setLocks(-5);
      store.setLocksAttuned(false);
      store.setTraps(-5);
      store.setTrapsAttuned(false);
    }
  };
  const setSorceror = () => {
    unsetWarrior();
    unsetRogue();
    if (path !== "Sorceror") {
      setPath("Sorceror");
      store.setIntAdjusted(10);
      store.setIntAttuned(true);
      store.setStrAdjusted(-5);
      store.setDexAdjusted(-5);
      store.setMagic(5);
      store.setMagicAttuned(true);
      store.setLucky(5);
      store.setLuckyAttuned(true);
    }
  };
  const unsetSorceror = () => {
    if (path === "Sorceror") {
      store.setIntAdjusted(-10);
      store.setIntAttuned(false);
      store.setStrAdjusted(5);
      store.setDexAdjusted(5);
      store.setMagic(-5);
      store.setMagicAttuned(false);
      store.setLucky(-5);
      store.setLuckyAttuned(false);
    }
  };
  const random = () => {
    const roll = new DiceRoll("d6");
    switch (roll.total) {
      case 1:
      case 2:
        setWarrior();
        break;
      case 3:
      case 4:
        setRogue();
        break;
      case 5:
      case 6:
        setSorceror();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (path !== "") {
      setAssigned(true);
    }
  }, [path]);

  return (
    <>
      <p>
        Please choose your character's Hero Path, or click "Random Path" to have
        it rolled automatically.
      </p>
      <label>
        <input
          type="radio"
          name="path"
          value="Warrior"
          onChange={(e) => setWarrior()}
          checked={path === "Warrior"}
          checked={path === "Warrior"}
        />{" "}
        Warrior
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="path"
          value="Rogue"
          onChange={(e) => setRogue()}
          checked={path === "Rogue"}
          checked={path === "Rogue"}
        />{" "}
        Rogue
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="path"
          value="Sorceror"
          onChange={(e) => setSorceror()}
          checked={path === "Sorceror"}
          checked={path === "Sorceror"}
        />{" "}
        Sorceror
      </label>
      <br />
      <br />
      <button onClick={random} className={styles.btnRandom}>
        Random Path{" "}
        <span>
          <FontAwesomeIcon icon={faRandom} />
        </span>
      </button>
      <br />
      <br />
      {assigned && (
        <>
          <button onClick={onPrev} className={styles.btnPrev}>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>{" "}
            Prev: Characteristics
          </button>
          <button onClick={onNext} className={styles.btnNext}>
            Next: Race{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </>
      )}
    </>
  );
};

export default Path;
