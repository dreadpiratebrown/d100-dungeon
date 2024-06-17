import EquipmentRow from "./EquipmentRow";
import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Equipment = () => {
  const state = useBoundStore();
  let str =
    state.head?.str +
    state.back?.str +
    state.torso?.str +
    state.arms?.str +
    state.hands?.str +
    state.weapon?.str +
    state.offh?.str +
    state.waist?.str +
    state.legs?.str +
    state.feet?.str;
  let dex =
    state.head?.dex +
    state.back?.dex +
    state.torso?.dex +
    state.arms?.dex +
    state.hands?.dex +
    state.weapon?.dex +
    state.offh?.dex +
    state.waist?.dex +
    state.legs?.dex +
    state.feet?.dex;
  let int =
    state.head?.int +
    state.back?.int +
    state.torso?.int +
    state.arms?.int +
    state.hands?.int +
    state.weapon?.int +
    state.offh?.int +
    state.waist?.int +
    state.legs?.int +
    state.feet?.int;
  let hp =
    state.head?.hp +
    state.back?.hp +
    state.torso?.hp +
    state.arms?.hp +
    state.hands?.hp +
    state.weapon?.hp +
    state.offh?.hp +
    state.waist?.hp +
    state.legs?.hp +
    state.feet?.hp;
  let dmg =
    state.head?.dmg +
    state.back?.dmg +
    state.torso?.dmg +
    state.arms?.dmg +
    state.hands?.dmg +
    state.weapon?.dmg +
    state.offh?.dmg +
    state.waist?.dmg +
    state.legs?.dmg +
    state.feet?.dmg;
  let def =
    state.head?.def +
    state.back?.def +
    state.torso?.def +
    state.arms?.def +
    state.hands?.def +
    state.weapon?.def +
    state.offh?.def +
    state.waist?.def +
    state.legs?.def +
    state.feet?.def;
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
            item={state.weapon.hands === 2 ? state.weapon : state.offh}
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
            <td>{str ? str : 0}</td>
            <td>{dex ? dex : 0}</td>
            <td>{int ? int : 0}</td>
            <td>{hp ? hp : 0}</td>
            <td>{dmg ? dmg : 0}</td>
            <td>{def ? def : 0}</td>
            <td colSpan="4"></td>
          </tr>
        </tfoot>
      </table>
      <div className={styles.needs}>
        <div>
          OIL
          <br />
          {[...Array(20)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= state.oil}
              tracker={
                i + 1 <= state.oil
                  ? () => state.setOil(-1)
                  : () => state.setOil(1)
              }
              flag="darkness"
            />
          ))}
        </div>
        <div>
          FOOD
          <br />
          {[...Array(10)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= state.food}
              tracker={
                i + 1 <= state.food
                  ? () => state.setFood(-1)
                  : () => state.setFood(1)
              }
            />
          ))}
        </div>
        <div>
          PICKS
          <br />
          {[...Array(30)].map((toggle, i) => (
            <Toggle
              mode="pip"
              key={i}
              defaultChecked={i + 1 <= state.picks}
              tracker={
                i + 1 <= state.picks
                  ? () => state.setPicks(-1)
                  : () => state.setPicks(1)
              }
            />
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
