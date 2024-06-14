export const useEquipmentStore = (set) => ({
  weapon: {
    hands: 1,
    type: "",
    name: "",
    damage: 0,
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  head: {
    location: "Head",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  back: {
    location: "Back",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  torso: {
    location: "Torso",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  arms: {
    location: "Arms",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  hands: {
    location: "Hands",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  offHand: {
    location: "Off H",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  waist: {
    location: "Waist",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  legs: {
    location: "Legs",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  feet: {
    location: "Feet",
    name: "",
    as: "",
    gold: 0,
    fix: 0,
    itemDamage: 0,
  },
  oil: 20,
  food: 10,
  picks: 15,
  belt: [
    "Lesser Healing Potion",
    "Lesser Healing Potion",
    "Lesser Healing Potion",
    "Lesser Healing Potion",
  ],
  keys: 0,
  levers: 0,
  equipWeapon: (item, itemDamage = 0) =>
    set((state) => ({
      weapon: {
        hands: item.hands,
        type: item.type,
        name: item.name,
        damage: item.damage,
        gold: item.gold,
        fix: item.fix,
        itemDamage: itemDamage,
      },
    })),
  unequipWepon: () =>
    set((state) => ({
      weapon: {
        hands: 1,
        type: "",
        name: "",
        damage: 0,
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
    })),
  equipArmor: (item, location, itemDamage = 0) =>
    set((state) => ({
      [location]: {
        location: item.location,
        name: item.name,
        as: item.as,
        gold: item.gold,
        fix: item.fix,
        itemDamage: itemDamage,
      },
    })),
  unequipArmor: (location) =>
    set((state) => ({
      [location]: {
        location: location,
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
    })),
  setOil: (value) => set((state) => ({ oil: state.oil + value })),
  setFood: (value) => set((state) => ({ food: state.food + value })),
  setPicks: (value) => set((state) => ({ picks: state.picks + value })),
  setBelt: (item) => set((state) => ({ belt: [...state.belt, item] })),
  setKeys: (value) => set((state) => ({ keys: state.keys + value })),
  setLevers: (value) => set((state) => ({ levers: state.levers + value })),
  resetEquipment: () => {
    set({
      weapon: {
        hands: 1,
        type: "",
        name: "",
        damage: 0,
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      head: {
        location: "Head",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      back: {
        location: "Back",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      torso: {
        location: "Torso",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      arms: {
        location: "Arms",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      hands: {
        location: "Hands",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      offHand: {
        location: "Off H",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      waist: {
        location: "Waist",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      legs: {
        location: "Legs",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      feet: {
        location: "Feet",
        name: "",
        as: "",
        gold: 0,
        fix: 0,
        itemDamage: 0,
      },
      oil: 20,
      food: 10,
      picks: 15,
      belt: [
        "Lesser Healing Potion",
        "Lesser Healing Potion",
        "Lesser Healing Potion",
        "Lesser Healing Potion",
      ],
      keys: 0,
      levers: 0,
    });
  },
});
