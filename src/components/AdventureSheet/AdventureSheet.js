import HeroInfo from "./HeroInfo";
import Stats from "./Stats";
import Equipment from "./Equipment";
import Secondary from "./Secondary";
import Backpack from "./Backpack";
import styles from "./styles.module.css";

export const AdventureSheet = () => {
  return (
    <div className={styles.sheet}>
      <h2>Adventure Sheet</h2>
      <ul className={styles.menu}>
        <li>
          <a href="#heroInfo">Hero Info</a>
        </li>
        <li>
          <a href="#stats">Characteristics</a>
        </li>
        <li>
          <a href="#equipment">Equipment</a>
        </li>
        <li>
          <a href="#belt">Belt</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#spells">Spell Book</a>
        </li>
        <li>
          <a href="#time">Time Tracker</a>
        </li>
        <li>
          <a href="#backpack">Backpack</a>
        </li>
        <li>
          <a href="#empire">Empire</a>
        </li>
        <li>
          <a href="#quest">Quest Log</a>
        </li>
      </ul>
      <HeroInfo />
      <Stats />
      <Equipment />
      <Secondary />
      <Backpack />
    </div>
  );
};
