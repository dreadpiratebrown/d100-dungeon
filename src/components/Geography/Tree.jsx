import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const Tree = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const setFate = useBoundStore((state) => state.setFate);
  const setAdjustedHP = useBoundStore((state) => state.setAdjustedHP);
  const addItemWithoutDamageTrack = useBoundStore(
    (state) => state.addItemWithoutDamageTrack
  );
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 70;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  const pickFlower = () => {
    const roll = new DiceRoll("d10");
    switch (roll.total) {
      case 1:
        setResult(
          "When the flower is taken its branch dies. Moments later, the entire tree has withered and died. Fate -1"
        );
        setFate(-1);
        break;
      case 2:
        setResult("You recoil in pain as it burns to the touch. -3 HP");
        setAdjustedHP(-3);
        break;
      case 3:
        setResult(
          "After the flower is picked it turns black. You gain a Black Flower."
        );
        addItemWithoutDamageTrack({
          name: "Black Flower",
          qty: 1,
          gold: 5,
        });
        break;
      case 4:
      case 5:
      case 6:
        setResult(
          "The flower glows brightly and emits a powerful light. For the remainder of the quest you do not spend oil when instructed by the time track. You gain a Glowing White Flower."
        );
        addItemWithoutDamageTrack({
          name: "Glowing White Flower",
          qty: 1,
          gold: 5,
        });
      case 7:
      case 8:
      case 9:
      case 10:
        setResult(
          'When the flower is taken its petals fall away and its bud turns to crystal. You have discovered a "Crystal Tree", grown by powerful wizards to provide arcane crystals used to power magical artefacts. The tree grows and stores energy, which is passed to a flower when it is picked. You gain a Crystal Flower.'
        );
        addItemWithoutDamageTrack({
          name: "Crystal Flower",
          qty: 1,
          gold: 300,
        });
        break;
      default:
        break;
    }
    room.geoFeatureComplete = true;
    useBoundStore.setState({ mapTiles: tiles });
  };

  return (
    !complete && (
      <>
        <p>
          {!result && (
            <>
              <strong>Tree (70)</strong> Rooted in the center of the dungeon
              floor is an enormous tree with long spreading branches and bright
              green leaves. Beautiful white flowers grow from most branches and
              they project a soft yellow glow that pulsates as you move. Pick a
              flower?
              <br />
              <button onClick={pickFlower} data-testid="pickFlower">
                Pick Flower
              </button>
            </>
          )}
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
