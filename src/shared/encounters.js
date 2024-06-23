export const encounters = [
  {
    d100: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    monster: "Giant Rats",
    type: "normal",
    av: 25,
    def: 0,
    dmg: -2,
    hp: [3, 2, 2],
    table: ["p2"],
    abilities: ["disease", "pack"],
  },
  {
    d100: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    monster: "Giant Bats",
    type: "normal",
    av: 25,
    def: 0,
    dmg: -3,
    hp: [2, 3, 3],
    table: ["p4"],
    abilities: ["fly", "surprise", "pack"],
  },
  {
    d100: [21, 22, 23, 24, 25],
    monster: "Giant Ants",
    type: "normal",
    av: 20,
    def: 2,
    dmg: -2,
    hp: [3, 2, 3, 3],
    table: ["p1"],
    abilities: ["pack"],
  },
  {
    d100: [26, 27, 28, 29, 30],
    monster: "Giant Spider",
    type: "normal",
    av: 30,
    def: 2,
    dmg: -1,
    hp: 6,
    table: ["p1"],
    abilities: ["web"],
  },
  {
    d100: [31, 32, 33],
    monster: "Goblinoids",
    type: "normal",
    av: 25,
    def: 0,
    dmg: -2,
    hp: [3, 3, 2],
    table: ["i", "w"],
    abilities: ["pack"],
  },
  {
    d100: [34, 35, 36, 37],
    monster: "Goblins",
    type: "normal",
    av: 25,
    def: 1,
    dmg: -1,
    hp: [2, 3, 3],
    table: ["a", "i", "w"],
    abilities: ["pack"],
  },
  {
    d100: [38, 39, 40, 41],
    monster: "Goblin Archers",
    type: "normal",
    av: 25,
    def: 1,
    dmg: -1,
    hp: [2, 3, 3],
    table: ["a", "i", "w"],
    abilities: ["surprise", "pack"],
  },
  {
    d100: [42],
    monster: "Giant Warlock",
    type: "normal",
    av: 30,
    def: 1,
    dmg: -1,
    hp: 7,
    table: ["i", "ta"],
    abilities: ["dark magic"],
  },
  {
    d100: [43, 44],
    monster: "Bear",
    type: "normal",
    av: 40,
    def: 2,
    dmg: 0,
    hp: 10,
    table: ["p2"],
    abilities: [],
  },
  {
    d100: [45, 46],
    monster: "Ratmen",
    type: "normal",
    av: 30,
    def: 2,
    dmg: 0,
    hp: [3, 3, 4],
    table: ["a", "i", "w"],
    abilities: ["disease", "pack"],
  },
  {
    d100: [47],
    monster: "Ratman Champion",
    type: "normal",
    av: 40,
    def: 2,
    dmg: 0,
    hp: 9,
    table: ["a", "i", "w"],
    abilities: ["disease"],
  },
  {
    d100: [48, 49],
    monster: "Goatman",
    type: "normal",
    av: 40,
    def: 3,
    dmg: 1,
    hp: 11,
    table: ["a", "i", "w"],
    abilities: [],
  },
  {
    d100: [50, 51],
    monster: "Goatman Archer",
    type: "normal",
    av: 40,
    def: 2,
    dmg: 1,
    hp: 9,
    table: ["a", "i", "w"],
    abilities: ["surprise"],
  },
  {
    d100: [52],
    monster: "Goatman Priest",
    type: "normal",
    av: 40,
    def: 1,
    dmg: 1,
    hp: 15,
    table: ["i", "ta"],
    abilities: ["dark magic"],
  },
  {
    d100: [53, 54, 55],
    monster: "Zombies",
    type: "undead",
    av: 35,
    def: 0,
    dmg: 0,
    hp: [4, 4, 4, 5],
    table: [],
    abilities: ["disease", "pack"],
  },
  {
    d100: [56, 57],
    monster: "Tricksters",
    type: "demonic",
    av: 35,
    def: 1,
    dmg: 0,
    hp: [3, 4, 4],
    table: ["i", "w+5"],
    abilities: ["dark magic", "surprise", "pack"],
  },
  {
    d100: [58, 59],
    monster: "Imps",
    type: "demonic",
    av: 35,
    def: 1,
    dmg: 1,
    hp: [4, 4, 5, 5],
    table: ["p2", "i", "w+5"],
    abilities: ["fire", "pack"],
  },
  {
    d100: [60, 61],
    monster: "Orc",
    type: "normal",
    av: 45,
    def: 3,
    dmg: 1,
    hp: 10,
    table: ["i", "a+10", "w+10"],
    abilities: [],
  },
  {
    d100: [62, 63, 64, 65],
    monster: "Orc Archer",
    type: "normal",
    av: 45,
    def: 2,
    dmg: 1,
    hp: 9,
    table: ["i", "a+10", "w+10"],
    abilities: ["surprise"],
  },
  {
    d100: [66],
    monster: "Spider Queen",
    type: "normal",
    av: 40,
    def: 3,
    dmg: 2,
    hp: 14,
    table: ["p1"],
    abilities: ["web", "surprise", "poison"],
  },
  {
    d100: [67],
    monster: "Skeleton Spider",
    type: "undead",
    av: 45,
    def: 4,
    dmg: 2,
    hp: 15,
    table: ["p1"],
    abilities: ["regenerate", "surprise", "resurrection", "web"],
  },
  {
    d100: [68],
    monster: "Giant Vampire Bat",
    type: "undead",
    av: 45,
    def: 3,
    dmg: 1,
    hp: 10,
    table: ["p4"],
    abilities: ["fly", "surprise", "phase", "resurrection"],
  },
  {
    d100: [69, 70],
    monster: "Giant Apes",
    type: "normal",
    av: 40,
    def: 2,
    dmg: 2,
    hp: [8, 8, 9],
    table: ["p2"],
    abilities: ["pack"],
  },
  {
    d100: [71],
    monster: "Zombie Master",
    type: "undead",
    av: 50,
    def: 1,
    dmg: 1,
    hp: 16,
    table: ["ta+10"],
    abilities: ["disease"],
  },
  {
    d100: [72],
    monster: "Skeleton",
    type: "undead",
    av: 50,
    def: 4,
    dmg: 1,
    hp: 13,
    table: ["a+15", "w+15"],
    abilities: ["fear", "regenerate", "resurrection"],
  },
  {
    d100: [73],
    monster: "Giant Snake",
    type: "normal",
    av: 55,
    def: 3,
    dmg: 2,
    hp: 16,
    table: ["gold"],
    abilities: ["poison"],
  },
  {
    d100: [74],
    monster: "Orc Champion",
    type: "normal",
    av: 55,
    def: 5,
    dmg: 2,
    hp: 16,
    table: ["i", "a+15", "w+15"],
    abilities: [],
  },
  {
    d100: [75],
    monster: "Ghoul",
    type: "undead",
    av: 50,
    def: 3,
    dmg: 3,
    hp: 18,
    table: ["p2"],
    abilities: ["fear", "phase"],
  },
  {
    d100: [76],
    monster: "Wight",
    type: "undead",
    av: 55,
    def: 4,
    dmg: 3,
    hp: 20,
    table: ["i", "ta+15"],
    abilities: ["fly", "fear", "resurrection"],
  },
  {
    d100: [77],
    monster: "Orc Warlock",
    type: "normal",
    av: 50,
    def: 4,
    dmg: 2,
    hp: 22,
    table: ["i", "ta+15"],
    abilities: ["dark magic"],
  },
  {
    d100: [78],
    monster: "Demon",
    type: "demonic",
    av: 55,
    def: 4,
    dmg: 2,
    hp: 20,
    table: ["p2", "i", "w+15"],
    abilities: ["fire"],
  },
  {
    d100: [79],
    monster: "Ghost",
    type: "undead",
    av: 60,
    def: 4,
    dmg: 2,
    hp: 24,
    table: ["ta+15"],
    abilities: ["death touch", "ethereal", "fear"],
  },
  {
    d100: [80],
    monster: "Vampire",
    type: "undead",
    av: 65,
    def: 5,
    dmg: 3,
    hp: 25,
    table: ["i", "w+15", "ta+15"],
    abilities: ["fly", "dark magic", "phase", "resurrection"],
  },
  {
    d100: [81],
    monster: "Wraith",
    type: "undead",
    av: 60,
    def: 4,
    dmg: 3,
    hp: 28,
    table: ["tb"],
    abilities: ["death touch", "ethereal", "fear"],
  },
  {
    d100: [82],
    monster: "Necromancer",
    type: "normal",
    av: 60,
    def: 5,
    dmg: 2,
    hp: 25,
    table: ["i", "w+20", "tb"],
    abilities: ["dark magic", "regenerate", "resurrection"],
  },
  {
    d100: [83],
    monster: "Demon Lord",
    type: "demonic",
    av: 55,
    def: 4,
    dmg: 2,
    hp: 29,
    table: ["p2", "i", "w+20", "tb"],
    abilities: ["fly", "fire", "large", "fear"],
  },
  {
    d100: [84],
    monster: "Ogre",
    type: "normal",
    av: 60,
    def: 5,
    dmg: 3,
    hp: 30,
    table: ["p2", "tb+5"],
    abilities: ["fear", "large"],
  },
  {
    d100: [85],
    monster: "Minotaur",
    type: "normal",
    av: 65,
    def: 6,
    dmg: 3,
    hp: 33,
    table: ["p2", "tb+5"],
    abilities: ["fear", "large"],
  },
  {
    d100: [86],
    monster: "Giant",
    type: "normal",
    av: 65,
    def: 6,
    dmg: 4,
    hp: 35,
    table: ["p2", "tb+10"],
    abilities: ["fear", "large", "stun"],
  },
  {
    d100: [87],
    monster: "Troll",
    type: "normal",
    av: 60,
    def: 5,
    dmg: 3,
    hp: 36,
    table: ["p2", "tb+10"],
    abilities: ["fear", "large", "regenerate"],
  },
  {
    d100: [88],
    monster: "Evil Warlock",
    type: "normal",
    av: 65,
    def: 6,
    dmg: 3,
    hp: 34,
    table: ["tb+15"],
    abilities: ["dark magic"],
  },
  {
    d100: [89],
    monster: "Lich Lord",
    type: "undead",
    av: 70,
    def: 7,
    dmg: 3,
    hp: 35,
    table: ["i", "w+20", "tb+15"],
    abilities: ["dark magic", "regenerate", "resurrection"],
  },
  {
    d100: [90],
    monster: "Gargoyle",
    type: "demonic",
    av: 65,
    def: 7,
    dmg: 3,
    hp: 38,
    table: ["p2", "tb+20"],
    abilities: ["fear", "stun"],
  },
  {
    d100: [91],
    monster: "Wyrm",
    type: "normal",
    av: 70,
    def: 6,
    dmg: 4,
    hp: 40,
    table: ["p3", "tc"],
    abilities: ["fear", "attacks 2", "large"],
  },
  {
    d100: [92],
    monster: "Fire Wyrm",
    type: "normal",
    av: 75,
    def: 7,
    dmg: 4,
    hp: 42,
    table: ["p3", "tc"],
    abilities: ["fear", "attacks 2", "large", "fire"],
  },
  {
    d100: [93],
    monster: "Frost Wyrm",
    type: "normal",
    av: 75,
    def: 7,
    dmg: 4,
    hp: 45,
    table: ["p3", "tc"],
    abilities: ["fear", "attacks 2", "large", "freeze"],
  },
  {
    d100: [94],
    monster: "White Dragon",
    type: "normal",
    av: 80,
    def: 7,
    dmg: 5,
    hp: 47,
    table: ["p4", "tc+5"],
    abilities: ["fear", "attacks 2", "large", "fly"],
  },
  {
    d100: [95],
    monster: "Green Dragon",
    type: "normal",
    av: 80,
    def: 8,
    dmg: 5,
    hp: 49,
    table: ["p4", "tc+5"],
    abilities: ["fear", "attacks 2", "large", "fly", "poison"],
  },
  {
    d100: [96],
    monster: "Red Dragon",
    type: "normal",
    av: 85,
    def: 8,
    dmg: 5,
    hp: 44,
    table: ["p4", "tc+10"],
    abilities: ["fear", "attacks 2", "large", "fly", "fire"],
  },
  {
    d100: [97],
    monster: "Blue Dragon",
    type: "normal",
    av: 80,
    def: 7,
    dmg: 5,
    hp: 45,
    table: ["p4", "tc+10"],
    abilities: ["fear", "attacks 2", "large", "fly", "freeze"],
  },
  {
    d100: [98],
    monster: "Black Dragon",
    type: "normal",
    av: 85,
    def: 8,
    dmg: 5,
    hp: 47,
    table: ["p4", "tc+15"],
    abilities: ["fear", "attacks 2", "large", "fly", "dark magic"],
  },
  {
    d100: [99],
    monster: "Skeleton Dragon",
    type: "undead",
    av: 90,
    def: 9,
    dmg: 6,
    hp: 48,
    table: ["p4", "tc+15"],
    abilities: ["fear", "attacks 2", "large", "fly", "ethereal"],
  },
  {
    d100: [100],
    monster: "Golden Dragon",
    type: "normal",
    av: 90,
    def: 9,
    dmg: 6,
    hp: 50,
    table: ["p4", "tc+20"],
    abilities: ["fear", "attacks 2", "large", "fly", "fire", "stun"],
  },
];
