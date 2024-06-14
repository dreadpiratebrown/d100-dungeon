import { Toggle } from "../../components";

const EmpireCell = ({ share, pip }) => {
  return (
    <td>
      1 share = {share}gp
      <br />
      {[...Array(5)].map((damage, i) => (
        <Toggle key={i} mode="pip" />
      ))}
      <br />1 pip = {pip}gp
    </td>
  );
};

export default EmpireCell;
