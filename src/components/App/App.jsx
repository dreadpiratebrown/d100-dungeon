import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { AdventureSheet, Map, Modal } from "..";
import { useBoundStore } from "../../store/boundStore";
import Characteristics from "../Setup/Characteristics";
import Path from "../Setup/Path";
import Race from "../Setup/Race";
import Skills from "../Setup/Skills";
import Weapon from "../Setup/Weapon";
import Armor from "../Setup/Armor";
import Other from "../Setup/Other";
import Finish from "../Setup/Finish";
import styles from "./styles.module.css";

export const App = () => {
  const [modal, setModal] = useState(false);
  const [setupStep, setSetupStep] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const store = useBoundStore();

  const changeStep = (step) => {
    setSetupStep(step);
  };

  const setup = (setupStep) => {
    switch (setupStep) {
      case 1:
        return <Characteristics onNext={() => changeStep(2)} />;
        break;
      case 2:
        return (
          <Path onNext={() => changeStep(3)} onPrev={() => changeStep(1)} />
        );
        break;
      case 3:
        return (
          <Race onNext={() => changeStep(4)} onPrev={() => changeStep(2)} />
        );
        break;
      case 4:
        return (
          <Skills onNext={() => changeStep(5)} onPrev={() => changeStep(3)} />
        );
        break;
      case 5:
        return (
          <Weapon onNext={() => changeStep(6)} onPrev={() => changeStep(4)} />
        );
        break;
      case 6:
        return (
          <Armor onNext={() => changeStep(7)} onPrev={() => changeStep(5)} />
        );
        break;
      case 7:
        return (
          <Other onNext={() => changeStep(8)} onPrev={() => changeStep(6)} />
        );
        break;
      case 8:
        return (
          <Finish
            onPrev={() => changeStep(7)}
            onCancel={() => {
              changeStep(1);
              setModal(false);
            }}
          />
        );
        break;
      default:
        return <Characteristics onNext={() => changeStep(2)} />;
    }
  };

  return (
    <div className={activeTab === 1 ? styles.mainWide : styles.main}>
      <div className={styles.mainMenu}>
        <h1>D100 Dungeon</h1>
        <ul className={styles.tabs}>
          <li className={activeTab === 0 ? styles.active : null}>
            <button onClick={() => setActiveTab(0)}>Adventure Sheet</button>
          </li>
          <li className={activeTab === 1 ? styles.active : null}>
            <button onClick={() => setActiveTab(1)}>Dungeon Map</button>
          </li>
          <li className={activeTab === 2 ? styles.active : null}>
            <button onClick={() => setActiveTab(2)}>Combat Tracker</button>
          </li>
        </ul>
        <button
          onClick={() => {
            store.resetStats();
            store.resetHero();
            store.resetSkills();
            store.resetEquipment();
            store.resetQuests();
            store.resetBackpack();
            setModal(true);
          }}
          className={styles.newGame}
        >
          New Game <FontAwesomeIcon icon={faDungeon} />
        </button>
      </div>
      {activeTab === 0 && <AdventureSheet />}
      {activeTab === 1 && <Map />}
      {activeTab === 2 && <h1>Combat Tracker</h1>}
      <Modal openModal={modal}>{setup(setupStep)}</Modal>
    </div>
  );
};
