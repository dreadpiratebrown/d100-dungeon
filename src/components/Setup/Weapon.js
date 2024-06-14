import { useEffect } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import { weapons } from "../../shared/weapons";
import styles from "./styles.module.css";

const Weapon = ({ onPrev, onNext }) => {
  const equipWeapon = useBoundStore((state) => state.equipWeapon);
  const weapon = useBoundStore((state) => state.weapon);

  useEffect(() => {
    const roll = new DiceRoll("d100");
    const rolledWeapon = weapons.filter((weapon) =>
      weapon.d100.includes(roll.total)
    );
    equipWeapon(rolledWeapon[0]);
  }, []);

  return (
    <>
      <p>
        Your initial weapon is: {weapon.name}.<br />
        It has been added to your equipment.
      </p>
      <button onClick={onPrev} className={styles.btnPrev}>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>{" "}
        Prev: Skills
      </button>
      <button onClick={onNext} className={styles.btnNext}>
        Next: Armor{" "}
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </>
  );
};

export default Weapon;
