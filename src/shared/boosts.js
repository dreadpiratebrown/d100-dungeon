export const boosts = [
  {
    d100: [1, 2, 3, 4, 5],
    name: "Stronger",
    desc: "A surge of power flows through your body.",
    effect: "str+5",
  },
  {
    d100: [6, 7, 8, 9, 10],
    name: "Faster",
    desc: "A feeling overwhelms you with vigilance.",
    effect: "dex+5",
  },
  {
    d100: [11, 12, 13, 14, 15],
    name: "Wisdom",
    desc: "Your thoughts become clearer.",
    effect: "int+5",
  },
  {
    d100: [16, 17, 18, 19, 20],
    name: "Toughness",
    desc: "Your skin thickens and becomes more resilient.",
    effect: "def+1",
  },
  {
    d100: [21, 22, 23, 24, 25],
    name: "Mightier",
    desc: "A feeling of extreme power overwhelms you.",
    effect: "dmg+1",
  },
  {
    d100: [26, 27, 28, 29, 30],
    name: "Item",
    desc: "Lightning strikes the floor, after the smoke clears an item has appeared.",
    effect: "item",
  },
  {
    d100: [31, 32, 33, 34, 35],
    name: "Door Opens",
    desc: "Somewhere in the dungeon a door has been opened.",
    effect: "door",
  },
  {
    d100: [36, 37],
    name: "Heal Minor Wounds",
    desc: "Some of your wounds heal magically.",
    effect: "hp+3",
  },
  {
    d100: [38, 39],
    name: "Treat Disease",
    desc: "Remove up to 3 shaded disease pips from the disease track.",
    effect: "disease-3",
  },
  {
    d100: [40, 41],
    name: "Treat Poison",
    desc: "Remove up to 3 shaded poison pips from the poison track.",
    effect: "poison-3",
  },
  {
    d100: [42, 43],
    name: "Blessed",
    desc: "You are favoured by the gods.",
    effect: "fate+1",
  },
  {
    d100: [44, 45],
    name: "Mend",
    desc: "An item is magically restored. Choose a damaged item and remove 1 shaded pip from its damage track.",
    effect: "repair+1",
  },
  {
    d100: [46, 47],
    name: "Armour",
    desc: "Lightning strikes the floor, after the smoke clears some armor has appeared.",
    effect: "armor",
  },
  {
    d100: [48, 49],
    name: "Brawn",
    desc: "Shade 1 pip on the Str experience track, or 2 pips if the Str experience star is shaded.",
    effect: "str.exp",
  },
  {
    d100: [50, 51],
    name: "Nimbleness",
    desc: "Shade 1 pip on the Dex experience track, or 2 pips if the Dex experience star is shaded.",
    effect: "dex.exp",
  },
  {
    d100: [52, 53],
    name: "Wit",
    desc: "Shade 1 pip on the Int experience track, or 2 pips if the Int experience star is shaded.",
    effect: "int.exp",
  },
  {
    d100: [54, 55],
    name: "Adept",
    desc: "Roll 1d10 for a skill, shade 2 pips on its experience track, or 4 pips if its experience star is shaded.",
    effect: "skill.exp",
  },
  {
    d100: [56, 57],
    name: "Transportation",
    desc: "Once during the quest at the start of any turn, you may move to any area on the dungeon map.",
    effect: "teleport",
  },
  {
    d100: [58, 59],
    name: "Heal Wounds",
    desc: "Some of your wounds heal magically.",
    effect: "hp+5",
  },
  {
    d100: [60],
    name: "Lever Activated",
    desc: "Somewhere in the dungeon a lever has been activated.",
    effect: "levers+1",
  },
  {
    d100: [61],
    name: "Cleanse Poison",
    desc: "Remove up to 5 shaded poison pips frm the poison track.",
    effect: "poison-5",
  },
  {
    d100: [62],
    name: "Cleanse Disease",
    desc: "Remove up to 5 shaded disease pips from the disease track.",
    effect: "disease-5",
  },
  {
    d100: [63],
    name: "Favored",
    desc: "You are favored by the gods.",
    effect: "fate+2",
  },
  {
    d100: [64],
    name: "Repair",
    desc: "An item is magically restored. Choose a damaged item and remove up to 3 shaded pips from its damage track.",
    effect: "repair+3",
  },
  {
    d100: [65],
    name: "Weapon",
    desc: "Lightning strikes the floor, after the smoke clears a weapon has appeared.",
    effect: "weapon",
  },
  {
    d100: [66],
    name: "Brawnier",
    desc: "Shade 2 pip on the Str experience track, or 4 pips if the Str experience star is shaded.",
    effect: "str.exp",
  },
  {
    d100: [67],
    name: "Quickness",
    desc: "Shade 2 pip on the Dex experience track, or 4 pips if the Dex experience star is shaded.",
    effect: "dex.exp",
  },
  {
    d100: [68],
    name: "Wisdom",
    desc: "Shade 2 pip on the Int experience track, or 4 pips if the Int experience star is shaded.",
    effect: "int.exp",
  },
  {
    d100: [69],
    name: "Skilled",
    desc: "Roll 1d10 for a skill, shade 3 pips on its experience track, or 6 pips if its experience star is shaded.",
    effect: "skill.exp",
  },
  {
    d100: [70],
    name: "Undying",
    desc: "You are filled with an unstoppable urge to survive.",
    effect: "life+1",
  },
  {
    d100: [71],
    name: "Heal All Wounds",
    desc: "All of your wounds heal magically.",
    effect: "hp+1000",
  },
  {
    d100: [72],
    name: "Destroy Disease",
    desc: "Remove all shaded disease pips from the disease track.",
    effect: "disease-20",
  },
  {
    d100: [73],
    name: "Destroy Poison",
    desc: "Remove all shaded poison pips from the poison track.",
    effect: "poison-20",
  },
  {
    d100: [74],
    name: "Fixed",
    desc: "An item is magically restored, choose a damaged item and remove all shaded pips from its damage track.",
    effect: "repair+5",
  },
  {
    d100: [75],
    name: "Godly Benevolence",
    desc: "You are favored by the gods.",
    effect: "fate+3",
  },
  {
    d100: [76],
    name: "Riches",
    desc: "Lightning strikes the floor, after the smoke clears a treasure has appeared.",
    effect: "ta",
  },
  {
    d100: [77],
    name: "Powerful",
    desc: "Shade 3 pips on the Str experience track, or 6 pips if the Str experience star is shaded.",
    effect: "str.exp",
  },
  {
    d100: [78],
    name: "Agile",
    desc: "Shade 3 pips on the Dex experience track, or 6 pips if the Dex experience star is shaded.",
    effect: "dex.exp",
  },
  {
    d100: [79],
    name: "Aptitude",
    desc: "Shade 3 pips on the Int experience track, or 6 pips if the Int experience star is shaded.",
    effect: "int.exp",
  },
  {
    d100: [80],
    name: "Accomplished",
    desc: "Roll 1d10 for a skill, shade 4 pips on its experience track, or 8 pips if its experience star is shaded.",
    effect: "skill.exp",
  },
  {
    d100: [81],
    name: "Unfading",
    desc: "You are filled with an unstoppable urge to survive.",
    effect: "life+2",
  },
  {
    d100: [82],
    name: "Spell",
    desc: "Arcane magic etches a spell to your consciousness.",
    effect: "spell",
  },
  {
    d100: [83],
    name: "Time Rewind",
    desc: "Everything around stops deadly still.",
    effect: "time",
  },
  {
    d100: [84],
    name: "Riches",
    desc: "Lightning strikes the floor, after the smoke clears a treasure has appeared.",
    effect: "tb",
  },
  {
    d100: [85],
    name: "Mighty",
    desc: "Everything seems less of a burden to you.",
    effect: "str+2",
  },
  {
    d100: [86],
    name: "Quickening",
    desc: "Everything seems abruptly easier to you.",
    effect: "dex+2",
  },
  {
    d100: [87],
    name: "Sapience",
    desc: "A sudden awareness surges through your mind.",
    effect: "int+2",
  },
  {
    d100: [88],
    name: "Skillful",
    desc: "Roll 1d10 and gain +5 Skill Bonus to the skill rolled.",
    effect: "skill+5",
  },
  {
    d100: [89],
    name: "Almighty Blessing",
    desc: "You are favored by the gods.",
    effect: "fate+4",
  },
  {
    d100: [90],
    name: "Immortal",
    desc: "You are filled with an unstoppalbe urge to survive.",
    effect: "life+3",
  },
  {
    d100: [91],
    name: "Healthiness",
    desc: "A feeling of overwhelming stamina flows deep inside.",
    effect: "hp.primary+1",
  },
  {
    d100: [92],
    name: "Arcane Absorption",
    desc: "One of your equipped items reacts with some remnant magic in the area, first glowing softly in different colors and then bright red until it is too bright to look at. Quickly you thrust it away before it burns your skin and stand back watching it dance with arcane energy. A quiet humming noise fills the air and for a moment you can hear chanting. Then the item vibrates violently on the dungeon floor, causing a terrible noise that you are surprised hasn't drawn any unwanted attention. After a few moments it comes to an abrupt stop and rests still, while a soft white glow slowly fades away. You reach down and take up the item, feeling its energy ripple through your body. Choose any item from the adventure sheet and roll once on table L - Legendary to reveal its power.",
    effect: "item.l",
  },
  {
    d100: [93],
    name: "Time Control",
    desc: "Everything around you stops deadly still.",
    effect: "time",
  },
  {
    d100: [94],
    name: "Might",
    desc: "Everything seems less of a burden to you.",
    effect: "str+4",
  },
  {
    d100: [95],
    name: "Dextrous",
    desc: "Everything seems abruptly easier to you.",
    effect: "dex+4",
  },
  {
    d100: [96],
    name: "Mindfulness",
    desc: "A sudden awareness surges through your mind.",
    effect: "int+4",
  },
  {
    d100: [97],
    name: "Acquisition",
    desc: "Roll 1d10 and gain +10 Skill Bonus to the skill rolled.",
    effect: "skill+10",
  },
  {
    d100: [98],
    name: "Absolution",
    desc: "Warm energy tingles throughout.",
    effect: "hp.primary+2",
  },
  {
    d100: [99],
    name: "Riches",
    desc: "Lightning strikes the floor, after the smoke clears a treasure has appeared.",
    effect: "tc",
  },
  {
    d100: [100],
    name: "Divine Blessing",
    desc: "Add 2 points of primary Str, Dex, Int and HP, restore all lost HP, gaine 2 Fate and 2 Life points.",
    effect: "renew",
  },
];
