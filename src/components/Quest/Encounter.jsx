import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import styles from "./styles.module.css";

export const Encounter = ({ onCancel }) => {
  const roll = new DiceRoll("1d100");
  return (
    <>
      <p>
        <strong>Encounter!</strong>
      </p>
      <p>
        A wandering monster comes across your path. You face ENCOUNTER{" "}
        {roll.total}.
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnFight} onClick={onCancel}>
          FIGHT!
        </button>
      </div>
    </>
  );
};
