import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Moss = ({ room }) => {
  const [mossType, setMossType] = useState();
  const [result, setResult] = useState();
  const dex = useBoundStore((state) => state.dex.primary);
  const agility = useBoundStore((state) => state.agility.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const passTime = useBoundStore((state) => state.passTime);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const tiles = useBoundStore((state) => state.mapTiles);

  // HOW TO MAKE THIS PERSISTENT?
  useEffect(() => {
    room.geoFeature = 17;
    useBoundStore.setState({ mapTiles: tiles });

    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
        setMossType(
          "The moss has grown across deep pools of water which break through into the dungeon floor, the edges of which are very sharp. Each step taken there is a danger you may fall in and cut yourself on the rock."
        );
        const roll1 = new DiceRoll("d100");
        if (
          roll1.total <=
          parseInt(dex) + parseInt(agility) + parseInt(lucky) - 10
        ) {
          passTime();
          setResult("You make your way across the treacherous floor. Time +1");
        } else {
          passTime();
          passTime();
          setAdjustedHP(-2);
          setResult(
            "You fall in a mossy pool and injure yourself. Time +2, -2 HP"
          );
        }
        break;
      case 3:
      case 4:
        setMossType(
          "The moss is very slippery, making movement through the section difficult."
        );
        const roll2 = new DiceRoll("d100");
        if (
          roll2.total <=
          parseInt(dex) + parseInt(agility) + parseInt(lucky) - 10
        ) {
          passTime();
          setResult("You make your way across the treacherous floor. Time +1");
        } else {
          passTime();
          passTime();
          setResult("You slip and fall several times. Time +2");
        }
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        setMossType(
          "The moss hides small boulders and rubble below its surface, and you are constantly stumbling, making movement through the area uncomfortable."
        );
        const roll3 = new DiceRoll("d100");
        if (
          roll3.total <=
          parseInt(dex) + parseInt(agility) + parseInt(lucky)
        ) {
          setResult("You make your way across the treacherous floor.");
        } else {
          passTime();
          setResult("You stumble several times. Time +1");
        }
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <p>
        <strong>Moss (17)</strong> The dungeon floor is completely covered in a
        damp, spongy moss. {mossType}
      </p>
      <p>{result}</p>
    </>
  );
};
