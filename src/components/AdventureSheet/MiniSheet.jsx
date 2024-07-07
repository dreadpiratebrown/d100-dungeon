import { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";
import Clock1 from "./assets/clock-one.svg?react";
import Clock2 from "./assets/clock-two.svg?react";
import Clock3 from "./assets/clock-three.svg?react";
import Clock4 from "./assets/clock-four.svg?react";
import Clock5 from "./assets/clock-five.svg?react";
import Clock6 from "./assets/clock-six.svg?react";
import Clock7 from "./assets/clock-seven.svg?react";
import Clock8 from "./assets/clock-eight.svg?react";
import Clock9 from "./assets/clock-nine.svg?react";
import Clock10 from "./assets/clock-ten.svg?react";
import Clock11 from "./assets/clock-eleven.svg?react";
import Clock12 from "./assets/clock-twelve.svg?react";

const MiniSheet = () => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const primaryHP = useBoundStore((state) => state.primaryHP);
  const adjustedHP = useBoundStore((state) => state.adjustedHP);
  const time = useBoundStore((state) => state.currentQuest.timeTracker);
  const passTime = useBoundStore((state) => state.passTime);
  return (
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
            <td
              className={styles.oil}
              style={{
                backgroundColor:
                  time % 12 >= 1 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 0) {
                  passTime();
                  setType("oil");
                  setModal(true);
                }
              }}
            >
              <Clock1 />
            </td>
            <td
              style={{
                backgroundColor:
                  time % 12 >= 2 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 1) {
                  passTime();
                }
              }}
            >
              <Clock2 />
            </td>
            <td
              className={styles.encounter}
              style={{
                backgroundColor:
                  time % 12 >= 3 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 2) {
                  passTime();
                  setType("encounter");
                  const roll = new DiceRoll("1d10");
                  setModal(roll.total <= 4);
                }
              }}
            >
              <Clock3 />
            </td>
            <td
              style={{
                backgroundColor:
                  time % 12 >= 4 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 3) {
                  passTime();
                }
              }}
            >
              <Clock4 />
            </td>
            <td
              className={styles.oil}
              style={{
                backgroundColor:
                  time % 12 >= 5 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 4) {
                  passTime();
                  setType("oil");
                  setModal(true);
                }
              }}
            >
              <Clock5 />
            </td>
            <td
              style={{
                backgroundColor:
                  time % 12 >= 6 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 5) {
                  passTime();
                }
              }}
            >
              <Clock6 />
            </td>
          </tr>
          <tr>
            <td
              className={styles.encounter}
              style={{
                backgroundColor:
                  time % 12 >= 7 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 6) {
                  passTime();
                  setType("encounter");
                  const roll = new DiceRoll("1d10");
                  setModal(roll.total <= 5);
                }
              }}
            >
              <Clock7 />
            </td>
            <td
              style={{
                backgroundColor:
                  time % 12 >= 8 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 7) {
                  passTime();
                }
              }}
            >
              <Clock8 />
            </td>
            <td
              className={styles.oil}
              style={{
                backgroundColor:
                  time % 12 >= 9 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 8) {
                  passTime();
                  setType("oil");
                  setModal(true);
                }
              }}
            >
              <Clock9 />
            </td>
            <td
              style={{
                backgroundColor:
                  time % 12 >= 10 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 9) {
                  passTime();
                }
              }}
            >
              <Clock10 />
            </td>
            <td
              className={styles.encounter}
              style={{
                backgroundColor:
                  time % 12 >= 11 || (time > 0 && time % 12 === 0)
                    ? "var(--silver)"
                    : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 10) {
                  passTime();
                  setType("encounter");
                  const roll = new DiceRoll("1d10");
                  setModal(roll.total <= 6);
                }
              }}
            >
              <Clock11 />
            </td>
            <td
              className={styles.dinner}
              style={{
                backgroundColor:
                  time > 0 && time % 12 === 0 ? "var(--silver)" : "#fff",
              }}
              onClick={() => {
                if (time % 12 === 11) {
                  passTime();
                  setType("food");
                  setModal(true);
                }
              }}
            >
              <Clock12 />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MiniSheet;
