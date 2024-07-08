import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Characteristics = ({ onNext }) => {
  const [assigned, setAssigned] = useState(false);
  const [dupes, setDupes] = useState(false);
  const state = useBoundStore();

  const checkForDupes = (chars) => {
    return chars.length === new Set(chars).size;
  };

  useEffect(() => {
    setAssigned(false);
  }, []);

  useEffect(() => {
    if (
      state.str.primary > 0 &&
      state.dex.primary > 0 &&
      state.int.primary > 0
    ) {
      setAssigned(true);
    }

    const chars = [state.str.primary, state.dex.primary, state.int.primary];
    if (!chars.includes(0)) {
      setDupes(!checkForDupes(chars));
    }
  }, [state]);

  return (
    <>
      <p>
        Please assign your hero's characteristics, 50 to one, 40 to another, and
        30 to the final.
      </p>
      STR{" "}
      <label>
        <input
          type="radio"
          name="str"
          value={30}
          checked={state.str.primary === "30"}
          onChange={(e) => state.setStrPrimary(e.target.value)}
        />{" "}
        30
      </label>
      <label>
        <input
          type="radio"
          name="str"
          value={40}
          checked={state.str.primary === "40"}
          onChange={(e) => state.setStrPrimary(e.target.value)}
        />{" "}
        40
      </label>
      <label>
        <input
          type="radio"
          name="str"
          value={50}
          checked={state.str.primary === "50"}
          onChange={(e) => state.setStrPrimary(e.target.value)}
        />{" "}
        50
      </label>
      <br />
      DEX{" "}
      <label>
        <input
          type="radio"
          name="dex"
          value={30}
          checked={state.dex.primary === "30"}
          onChange={(e) => state.setDexPrimary(e.target.value)}
        />{" "}
        30
      </label>
      <label>
        <input
          type="radio"
          name="dex"
          value={40}
          checked={state.dex.primary === "40"}
          onChange={(e) => state.setDexPrimary(e.target.value)}
        />{" "}
        40
      </label>
      <label>
        <input
          type="radio"
          name="dex"
          value={50}
          checked={state.dex.primary === "50"}
          onChange={(e) => state.setDexPrimary(e.target.value)}
        />{" "}
        50
      </label>
      <br />
      INT{" "}
      <label>
        <input
          type="radio"
          name="int"
          value={30}
          checked={state.int.primary === "30"}
          onChange={(e) => state.setIntPrimary(e.target.value)}
        />{" "}
        30
      </label>
      <label>
        <input
          type="radio"
          name="int"
          value={40}
          checked={state.int.primary === "40"}
          onChange={(e) => state.setIntPrimary(e.target.value)}
        />{" "}
        40
      </label>
      <label>
        <input
          type="radio"
          name="int"
          value={50}
          checked={state.int.primary === "50"}
          onChange={(e) => state.setIntPrimary(e.target.value)}
        />{" "}
        50
      </label>
      {assigned && dupes && (
        <p className={styles.error}>
          You have one or more characteristics set to the same value. Please
          choose one value for each.
        </p>
      )}
      <br />
      <br />
      {assigned && !dupes && (
        <button onClick={onNext} className={styles.btnNext}>
          Next: Hero Path{" "}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      )}
    </>
  );
};

export default Characteristics;
