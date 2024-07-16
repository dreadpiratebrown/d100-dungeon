import { useEffect, useState } from "react";
import { useBoundStore } from "../../store/boundStore";

export const SpidersWebs = ({ room }) => {
  const [complete, setComplete] = useState(false);
  const passTime = useBoundStore((state) => state.passTime);
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    room.geoFeature = 16;

    if (room?.geoFeatureComplete) {
      setComplete(true);
    }

    useBoundStore.setState({ mapTiles: tiles });

    passTime();
  }, []);

  return (
    !complete && (
      <>
        <p>
          <strong>Spider's Webs (16)</strong> The area is covered by thick
          sticky strands of a giant spider's web, which makes movement through
          the area time consuming and difficult. Casting a successful Fire Blast
          or Fire Ball spell/scroll in the area will destroy the webs.
        </p>
      </>
    )
  );
};
