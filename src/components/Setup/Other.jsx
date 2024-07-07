import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
const Other = ({ onPrev, onNext }) => {
  return (
    <>
      <p>
        You start with the game with some necessary
        <br />
        equipment you have gathered. You get:
      </p>
      <ul>
        <li>20 Oil</li>
        <li>10 Food</li>
        <li>15 Picks</li>
        <li>4 Potions of Lesser Healing</li>
      </ul>
      <button onClick={onPrev} className={styles.btnPrev}>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>{" "}
        Prev: Armor
      </button>
      <button onClick={onNext} className={styles.btnNext}>
        Next: Finishing Touches{" "}
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </>
  );
};

export default Other;
