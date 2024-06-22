import styles from "./styles.module.css";

export const Tile = ({ tile }) => {
  const rotation = `${tile.rotation * 90}deg`;
  return (
    <div
      style={{
        backgroundImage: "url(assets/" + tile.image + ")",
        backgroundPosition: "0 0",
        backgroundSize: "cover",
        backgroundRepeat: "none",
        transform: `rotate(${rotation})`,
      }}
      className={styles.tile}
    ></div>
  );
};
