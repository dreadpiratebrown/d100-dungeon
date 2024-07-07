import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Oil = ({ onCancel }) => {
  const timeTracker = useBoundStore((state) => state.currentQuest.timeTracker);
  const oil = useBoundStore((state) => state.oil);
  const setOil = useBoundStore((state) => state.setOil);
  const darkness = useBoundStore((state) => state.currentQuest.darkness);
  const toggleDarkness = useBoundStore((state) => state.toggleDarkness);
  const setStrAdjusted = useBoundStore((state) => state.setStrAdjusted);
  const setDexAdjusted = useBoundStore((state) => state.setDexAdjusted);
  const setIntAdjusted = useBoundStore((state) => state.setIntAdjusted);
  const yes = () => {
    setOil(-1);
    if (darkness) {
      toggleDarkness();
      setStrAdjusted(20);
      setDexAdjusted(20);
      setIntAdjusted(20);
    }
    onCancel();
  };
  const no = () => {
    if (!darkness) {
      toggleDarkness();
      setStrAdjusted(-20);
      setDexAdjusted(-20);
      setIntAdjusted(-20);
    }
    onCancel();
  };
  return (
    <>
      <p>
        You've spent {timeTracker} {timeTracker === 1 ? "hour" : "hours"} in the
        dungeon. Spend one oil? Choosing "NO" will plunge you into darkness and
        lower your characterstics by 20 each.
      </p>
      <div className={styles.buttons}>
        <button className={styles.btnYes} disabled={oil === 0} onClick={yes}>
          YES <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button className={styles.btnNo} onClick={no}>
          NO <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </>
  );
};
