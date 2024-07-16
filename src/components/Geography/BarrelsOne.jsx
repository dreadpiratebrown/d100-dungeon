import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import { weapons } from "../../shared";

export const BarrelsOne = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const addWeapon = useBoundStore((state) => state.addItemWithDamageTrack);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 12;

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
        setResult("All but one barrel is empty. Items x 1");
        break;
      case 10:
        const weaponRoll = new DiceRoll("d100");
        const weapon = weapons.find((w) => w.d100.includes(weaponRoll.total));
        addWeapon(weapon);
        setResult(
          `Amongst some worthless clothes in one barrel is a weapon. You find a ${weapon.name} (${weaponRoll.total})`
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
              <strong>Barrels (12-15)</strong> The area contains a number of
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
