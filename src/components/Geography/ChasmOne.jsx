import { useEffect } from "react";
import { useBoundStore } from "../../store/boundStore";
import "./styles.css";

export const ChasmOne = ({ room }) => {
  const tiles = useBoundStore((state) => state.mapTiles);

  useEffect(() => {
    const currentRoom = document.getElementById(room.gridLocation);
    const chasm = document.createElement("img");
    chasm.src = "assets/chasm-1.png";
    chasm.classList.add("geoFeature");
    currentRoom.appendChild(chasm);

    room.geoFeature = 59;
    useBoundStore.setState({ mapTiles: tiles });
  }, []);

  return (
    <>
      <p>
        <strong>Chasm (59)</strong> A vast chasm crosses from the top left hand
        corner to the bottom right hand corner of this area. It it so vast and
        deep it cannot be crossed and exits on the opposite side of the chasm
        cannot be used.
      </p>
    </>
  );
};
