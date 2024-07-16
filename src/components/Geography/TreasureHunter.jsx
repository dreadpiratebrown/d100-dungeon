import { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { useBoundStore } from "../../store/boundStore";

export const TreasureHunter = ({ room }) => {
  const [result, setResult] = useState();
  const [complete, setComplete] = useState(false);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 32;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  // NEED TO MAKE NEEDED TABLE AND OFFER ITEMS FOR SALE HERE

  return (
    !complete && (
      <>
        <p>
          <strong>Treasure Hunter (82-83)</strong> You come across a fellow
          treasure hunter who is just leaving the dungeon. After some time
          chatting about conquests, he offers to sell some of his items. Needed
          x 5
          <br />
          <br />
          {result && <span data-testid="result">{result}</span>}
        </p>
      </>
    )
  );
};
