import { useId, useState, useEffect } from "react";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

export const Toggle = ({
  mode = "box",
  defaultChecked,
  onChange = () => {},
  tracker,
  flag = "",
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const state = useBoundStore();
  const id = useId();
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);
  const toggleFlag = () => {
    if (flag === "darkness" && state.currentQuest.darkness && checked) {
      state.toggleDarkness();
      state.setStrAdjusted(20);
      state.setDexAdjusted(20);
      state.setIntAdjusted(20);
    }
  };
  return (
    <div className={[styles.toggle, styles[mode]].join(" ")}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={() => {
          tracker();
          toggleFlag();
          setChecked(!checked);
        }}
      />
      <label htmlFor={id} />
    </div>
  );
};
