import React, { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import * as Geography from "../Geography";
import { geography } from "../../shared";

export const RoomActions = ({ room }) => {
  const [feature, setFeature] = useState();

  const components = {
    giant_ball_trap: Geography.GiantBallTrap,
    pendulum_trap: Geography.PendulumTrap,
    poisonous_gas_trap: Geography.PoisonousGasTrap,
    snake_pit_trap: Geography.SnakePitTrap,
    spiked_pit_trap: Geography.SpikedPitTrap,
  };

  useEffect(() => {
    setFeature(null);
    if (room.color === "green") {
      //const roll = new DiceRoll("d100");
      const roll = 2;
      const newFeature = geography.find((g) => g.d100.includes(roll));
      setFeature(newFeature);
    }
  }, [room]);

  return <>{feature && React.createElement(components[feature.component])}</>;
};
