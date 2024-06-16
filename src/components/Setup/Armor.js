import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faLock,
  faRefresh,
  faRotate,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import { armor } from "../../shared/armor";
import styles from "./styles.module.css";

const Armor = ({ onPrev, onNext }) => {
  const [armors, setArmors] = useState([]);
  const [equipped, setEquipped] = useState(false);
  const state = useBoundStore();
  const fate = useBoundStore((state) => state.fate);
  const setFate = useBoundStore((state) => state.setFate);

  const rollArmor = () => {
    const roll = new DiceRoll("d100");
    return armor.filter((item) => item.d100.includes(roll.total));
  };

  const changeArmor = (itemToKeep, itemToDelete, mode) => {
    // copy rolls
    const alteredList = armors;
    // reset dupe flags on itemToKeep
    alteredList[itemToKeep].dupe = false;
    alteredList[itemToKeep].dupedItem = null;
    // delete itemToDelete
    alteredList.splice(itemToDelete, 1);
    // get remaining locations
    const locations = alteredList.map((item) => item.location);
    // roll up a new armor and check against locations for dupes
    if (mode === "reroll") {
      const rolledArmor = rollArmor();
      if (locations.includes(rolledArmor[0].location)) {
        rolledArmor[0].dupe = true;
        rolledArmor[0].dupedItem = locations.indexOf(rolledArmor[0].location);
      } else {
        rolledArmor[0].dupe = false;
        rolledArmor[0].dupedItem = null;
      }
      alteredList.push(...rolledArmor);
    }
    // set rolls with alteredList
    setArmors([...alteredList]);
    // check for dupes
    checkForDupes();
  };

  const equipArmor = () => {
    armors.map((armor) => {
      state.equipArmor(armor, armor.location.toLowerCase().replace(" ", ""));
      return true;
    });
    setEquipped(true);
  };

  let hasDupes = false;

  const checkForDupes = () => {
    const dupes = armors.map((armor) => armor.dupe);
    hasDupes = dupes.includes(true);
  };

  useEffect(() => {
    const temp = [];
    const locations = [];
    if (state.weapon.hands === 2) {
      locations.push("Off H");
    }
    for (let i = 0; i < 3; i++) {
      const rolledArmor = rollArmor();
      if (locations.includes(rolledArmor[0].location)) {
        rolledArmor[0].dupe = true;
        rolledArmor[0].dupedItem = locations.indexOf(rolledArmor[0].location);
      } else {
        rolledArmor[0].dupe = false;
        rolledArmor[0].dupedItem = null;
      }
      locations.push(rolledArmor[0].location);
      temp.push(...rolledArmor);
    }
    setArmors([...temp]);
  }, [fate]);
  checkForDupes();

  return (
    <>
      <p>Your initial armors are:</p>
      {armors.length > 0 && (
        <ul>
          {armors.map((armor, i) => (
            <li key={i}>
              {armor.location}: {armor.name}
              {armor?.dupe && (
                <>
                  <br />
                  Location already equipped.{" "}
                  {armor.location !== "Off H" && (
                    <>
                      <button
                        onClick={() => changeArmor(i, armor.dupedItem, "keep")}
                        className={styles.btnKeep}
                      >
                        Keep this <FontAwesomeIcon icon={faLock} />
                      </button>{" "}
                      or
                    </>
                  )}
                  <button
                    onClick={() => changeArmor(armor.dupedItem, i, "reroll")}
                    className={styles.btnReroll}
                  >
                    Reroll this <FontAwesomeIcon icon={faRotate} />
                  </button>
                  ?
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {!hasDupes && !equipped && (
        <p>
          Looks good!{" "}
          <button onClick={() => equipArmor()} className={styles.btnEquip}>
            Equip these <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          {fate > 0 && (
            <>
              <br />
              <br />
              <button onClick={() => setFate(-1)} className={styles.btnRandom}>
                Reroll (Cost: 1 Fate) <FontAwesomeIcon icon={faRefresh} />
              </button>
            </>
          )}
        </p>
      )}
      {equipped && (
        <>
          <button onClick={onPrev} className={styles.btnPrev}>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>{" "}
            Prev: Weapon
          </button>
          <button onClick={onNext} className={styles.btnNext}>
            Next: Other Equipment{" "}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </>
      )}
    </>
  );
};

export default Armor;
