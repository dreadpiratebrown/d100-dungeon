import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Markdown from "react-markdown";
import BackpackRow from "./BackpackRow";
import EmpireCell from "./EmpireCell";
import { Toggle } from "../Toggle";
import { quests } from "../../shared/quests";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Backpack = () => {
  const setCurrentQuest = useBoundStore((state) => state.setCurrentQuest);
  const currentQuest = useBoundStore((state) => state.currentQuest);
  const completedQuests = useBoundStore((state) => state.completedQuests);
  const itemsWithDamageTrack = useBoundStore(
    (state) => state.itemsWithDamageTrack
  );
  const itemsWithoutDamageTrack = useBoundStore(
    (state) => state.itemsWithoutDamageTrack
  );
  const startNewQuest = () => {
    let roll = {};
    for (let i = 1; i < 11; i++) {
      if (!completedQuests.includes(i)) {
        roll.total = i;
        break;
      }
    }
    if (!roll?.total) {
      roll = new DiceRoll("d100");
    }
    const quest = quests.filter((q) => q.d100.includes(roll.total));
    setCurrentQuest(quest[0]);
  };
  return (
    <div className={styles.backpack} id="backpack">
      <table className={styles.itemsWithDamage}>
        <thead>
          <tr>
            <th colSpan="12">BACKPACK For items with damage tracks</th>
          </tr>
          <tr>
            <th style={{ "--width": "5rem" }} className={styles.customWidth}>
              SLOT
            </th>
            <th>ITEM</th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              STR
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              DEX
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              INT
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              HP
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              DMG
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              DEF
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              GP
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              Fix
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              A/S
            </th>
            <th style={{ "--width": "8rem" }} className={styles.customWidth}>
              DAMAGE
            </th>
          </tr>
        </thead>
        <tbody>
          {itemsWithDamageTrack.map((item, i) => (
            <BackpackRow damage={true} key={i} item={item} />
          ))}
        </tbody>
      </table>
      <div className={styles.backpackRow2}>
        <table className={styles.itemsWithoutDamage}>
          <thead>
            <tr>
              <th colSpan="3">BACKPACK for items without damage tracks</th>
            </tr>
            <tr>
              <th style={{ "--width": "3rem" }} className={styles.customWidth}>
                QTY
              </th>
              <th>ITEM</th>
              <th style={{ "--width": "5rem" }} className={styles.customWidth}>
                GP Each
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(15)].map((row, i) => (
              <BackpackRow damage={false} key={i} />
            ))}
          </tbody>
        </table>
        <div className={styles.extras}>
          <table className={styles.empire} id="empire">
            <thead>
              <tr>
                <th colSpan="4">EMPIRE BUILDING INVESTMENTS</th>
              </tr>
              <tr>
                <th>TRADE</th>
                <th>FINANCE</th>
                <th>HOLDINGS</th>
                <th>WARS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <EmpireCell share="100" pip="20" />
                <EmpireCell share="300" pip="60" />
                <EmpireCell share="500" pip="100" />
                <EmpireCell share="1000" pip="200" />
              </tr>
            </tbody>
          </table>
          <table className={styles.quest} id="quest">
            <thead>
              <tr>
                <th colSpan="2">
                  QUEST LOG{" "}
                  <button className={styles.newQuest} onClick={startNewQuest}>
                    New Quest <FontAwesomeIcon icon={faPlus} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>COMPLETED: {currentQuest.success.desc}</td>
                <td>FAILED: {currentQuest.failure.desc}</td>
              </tr>
              <tr>
                <td colSpan="2">CURRENT QUEST: {currentQuest.name}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  QUEST DETAILS: <Markdown>{currentQuest.description}</Markdown>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  QUEST TRACKER
                  <ul className={styles.questTracker}>
                    {[...Array(50)].map((quest, i) => (
                      <li key={i}>
                        {2 * i + 1},{2 * i + 2} <Toggle />
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Backpack;
