import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";

const BackpackRow = ({ damage, item }) => {
  const equipWeapon = useBoundStore((state) => state.equipWeapon);
  const equipArmor = useBoundStore((state) => state.equipArmor);
  const remItemWithDamagetrack = useBoundStore(
    (state) => state.remItemWithDamagetrack
  );
  const equip = (item, damage) => {
    if (item?.type) {
      equipWeapon(item, damage);
    } else if (item?.location) {
      equipArmor(item, item.location.toLowerCase(), damage);
    }
    remItemWithDamagetrack(item);
  };
  return damage ? (
    <tr>
      <td>{item?.location || "Main H"}</td>
      <td>
        {item.name} {item?.type}{" "}
        <button
          className={styles.btnEquip}
          onClick={() => equip(item, item.itemDamage)}
        >
          Equip <FontAwesomeIcon icon={faShield} />
        </button>
      </td>
      <td>{item?.str}</td>
      <td>{item?.dex}</td>
      <td>{item?.int}</td>
      <td>{item?.hp}</td>
      <td>{item?.damage}</td>
      <td>{item?.def}</td>
      <td>{item.gp}</td>
      <td>{item.fix}</td>
      <td>{item?.as}</td>
      <td>
        {[...Array(5)].map((damage, i) => (
          <Toggle key={i} defaultChecked={i < item.itemDamage} />
        ))}
      </td>
    </tr>
  ) : (
    <tr>
      {[...Array(3)].map((cell, i) => (
        <td key={i}></td>
      ))}
    </tr>
  );
};

export default BackpackRow;
