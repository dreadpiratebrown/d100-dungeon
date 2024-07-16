import React, { useEffect, useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import * as Geography from "../Geography";
import { geography } from "../../shared";

export const RoomActions = ({ room }) => {
  const [feature, setFeature] = useState();

  const components = {
    barrels_one: Geography.BarrelsOne,
    barrels_two: Geography.BarrelsTwo,
    barrels_three: Geography.BarrelsThree,
    barrels_four: Geography.BarrelsFour,
    boulder: Geography.Boulder,
    bottomless_pit: Geography.BottomlessPit,
    cage_trap: Geography.CageTrap,
    carved_circle: Geography.CarvedCircle,
    cave_in: Geography.CaveIn,
    cave_in_trap: Geography.CaveInTrap,
    chasm_one: Geography.ChasmOne,
    chasm_two: Geography.ChasmTwo,
    crossfire_trap: Geography.CrossfireTrap,
    crypt: Geography.Crypt,
    fire_trap: Geography.FireTrap,
    forge: Geography.Forge,
    fountain: Geography.Fountain,
    giant_ball_trap: Geography.GiantBallTrap,
    grate: Geography.Grate,
    lava: Geography.Lava,
    lever_one: Geography.LeverOne,
    lever_two: Geography.LeverTwo,
    lever_three: Geography.LeverThree,
    lever_four: Geography.LeverFour,
    lever_five: Geography.LeverFive,
    locked_chest_one: Geography.LockedChestOne,
    locked_chest_two: Geography.LockedChestTwo,
    locked_chest_three: Geography.LockedChestThree,
    locked_chest_four: Geography.LockedChestFour,
    locked_chest_five: Geography.LockedChestFive,
    moss: Geography.Moss,
    mushrooms: Geography.Mushrooms,
    pendulum_trap: Geography.PendulumTrap,
    pit_trap: Geography.PitTrap,
    poisonous_gas_trap: Geography.PoisonousGasTrap,
    portcullis: Geography.Portcullis,
    river_one: Geography.RiverOne,
    river_two: Geography.RiverTwo,
    rope_bridge_one: Geography.RopeBridgeOne,
    rope_bridge_two: Geography.RopeBridgeTwo,
    shrine: Geography.Shrine,
    snake_pit_trap: Geography.SnakePitTrap,
    spear_trap: Geography.SpearTrap,
    spiders_webs: Geography.SpidersWebs,
    spiked_pit_trap: Geography.SpikedPitTrap,
    trapped_chest_one: Geography.TrappedChestOne,
    trapped_chest_two: Geography.TrappedChestTwo,
    trapped_chest_three: Geography.TrappedChestThree,
    trapped_chest_four: Geography.TrappedChestFour,
    trapped_chest_five: Geography.TrappedChestFive,
    treasure_hunter: Geography.TreasureHunter,
    treasure_trove_one: Geography.TreasureTroveOne,
    treasure_trove_two: Geography.TreasureTroveTwo,
    treasure_trove_three: Geography.TreasureTroveThree,
    tree: Geography.Tree,
  };

  useEffect(() => {
    setFeature(null);
    if (room.color === "green") {
      //const roll = new DiceRoll("d100");
      const roll = { total: 1 };
      const newFeature = geography.find((g) => g.d100.includes(roll.total));
      setFeature(newFeature);
    }
  }, [room]);

  return (
    feature &&
    React.createElement(components[feature.component], { room: room })
  );
};
