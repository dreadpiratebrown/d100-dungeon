import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";
import styles from "./styles.module.css";
const EquipmentRow = ({
  d10,
  dmgMod,
  location,
  as = "A:",
  item,
  durable = false,
}) => {
  const unequipWeapon = useBoundStore((state) => state.unequipWeapon);
  const damageRepairWeapon = useBoundStore((state) => state.damageRepairWeapon);
  const unequipArmor = useBoundStore((state) => state.unequipArmor);
  const damageRepairArmor = useBoundStore((state) => state.damageRepairArmor);
  const addItemWithDamageTrack = useBoundStore(
    (state) => state.addItemWithDamageTrack
  );
  const addItemWithoutDamageTrack = useBoundStore(
    (state) => state.addItemWithoutDamageTrack
  );

  const unequip = (item) => {
    if (item?.type) {
      unequipWeapon();
    } else if (item?.location) {
      unequipArmor(item.location.toLowerCase());
    }
    addItemWithDamageTrack(item);
  };

  const destroy = (item) => {
    if (item?.type) {
      unequipWeapon();
    } else if (item?.location) {
      unequipArmor(item.location.toLowerCase());
    }
  };
  return (
    <tr>
      <td>{d10}</td>
      <td>{dmgMod}</td>
      <td>{location}</td>
      <td>
        {item?.name} {item?.type}{" "}
        {item?.name && (
          <button className={styles.btnUnequip} onClick={() => unequip(item)}>
            Unequip <FontAwesomeIcon icon={faBan} />
          </button>
        )}
      </td>
      <td>{item?.str}</td>
      <td>{item?.dex}</td>
      <td>{item?.int}</td>
      <td>{item?.hp}</td>
      <td>{location !== "Off H" && item?.damage}</td>
      <td>{item?.def}</td>
      <td>{item?.gold}</td>
      <td>{item?.fix}</td>
      <td>
        {as} {item?.as}
      </td>
      <td>
        {!durable && item?.type ? (
          <>
            {[...Array(5)].map((pip, i) => (
              <Toggle
                defaultChecked={i < item.itemDamage}
                tracker={
                  i < item.itemDamage
                    ? () => damageRepairWeapon(-1)
                    : () => damageRepairWeapon(1)
                }
              />
            ))}
            <Toggle mode="destroy" tracker={() => destroy(item)} />
          </>
        ) : (
          <></>
        )}
        {!durable && item?.location ? (
          <>
            {[...Array(5)].map((pip, i) => (
              <Toggle
                defaultChecked={i < item.itemDamage}
                tracker={
                  i < item.itemDamage
                    ? () => damageRepairArmor(item.location.toLowerCase(), -1)
                    : () => damageRepairArmor(item.location.toLowerCase(), 1)
                }
              />
            ))}
            <Toggle mode="destroy" />
          </>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

export default EquipmentRow;
