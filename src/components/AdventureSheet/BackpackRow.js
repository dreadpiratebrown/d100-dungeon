import { Toggle } from "../../components";

const BackpackRow = ({ damage }) => {
  return damage ? (
    <tr>
      {[...Array(11)].map((cell, i) => (
        <td key={i}></td>
      ))}
      <td>
        {[...Array(5)].map((damage, i) => (
          <Toggle key={i} />
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
