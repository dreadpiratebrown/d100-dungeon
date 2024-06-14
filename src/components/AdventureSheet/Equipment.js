import EquipmentRow from "./EquipmentRow";
import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Equipment = () => {
  const state = useBoundStore();
  return (
    <div className={styles.equipment} id="equipment">
      <table>
        <thead>
          <tr>
            <th style={{ "--width": "2rem" }} className={styles.customWidth}>
              Roll D10
            </th>
            <th style={{ "--width": "2rem" }} className={styles.customWidth}>
              DMG Mod
            </th>
            <th style={{ "--width": "5rem" }} className={styles.customWidth}>
              Location
            </th>
            <th>Items</th>
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
              FIX
            </th>
            <th style={{ "--width": "3rem" }} className={styles.customWidth}>
              A/S
            </th>
            <th
              style={{ "--width": "8rem" }}
              className={styles.customWidth}
            ></th>
          </tr>
        </thead>
        <tbody>
          <EquipmentRow d10="1" dmgMod="+3" location="Head" item={state.head} />
          <EquipmentRow d10="2" dmgMod="+2" location="Back" item={state.back} />
          <EquipmentRow
            d10="3"
            dmgMod="+1"
            location="Torso"
            item={state.torso}
          />
          <EquipmentRow d10="4" dmgMod="-" location="Arms" item={state.arms} />
          <EquipmentRow
            d10="5"
            dmgMod="-"
            location="Hands"
            item={state.hands}
          />
          <EquipmentRow
            d10="6"
            dmgMod="-"
            location="Main H"
            as=""
            item={state.weapon}
          />
          <EquipmentRow
            d10="7"
            dmgMod="-"
            location="Off H"
            as={state.weapon.hands === 2 ? "" : "S:"}
            item={state.weapon.hands === 2 ? state.weapon : null}
          />
          <EquipmentRow
            d10="8"
            dmgMod="BC"
            location="Waist"
            item={state.waist}
          />
          <EquipmentRow d10="9" dmgMod="-1" location="Legs" item={state.legs} />
          <EquipmentRow
            d10="10"
            dmgMod="-1"
            location="Feet"
            item={state.feet}
          />
          <EquipmentRow location="Neck" as="" durable={true} />
          <EquipmentRow location="Ring" as="" durable={true} />
          <EquipmentRow location="Ring" as="" durable={true} />
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td>TOTALS</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="4"></td>
          </tr>
        </tfoot>
      </table>
      <div className={styles.needs}>
        <div>
          OIL
          <br />
          {[...Array(20)].map((toggle, i) => (
            <Toggle mode="pip" key={i} defaultChecked={i + 1 <= state.oil} />
          ))}
        </div>
        <div>
          FOOD
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle mode="pip" key={i} defaultChecked={i + 1 <= state.food} />
          ))}
        </div>
        <div>
          PICKS
          <br />
          {[...Array(30)].map((toggle, i) => (
            <Toggle mode="pip" key={i} defaultChecked={i + 1 <= state.picks} />
          ))}
        </div>
      </div>
      <div className={styles.belt}>
        <div>BELT SLOTS</div>
        {[...Array(10)].map((slot, i) => (
          <div key={i}>{state.belt[i]}</div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
