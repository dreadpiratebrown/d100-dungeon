import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const Stats = () => {
  const state = useBoundStore();
  const intAttuned = state.int.attuned;
  return (
    <div className={styles.stats} id="stats">
      <div className={styles.noBorder}></div>
      <div className={styles.noBorder}>
        <small>Primary</small>
      </div>
      <div className={styles.noBorder}>
        <small>Adjusted</small>
      </div>
      <div className={styles.noBorder}>
        <small>Experience Track</small>
      </div>
      <div className={styles.noBorder}>
        <small>Unlocks the Abilities below at 50</small>
      </div>
      <div>STRENGTH (Str)</div>
      <div>{parseInt(state.str.primary) + parseInt(state.str.adjusted)}</div>
      <div>{state.str.adjusted}</div>
      <div>
        <Toggle mode="star" defaultChecked={state.str.attuned} />
        {[...Array(10)].map((toggle, i) => (
          <Toggle mode="pip" key={i} />
        ))}
        <Toggle mode="upgrade" />
      </div>
      <div>
        MIGHTY BLOW{" "}
        <Toggle
          defaultChecked={
            parseInt(state.str.primary) + parseInt(state.str.adjusted) >= 50
          }
        />
        <br />
        <small>
          During combat Dmg rolls of 6 roll again and add to the roll
        </small>
      </div>
      <div>DEXTERITY (Dex)</div>
      <div>{parseInt(state.dex.primary) + parseInt(state.dex.adjusted)}</div>
      <div>{state.dex.adjusted}</div>
      <div>
        <Toggle mode="star" defaultChecked={state.dex.attuned} />
        {[...Array(10)].map((toggle, i) => (
          <Toggle mode="pip" key={i} />
        ))}
        <Toggle mode="upgrade" />
      </div>
      <div>
        PERFECT AIM{" "}
        <Toggle
          defaultChecked={
            parseInt(state.dex.primary) + parseInt(state.dex.adjusted) >= 50
          }
        />
        <br />
        <small>Roll again for Hit Location and choose either result</small>
      </div>
      <div>INTELLIGENCE (Int)</div>
      <div>{parseInt(state.int.primary) + parseInt(state.int.adjusted)}</div>
      <div>{state.int.adjusted}</div>
      <div>
        <Toggle mode="star" defaultChecked={intAttuned} stat="int" />
        {[...Array(10)].map((toggle, i) => (
          <Toggle mode="pip" key={i} />
        ))}
        <Toggle mode="upgrade" />
      </div>
      <div>
        SPELL CASTER{" "}
        <Toggle
          defaultChecked={
            parseInt(state.int.primary) + parseInt(state.int.adjusted) >= 50
          }
        />
        <br />
        <small>Can now use spells from the spell book</small>
      </div>
    </div>
  );
};

export default Stats;
