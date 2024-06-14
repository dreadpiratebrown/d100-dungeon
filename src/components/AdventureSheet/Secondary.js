import { Toggle } from "../../components";
import SkillRow from "./SkillRow";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";
import { ReactComponent as Clock1 } from "./assets/clock-one.svg";
import { ReactComponent as Clock2 } from "./assets/clock-two.svg";
import { ReactComponent as Clock3 } from "./assets/clock-three.svg";
import { ReactComponent as Clock4 } from "./assets/clock-four.svg";
import { ReactComponent as Clock5 } from "./assets/clock-five.svg";
import { ReactComponent as Clock6 } from "./assets/clock-six.svg";
import { ReactComponent as Clock7 } from "./assets/clock-seven.svg";
import { ReactComponent as Clock8 } from "./assets/clock-eight.svg";
import { ReactComponent as Clock9 } from "./assets/clock-nine.svg";
import { ReactComponent as Clock10 } from "./assets/clock-ten.svg";
import { ReactComponent as Clock11 } from "./assets/clock-eleven.svg";
import { ReactComponent as Clock12 } from "./assets/clock-twelve.svg";

const Secondary = () => {
  const primaryHP = useBoundStore((state) => state.primaryHP);
  const adjustedHP = useBoundStore((state) => state.adjustedHP);
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
        <div className={styles.hpObjTime}>
          <table className={styles.hp}>
            <thead>
              <tr>
                <th colSpan="2">HEALTH POINTS (HP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  PRIMARY: {primaryHP}
                  <br />
                  <br />
                  ADJUSTED: {adjustedHP}
                </td>
                <td className={styles.current}>
                  {primaryHP + adjustedHP}
                  <br />
                  CURRENT
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.objectives}>OBJECTIVES:</div>
          <table className={styles.time} id="time">
            <thead>
              <tr>
                <th colSpan="3">TIME TRACK</th>
                <th colSpan="3">MOD:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.oil}>
                  <Clock1 />
                </td>
                <td>
                  <Clock2 />
                </td>
                <td className={styles.encounter}>
                  <Clock3 />
                </td>
                <td>
                  <Clock4 />
                </td>
                <td className={styles.oil}>
                  <Clock5 />
                </td>
                <td>
                  <Clock6 />
                </td>
              </tr>
              <tr>
                <td className={styles.encounter}>
                  <Clock7 />
                </td>
                <td>
                  <Clock8 />
                </td>
                <td className={styles.oil}>
                  <Clock9 />
                </td>
                <td>
                  <Clock10 />
                </td>
                <td className={styles.encounter}>
                  <Clock11 />
                </td>
                <td className={styles.dinner}>
                  <Clock12 />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
