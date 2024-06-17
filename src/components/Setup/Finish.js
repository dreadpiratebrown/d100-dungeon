import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPlay } from "@fortawesome/free-solid-svg-icons";
import names from "random-names-generator";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Finish = ({ onPrev, onCancel }) => {
  const setName = useBoundStore((state) => state.setName);
  const name = useBoundStore((state) => state.name) || names.random();
  const dialog = document.querySelector("dialog");
  const close = () => {
    onCancel();
    dialog.close();
  };

  useEffect(() => {
    setName(name);
  }, []);
  return (
    <>
      <p>
        You also start the game with 20 HP, 1 Rep, 3 Life, and 3 Fate. Give your
        a hero a name and you are ready to start a quest!
      </p>
      <label htmlFor="heroName">Hero's Name</label>
      <br />
      <input
        id="heroName"
        onChange={(e) => setName(e.target.value)}
        defaultValue={name}
      />
      <br />
      <br />
      <button onClick={onPrev} className={styles.btnPrev}>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>{" "}
        Prev: Other Equipment
      </button>
      {name && (
        <button onClick={close} className={styles.btnPlay}>
          Venture Forth! <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
    </>
  );
};

export default Finish;
