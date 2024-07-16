import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import { armor, weapons } from "../../shared";

export const Forge = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const addEquipment = useBoundStore((state) => state.addItemWithDamageTrack);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 63;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      const weaponRoll = new DiceRoll("d100");
      const weapon = weapons.find((w) => w.d100.includes(weaponRoll.total));
      addEquipment(weapon);
      let str = `You find a ${weapon.name} (${weaponRoll.total}). `;
      const armorRoll = new DiceRoll("d100");
      const foundArmor = armor.find((a) => a.d100.includes(armorRoll.total));
      addEquipment(foundArmor);
      str += `You find a ${foundArmor.name} (${armorRoll.total}).`;
      setResult(str);
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Forge (63-64)</strong> This part of the dungeon was once used
          as a forge and workshop. Everything is a little rusty now but some of
          the weapons and armor that were left behind could be of some use.
          <br />
          <br />
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
