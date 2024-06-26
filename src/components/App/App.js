import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon } from "@fortawesome/free-solid-svg-icons";
import { AdventureSheet } from "../AdventureSheet";
import { Modal } from "../../components";
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
    <div className={styles.main}>
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
      <h1>D100 Dungeon</h1>
      <AdventureSheet />
      <Modal openModal={modal}>{setup(setupStep)}</Modal>
    </div>
  );
};
