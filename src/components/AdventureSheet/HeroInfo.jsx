import SunLight from "./assets/sun-light.svg?react";
import SunDark from "./assets/sun-dark.svg?react";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const HeroInfo = () => {
  const state = useBoundStore();
  return (
    <div className={styles.heroInfo} id="heroInfo">
      <div id="name" className={styles.borderBottomRight}>
        NAME: {state.name}
      </div>
      <div id="path" className={styles.borderBottomRight}>
        HERO PATH: {state.path}
      </div>
      <div id="race" className={styles.borderBottomRight}>
        RACE: {state.race}
      </div>
      <div
        id="light"
        className={state.currentQuest.darkness ? styles.dark : styles.light}
      >
        {state.currentQuest.darkness ? <SunDark /> : <SunLight />}
        <br />
        -20 Dark
      </div>
      <div id="rfl" className={styles.repFateLife}>
        <div id="rep">Rep: {state.rep}</div>
        <div id="fate">Fate: {state.fate}</div>
        <div id="life">Life: {state.life}</div>
      </div>
      <div id="gp" className={styles.borderRight}>
        Gold Pieces: {state.gold}
      </div>
      <div id="encounter" className={styles.borderRight}>
        Encounter Modifier: {state.currentQuest.modifier}
      </div>
    </div>
  );
};

export default HeroInfo;
