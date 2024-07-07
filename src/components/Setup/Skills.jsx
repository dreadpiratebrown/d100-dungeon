import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Skills = ({ onPrev, onNext }) => {
  const [numSkills, setNumSkills] = useState(3);
  const state = useBoundStore();

  useEffect(() => {
    const checked = document.querySelectorAll("input[name=skills]:checked");
    setNumSkills(checked.length);
  }, []);

  return (
    <>
      <p>
        Before your hero started exploring dungeons in search of lost treasures,
        they gained a few extra skills other than those provided by their hero
        path or race. Choose any two skills that don't currently have any skill
        bonuses. You should have five skills checked in total before proceeding.
      </p>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setAgility(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setAgility(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.agility.score > 0}
          disabled={state.agility.attuned}
        />{" "}
        Agility {state.agility.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setAware(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setAware(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.aware.score > 0}
          disabled={state.aware.attuned}
        />{" "}
        Aware {state.aware.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setBravery(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setBravery(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.bravery.score > 0}
          disabled={state.bravery.attuned}
        />{" "}
        Bravery {state.bravery.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setDodge(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setDodge(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.dodge.score > 0}
          disabled={state.dodge.attuned}
        />{" "}
        Dodge {state.dodge.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setEscape(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setEscape(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.escape.score > 0}
          disabled={state.escape.attuned}
        />{" "}
        Escape {state.escape.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setLocks(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setLocks(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.locks.score > 0}
          disabled={state.locks.attuned}
        />{" "}
        Locks {state.locks.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setLucky(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setLucky(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.lucky.score > 0}
          disabled={state.lucky.attuned}
        />{" "}
        Lucky {state.lucky.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setMagic(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setMagic(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.magic.score > 0}
          disabled={state.magic.attuned}
        />{" "}
        Magic {state.magic.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setStrong(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setStrong(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.strong.score > 0}
          disabled={state.strong.attuned}
        />{" "}
        Strong {state.strong.attuned && "(set by Path or Race)"}
        <br />
      </label>
      <label>
        <input
          type="checkbox"
          name="skills"
          value="5"
          onChange={(e) => {
            if (e.target.checked) {
              state.setTraps(5);
              setNumSkills(numSkills + 1);
            } else {
              state.setTraps(-5);
              setNumSkills(numSkills - 1);
            }
          }}
          defaultChecked={state.traps.score > 0}
          disabled={state.traps.attuned}
        />{" "}
        Traps {state.traps.attuned && "(set by Path or Race)"}
      </label>
      <br />
      <br />
      {numSkills > 5 && (
        <p className={styles.error}>
          You have chosen too many skills. Please choose only 2.
        </p>
      )}
      {numSkills === 5 && (
        <>
          <button onClick={onPrev} className={styles.btnPrev}>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>{" "}
            Prev: Race
          </button>
          <button onClick={onNext} className={styles.btnNext}>
            Next: Weapon{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </>
      )}
    </>
  );
};

export default Skills;
