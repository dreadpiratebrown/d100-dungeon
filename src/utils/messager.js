export const messager = ({ eventCode, roll, direction, turn }) => {
  switch (eventCode) {
    case "start":
      return `<hr /><p>You have entered the dungeon.</p>`;
      break;
    case "blocked":
      return "<p>There are no more possible exits. Click any yellow tile to create a secret passage.</p>";
      break;
    case "door_shut":
      return "<p style='color: var(--red)'>You cannot go that way. The door is still shut.</p>";
      break;
    case "move":
      return `<p>You go ${direction} into the next room. (${roll})</p>`;
      break;
    case "turn":
      return `<p>TURN ${turn}</p>`;
      break;
    case "oil":
      return "<p>You are plunged into darkness. Spend one oil to light the way? <span id='oilReplace'></span></p>";
      break;
    case "lift_darkness":
      return "<p>The darkness is lifted. STR, DEX and INT are adjusted by +20</p>";
      break;
    case "set_darkness":
      return "<p>Darkness prevails. STR, DEX and INT are adjusted by -20</p>";
      break;
    case "encounter":
      return "<p>You might have encountered a wandering monster. Maybe.</p>";
      break;
    case "food":
      return "<p>You are overcome by hunger. Eat one food? Choosing \"NO\" will cause you to become fatigued and weak, and you will lose 5HP. <span id='foodReplace'></span></p>";
    case "eat_food":
      return "<p>You eat one food and are sated for now.</p>";
      break;
    case "no_food":
      return "<p>You choose to remain hungry. HP adjusted by -5.</p>";
      break;
    case "invalid_move":
      return "<p>That move is too far. You may only move one room at a time.</p>";
      break;
    default:
      break;
  }
};
