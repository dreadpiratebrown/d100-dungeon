import { useId } from "react";
import styles from "./styles.module.css";

export const Toggle = ({ mode = "box", defaultChecked, stat }) => {
  const id = useId();
  return (
    <div className={[styles.toggle, styles[mode]].join(" ")}>
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        checked={defaultChecked}
      />
      <label htmlFor={id} />
    </div>
  );
};
