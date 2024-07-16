import { useEffect, useState } from "react";
import { useBoundStore } from "../../store/boundStore";

export const CaveIn = ({ room }) => {
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 32;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    } else {
      passTime();
      passTime();
      passTime();
      room.geoFeatureComplete = true;
    }

    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Cave In (32)</strong> The entire ceiling begins to cave in,
          luckily you manage to find a spot that is protected from the falling
          rock and wait it out. As the dust settles it is clear the entire area
          is now buried in rock and all the exits are blocked. After some
          considerable time you manage to retrace your steps and return to the
          area you were last in. This area is now off-limits for the rest of the
          game. Time +3
        </p>
      </>
    )
  );
};
