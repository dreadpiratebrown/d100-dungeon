import { Toggle } from "../../components";
import { useBoundStore } from "../../store/boundStore";

const SkillRow = ({ num, skill }) => {
  const state = useBoundStore();
  const skillProp = skill.toLowerCase();
  return (
    <tr>
      <td>{num}</td>
      <td>
        {skill} {state[skillProp].score}
      </td>
      <td>
        <Toggle mode="star" defaultChecked={state[skillProp].attuned} />
        {[...Array(10)].map((toggle, i) => (
          <Toggle mode="pip" key={i} />
        ))}
        <Toggle mode="upgrade" />
      </td>
    </tr>
  );
};

export default SkillRow;
