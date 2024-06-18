export const Tile = ({ tile }) => {
  return (
    <div
      style={{
        backgroundImage: tile.image,
        backgroundPosition: "0 0",
        backgroundSize: "cover",
        backgroundRepeat: "none",
      }}
    ></div>
  );
};
