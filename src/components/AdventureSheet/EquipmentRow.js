import { Toggle } from "../../components";

const EquipmentRow = ({
  d10,
  dmgMod,
  location,
  as = "A:",
  item,
  durable = false,
}) => {
  return (
    <tr>
      <td>{d10}</td>
      <td>{dmgMod}</td>
      <td>{location}</td>
      <td>
        {item?.name} {item?.type}
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
        {!durable ? (
          <>
            <Toggle />
            <Toggle />
            <Toggle />
            <Toggle />
            <Toggle />
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
