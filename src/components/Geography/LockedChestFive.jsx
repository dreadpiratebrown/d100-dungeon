import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";
import { weapons } from "../../shared";

export const LockedChestFive = ({ room }) => {
  const [result, setResult] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [checkedKeys, setCheckedKeys] = useState(false);
  const [complete, setComplete] = useState(false);
  const dex = useBoundStore((state) => state.dex.primary);
  const locks = useBoundStore((state) => state.locks.score);
  const lucky = useBoundStore((state) => state.lucky.score);
  const passTime = useBoundStore((state) => state.passTime);
  const picks = useBoundStore((state) => state.picks);
  const setPicks = useBoundStore((state) => state.setPicks);
  const keys = useBoundStore((state) => state.keys);
  const setKeys = useBoundStore((state) => state.setKeys);
  const addItemWithDamageTrack = useBoundStore(
    (state) => state.addItemWithDamageTrack
  );
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 91;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const openChest = () => {
    if (!checkedKeys) {
      const keyRoll = new DiceRoll("d10");
      if (keyRoll.total <= parseInt(keys)) {
        const weaponRoll = new DiceRoll("d100");
        const weapon = weapons.find((w) => w.d100.includes(weaponRoll.total));
        addItemWithDamageTrack(weapon);
        setResult(
          `You have the key to this chest. It opens. You find a ${weapon.name} (${weaponRoll.total})`
        );
        setKeys(-1);
        setIsOpened(true);
        setCheckedKeys(true);
        room.geoFeatureComplete = true;
        useBoundStore.setState({ mapTiles: tiles });
      } else {
        setResult("You don't have the key. You'll have to pick the lock.");
        setCheckedKeys(true);
      }
    }
    if (checkedKeys && parseInt(picks) > 0) {
      const roll = new DiceRoll("d100");
      if (roll.total <= parseInt(dex) + parseInt(locks) + parseInt(lucky)) {
        const weaponRoll = new DiceRoll("d100");
        const weapon = weapons.find((w) => w.d100.includes(weaponRoll.total));
        addItemWithDamageTrack(weapon);
        setResult(
          `You successfully pick the lock and open the chest (${roll.total}). You find a ${weapon.name} (${weaponRoll.total})`
        );
        setIsOpened(true);
        room.geoFeatureComplete = true;
        useBoundStore.setState({ mapTiles: tiles });
      } else {
        setResult(
          `You fail to pick the lock (${roll.total}). Time +1, picks -1.`
        );
        passTime();
        setPicks(-1);
      }
    }

    if (checkedKeys && parseInt(picks) === 0) {
      setResult("You are out of picks. You will have to come back later.");
    }
  };

  return (
    !complete && (
      <>
        <p>
          <strong>Locked Chest (91-92)</strong> A large wooden chest sits
          proudly waiting to be opened. If you do not have the key, you may
          attempt to open the chest as many times as you wish until it is opened
          as long as you have a pick.
          <br />
          {!isOpened && (
            <button data-testid="openChest" onClick={openChest}>
              Open Chest
            </button>
          )}
        </p>
        <p>{result}</p>
      </>
    )
  );
};
