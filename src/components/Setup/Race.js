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

const Race = ({ onPrev, onNext }) => {
  const [assigned, setAssigned] = useState(false);
  const race = useBoundStore((state) => state.race);
  const setRace = useBoundStore((state) => state.setRace);
  const store = useBoundStore();
  const setDwarf = () => {
    unsetElf();
    unsetHuman();
    if (race !== "Dwarf") {
      setRace("Dwarf");
      store.setStrAdjusted(5);
      store.setIntAdjusted(-5);
      store.setStrong(5);
      store.setStrongAttuned(true);
    }
  };
  const unsetDwarf = () => {
    if (race === "Dwarf") {
      store.setStrAdjusted(-5);
      store.setIntAdjusted(5);
      store.setStrong(-5);
      store.setStrongAttuned(false);
    }
  };
  const setElf = () => {
    unsetDwarf();
    unsetHuman();
    if (race !== "Elf") {
      setRace("Elf");
      store.setStrAdjusted(-5);
      store.setDexAdjusted(5);
      store.setDodge(5);
      store.setDodgeAttuned(true);
    }
  };
  const unsetElf = () => {
    if (race === "Elf") {
      store.setStrAdjusted(5);
      store.setDexAdjusted(-5);
      store.setDodge(-5);
      store.setDodgeAttuned(false);
    }
  };
  const setHuman = () => {
    unsetElf();
    unsetDwarf();
    if (race !== "Human") {
      setRace("Human");
      store.setDexAdjusted(-5);
      store.setIntAdjusted(5);
      store.setAware(5);
      store.setAwareAttuned(true);
    }
  };
  const unsetHuman = () => {
    if (race === "Human") {
      store.setDexAdjusted(5);
      store.setIntAdjusted(-5);
      store.setAware(-5);
      store.setAwareAttuned(false);
    }
  };
  const random = () => {
    const roll = new DiceRoll("d6");
    switch (roll.total) {
      case 1:
      case 2:
        setDwarf();
        break;
      case 3:
      case 4:
        setElf();
        break;
      case 5:
      case 6:
        setHuman();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (race !== "") {
      setAssigned(true);
    }
  }, [race]);

  return (
    <>
      <p>
        Please choose your character's race, or click "Random" to have it rolled
        automatically.
      </p>
      <label>
        <input
          type="radio"
          name="race"
          value="Dwarf"
          onChange={(e) => setDwarf()}
          checked={race === "Dwarf"}
          checked={race === "Dwarf"}
        />{" "}
        Dwarf
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="race"
          value="Elf"
          onChange={(e) => setElf()}
          checked={race === "Elf"}
          checked={race === "Elf"}
        />{" "}
        Elf
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="race"
          value="Human"
          onChange={(e) => setHuman()}
          checked={race === "Human"}
          checked={race === "Human"}
        />{" "}
        Human
      </label>
      <br />
      <br />
      <button onClick={random} className={styles.btnRandom}>
        Random Race{" "}
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
            Prev: Hero Path
          </button>
          <button onClick={onNext} className={styles.btnNext}>
            Next: Skills{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </>
      )}
    </>
  );
};

export default Race;
