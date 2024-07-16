import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import { armor, weapons } from "../../shared";

export const BarrelsTwo = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const addEquipment = useBoundStore((state) => state.addItemWithDamageTrack);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 33;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const search = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
      case 2:
      case 3:
        setResult(
          "The last barrel opened is hiding a giant spider. It uncurls its legs and attacks. Encounter(26)"
        );
        break;
      case 4:
      case 5:
        setResult("All of the barrels are empty.");
        break;
      case 6:
      case 7:
        setResult(
          "Most of the barrels are empty, but a few have something of interest. Needed x 2"
        );
        break;
      case 8:
      case 9:
        const weaponRoll = new DiceRoll("d100");
        const weapon = weapons.find((w) => w.d100.includes(weaponRoll.total));
        addEquipment(weapon);
        setResult(
          `Amongst some worthless clothes in one barrel is a weapon. You find a ${weapon.name} (${weaponRoll.total})`
        );
        break;
      case 10:
        const armorRoll = new DiceRoll("d100");
        const foundArmor = armor.find((a) => a.d100.includes(armorRoll.total));
        addEquipment(foundArmor);
        setResult(
          `At the bottom of a large barrel is some armor. You find a ${foundArmor.name} (${armorRoll.total})`
        );
        break;
      default:
        break;
    }
    passTime();
    room.geoFeatureComplete = true;
    useBoundStore.setState({ mapTiles: tiles });
  };

  return (
    !complete && (
      <>
        <p>
          {!result && (
            <>
              <strong>Barrels (33-35)</strong> The area contains a number of
              barrels. Take the time to search them?
              <br />
              <button onClick={search} data-testid="searchBtn">
                Search Barrels
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
