export const doors = [
  {
    d100: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 42, 43, 56, 57, 70, 71, 84, 85, 98, 99,
      100,
    ],
    code: "O",
    type: "open",
    details: "When the handle turns the door opens.",
    test: null,
  },
  {
    d100: [40, 41, 54, 55, 68, 69, 82, 83, 96, 97],
    code: "M",
    type: "magic",
    details: "The door is magically sealed and its spell must be broken..",
    test: null,
  },
  {
    d100: [30, 31],
    code: "L1",
    type: "locked",
    details: "The door has been locked with a key.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["locks"],
      failure: ["pick", "time"],
    },
  },
  {
    d100: [32, 33],
    code: "TL1",
    type: "trap locked",
    details: "The door is trapped and locked tight.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["locks", "traps"],
      failure: ["pick", "time", "hp-1"],
    },
  },
  {
    d100: [34, 35],
    code: "J1",
    type: "jammed",
    details: "The door is rusted or swollen shut and needs to be forced open.",
    test: {
      attr: "str",
      mod: 0,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [36, 37],
    code: "LV1",
    type: "lever",
    details: "The door is activated by a lever somewhere in the dungeon.",
    test: {
      attr: "str",
      mod: 0,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [38, 39],
    code: "T1",
    type: "trapped",
    details: "The door is closed and trapped.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["traps"],
      failure: ["hp-1"],
    },
  },
  {
    d100: [44, 45],
    code: "L2",
    type: "locked",
    details: "The door has been locked with a key.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["locks"],
      failure: ["pick", "time"],
    },
  },
  {
    d100: [46, 47],
    code: "TL2",
    type: "trap locked",
    details: "The door is trapped and locked tight.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["locks", "traps"],
      failure: ["pick", "time", "hp-1"],
    },
  },
  {
    d100: [48, 49],
    code: "J2",
    type: "jammed",
    details: "The door is rusted or swollen shut and needs to be forced open.",
    test: {
      attr: "str",
      mod: -5,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [50, 51],
    code: "LV2",
    type: "lever",
    details: "The door is activated by a lever somewhere in the dungeon.",
    test: {
      attr: "str",
      mod: -5,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [52, 53],
    code: "T2",
    type: "trapped",
    details: "The door is closed and trapped.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps"],
      failure: ["hp-2"],
    },
  },
  {
    d100: [58, 59],
    code: "L3",
    type: "locked",
    details: "The door has been locked with a key.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["locks"],
      failure: ["pick", "time"],
    },
  },
  {
    d100: [60, 61],
    code: "TL3",
    type: "trap locked",
    details: "The door is trapped and locked tight.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["locks", "traps"],
      failure: ["pick", "time", "hp-1"],
    },
  },
  {
    d100: [62, 63],
    code: "J3",
    type: "jammed",
    details: "The door is rusted or swollen shut and needs to be forced open.",
    test: {
      attr: "str",
      mod: -10,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [64, 65],
    code: "LV3",
    type: "lever",
    details: "The door is activated by a lever somewhere in the dungeon.",
    test: {
      attr: "str",
      mod: -10,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [66, 67],
    code: "T3",
    type: "trapped",
    details: "The door is closed and trapped.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["traps"],
      failure: ["hp-3"],
    },
  },
  {
    d100: [72, 73],
    code: "L4",
    type: "locked",
    details: "The door has been locked with a key.",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["locks"],
      failure: ["pick", "time"],
    },
  },
  {
    d100: [74, 75],
    code: "TL4",
    type: "trap locked",
    details: "The door is trapped and locked tight.",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["locks", "traps"],
      failure: ["pick", "time", "hp-1"],
    },
  },
  {
    d100: [76, 77],
    code: "J4",
    type: "jammed",
    details: "The door is rusted or swollen shut and needs to be forced open.",
    test: {
      attr: "str",
      mod: -15,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [78, 79],
    code: "LV4",
    type: "lever",
    details: "The door is activated by a lever somewhere in the dungeon.",
    test: {
      attr: "str",
      mod: -15,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [80, 81],
    code: "T4",
    type: "trapped",
    details: "The door is closed and trapped.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps"],
      failure: ["hp-4"],
    },
  },
  {
    d100: [86, 87],
    code: "L5",
    type: "locked",
    details: "The door has been locked with a key.",
    test: {
      attr: "dex",
      mod: -20,
      ability: ["locks"],
      failure: ["pick", "time"],
    },
  },
  {
    d100: [88, 89],
    code: "TL5",
    type: "trap locked",
    details: "The door is trapped and locked tight.",
    test: {
      attr: "dex",
      mod: -20,
      ability: ["locks", "traps"],
      failure: ["pick", "time", "hp-1"],
    },
  },
  {
    d100: [90, 91],
    code: "J5",
    type: "jammed",
    details: "The door is rusted or swollen shut and needs to be forced open.",
    test: {
      attr: "str",
      mod: -20,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [92, 93],
    code: "LV5",
    type: "lever",
    details: "The door is activated by a lever somewhere in the dungeon.",
    test: {
      attr: "str",
      mod: -20,
      ability: ["strong"],
      failure: ["time", "hp-1"],
    },
  },
  {
    d100: [94, 95],
    code: "T5",
    type: "trapped",
    details: "The door is closed and trapped.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps"],
      failure: ["hp-5"],
    },
  },
];
