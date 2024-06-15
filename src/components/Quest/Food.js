import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Food = ({ onCancel }) => {
  const timeTracker = useBoundStore((state) => state.currentQuest.timeTracker);
  const food = useBoundStore((state) => state.food);
  const setFood = useBoundStore((state) => state.setFood);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const yes = () => {
    setFood(-1);
    onCancel();
  };
  const no = () => {
    setAdjustedHP(-5);
    onCancel();
  };
  return (
    <>
      <p>
        You've spent {timeTracker + 1}{" "}
        {timeTracker + 1 === 1 ? "hour" : "hours"} in the dungeon. Eat one food?
        Choosing "NO" will cause you to become fatigued and weak, and you will
        lose 5HP.
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnYes} disabled={food === 0} onClick={yes}>
          YES <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button className={styles.btnNo} onClick={no}>
          NO <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </>
  );
};
