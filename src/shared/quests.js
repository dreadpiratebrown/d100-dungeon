export const quests = [
  {
    d100: [1, 2],
    name: "Dungeon Training 1",
    modifier: -40,
    success: {
      gold: 50,
      desc: "+50 gold",
    },
    failure: {
      halfGold: true,
      desc: "Lose 1/2 gold",
    },
    description:
      "Enter the dungeon and **Loot** 3 parts from the monsters there.",
  },
  {
    d100: [3, 4],
    name: "Dungeon Training 2",
    modifier: -30,
    success: {
      gold: 50,
      desc: "+50 gold",
    },
    failure: {
      halfGold: true,
      desc: "Lose 1/2 gold",
    },
    description:
      "Enter the dungeon and **Loot** 3 weapons from the monsters there.",
  },
];
