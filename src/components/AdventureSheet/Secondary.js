import { useState } from "react";
import { Toggle, Modal } from "../../components";
import SkillRow from "./SkillRow";
import MiniSheet from "./MiniSheet";
import { Oil } from "../Quest/Oil";
import { Encounter } from "../Quest/Encounter";
import { Food } from "../Quest/Food";
import styles from "./styles.module.css";

const Secondary = () => {
  const [modal, setModal] = useState(false);

  return (
    <div id="secondary">
      <div className={styles.trackers}>
        <div className={styles.keys}>
          KEYS{" "}
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
        </div>
        <div className={styles.levers}>
          LEVERS{" "}
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
        </div>
        <div className={styles.poison}>
          POISON{" "}
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
        </div>
        <div className={styles.disease}>
          DISEASE{" "}
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} />
          ))}
        </div>
      </div>
      <div className={styles.other}>
        <div className={styles.skills} id="skills">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>SKILLS</th>
                <th>Experience Tracker</th>
              </tr>
            </thead>
            <tbody>
              <SkillRow num="1" skill="Agility" />
              <SkillRow num="2" skill="Aware" />
              <SkillRow num="3" skill="Bravery" />
              <SkillRow num="4" skill="Dodge" />
              <SkillRow num="5" skill="Escape" />
              <SkillRow num="6" skill="Locks" />
              <SkillRow num="7" skill="Lucky" />
              <SkillRow num="8" skill="Magic" />
              <SkillRow num="9" skill="Strong" />
              <SkillRow num="10" skill="Traps" />
            </tbody>
          </table>
        </div>
        <div className={styles.spellbook} id="spells">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Bonus</th>
                <th>SPELLBOOK</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="5">50+</td>
                <td>+20</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>+15</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>+10</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>+5</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>+0</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>60+</td>
                <td>-0</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>70+</td>
                <td>-5</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>80+</td>
                <td>-10</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>90+</td>
                <td>-15</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>100</td>
                <td>-20</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <MiniSheet />
      </div>
      {/* <Modal openModal={modal}>
        {type === "oil" && <Oil onCancel={() => setModal(false)} />}
        {type === "encounter" && <Encounter onCancel={() => setModal(false)} />}
        {type === "food" && <Food onCancel={() => setModal(false)} />}
      </Modal> */}
    </div>
  );
};

export default Secondary;
