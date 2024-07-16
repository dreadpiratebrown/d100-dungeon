import { useEffect } from "react";
import { useBoundStore } from "../../store/boundStore";

export const Stairs = ({ room }) => {
  // HOW TO MAKE THIS WORK?
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 88;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    <>
      <p>
        <strong>Stairs (88-90)</strong> The chamber contains a large staircase
        leading down to another part of the dungeon.
      </p>
    </>
  );
};
