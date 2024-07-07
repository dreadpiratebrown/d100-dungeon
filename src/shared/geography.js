export const geography = [
  {
    d100: [1],
    name: "Giant Ball Trap",
    component: "giant_ball_trap",
    desc: "Part of the dungeon wall has been rigged to drop down into the floor and release a huge stone ball that will roll itself towards anyone entering the area and crush them.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps", "aware", "lucky"],
      failure: ["belt", "hp-6"],
    },
  },
  {
    d100: [2],
    name: "Poisonous Gas Trap",
    component: "poisonous_gas_trap",
    desc: "A vapour of green poisonous gas has been set to billow out from hidden slots in the dungeon floor.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["traps", "aware", "lucky"],
      failure: ["time+1", "hp-3"],
    },
  },
  {
    d100: [3],
    name: "Pendulum Trap",
    component: "pendulum_trap",
    desc: "Several large axes have been suspended above, and rigged to swing out from hidden slots in the dungeon wall.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["traps", "aware", "lucky"],
      failure: ["hp-4"],
    },
  },
  {
    d100: [4],
    name: "Snake Pit Trap",
    component: "snake_pit_trap",
    desc: "Part of the dunegon floor has been rigged to fall away, dropping anyone foolish enough into a deep pit where a giant snake waits for its next meal.",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["traps", "aware", "lucky"],
      failure: ["belt", "hp-2", "time+1", "encounter[73]"],
    },
  },
  {
    d100: [5],
    name: "Spiked Pit Trap",
    component: "spiked_pit_trap",
    desc: "Part of the dunegon floor has been rigged to fall away, dropping anyone foolish enough into a deep pit furnished with razor sharp spikes.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["traps", "aware", "lucky"],
      failure: ["time+1", "hp-2", "belt", "spikes"],
    },
  },
  {
    d100: [6],
    name: "Pit Trap",
    desc: "Part of the dunegon floor has been rigged to fall away, dropping anyone foolish enough into a deep pit.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps", "aware", "lucky"],
      failure: ["time+1", "hp-2", "belt"],
    },
  },
  {
    d100: [7],
    name: "Cave In Trap",
    desc: "Part of the ceiling has been rigged to collapse, showering the adventurer with rocks and debris.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["traps", "aware", "lucky"],
      failure: ["time+1", "hp-2", "belt"],
    },
  },
  {
    d100: [8],
    name: "Spear Trap",
    desc: "Spears have been set to shoot out from hidden holes in the dungeon wall.",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["traps", "aware", "lucky"],
      failure: ["hp-2"],
    },
  },
  {
    d100: [9],
    name: "Fire Trap",
    desc: "A short burst of scorching hot flame has been set to shoot out from hidden slots in the dungeone wall.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps", "aware", "lucky"],
      failure: ["hp-1"],
    },
  },
  {
    d100: [10],
    name: "Crossfire Trap",
    desc: "Arrows have been set to shoot out from hidden holes in the dungeon wall.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["traps", "aware", "lucky"],
      failure: ["hp-1"],
    },
  },
  {
    d100: [11],
    name: "Cage Trap",
    desc: "A huge cage, hidden from view, has been suspended from the ceiling high above and will drop down over anyone walking by.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["traps", "aware"],
      failure: ["trapped", "lift_cage"],
    },
  },
  {
    d100: [12, 13, 14, 15],
    name: "Barrels",
    desc: "The area contains a number of barrels. Search them?",
    roll: [
      {
        d10: [1, 2, 3],
        desc: "The last barrel opened is hiding a giant spider. It uncurls its legs and attacks.",
        result: ["time+1", "encounter[26]"],
      },
      {
        d10: [4, 5],
        desc: "All of the barrels are empty",
        result: ["time+1"],
      },
      {
        d10: [6, 7],
        desc: "most of the barrels are empty, but a few have something of interest.",
        result: ["time+1", "neededx2"],
      },
      {
        d10: [8, 9],
        desc: "All but one barrel is empty.",
        result: ["time+1", "items"],
      },
      {
        d10: [10],
        desc: "Amongst some worthless clothes in one barrel is a weapon.",
        result: ["time+1", "weapons"],
      },
    ],
  },
  {
    d100: [16],
    name: "Spider's Webs",
    desc: "The area is covered by thick sticky strands of a giant spider's web, which makes movement through the area time consuming and difficult. Casting a successful Fire Blast or Fire Ball spell/scroll in the area will destroy the webs.",
    effect: ["webs"],
  },
  {
    d100: [17],
    name: "Moss",
    desc: "The dungeon floor is completely covered in a damp, spongy moss.",
    persist: true,
    roll: [
      {
        d10: [1, 2],
        name: "Pools",
        desc: "The moss has grown across deep pools of water which break through into the dungeon floor, the edges of which are very sharp. Each step taken there is a danger the adventurer may fall in and cut themselves on the rock.",
        test: {
          attr: "dex",
          mod: -10,
          ability: ["agility", "lucky"],
          success: "time+1",
          failure: ["time+2", "hp-2"],
        },
      },
      {
        d10: [3, 4],
        name: "Slipper",
        desc: "The moss is very slippery, making movement through the section difficult.",
        test: {
          attr: "dex",
          mod: -10,
          ability: ["agility", "lucky"],
          success: "time+1",
          failure: ["time+2"],
        },
      },
      {
        d10: [5, 6, 7, 8, 9, 10],
        name: "Boulders",
        desc: "The moss hides small boulders and rubble below its surface, and the adventurer is constantly stumbling, making movement through the area uncomfortable.",
        test: {
          attr: "dex",
          mod: 0,
          ability: ["agility", "lucky"],
          failure: ["time+1"],
        },
      },
    ],
  },
  {
    d100: [18],
    name: "Rope Bridge",
    desc: "A huge area of the dungeon floor has at one time collapsed, leaving behind a deep void running from the top right hand corner to the bottom left hand corner of this area. At some time someone, or something, has erected a crude rope bridge that now provides the only way across this bottomless gorge.",
    persist: true,
    test: {
      attr: "dex",
      mod: -5,
      ability: ["agility", "lucky"],
      failure: ["hp-10"],
    },
  },
  {
    d100: [19, 20, 21, 22],
    name: "Trapped Chest",
    desc: "A large wooden chest banded with golden trim sits proudly waiting to be opened. The adventurer may try and open the chest by making a TRAPPED CHEST test as many times as they wish until it is opened.",
    test: {
      attr: "dex",
      mod: -20,
      ability: ["traps", "lucky"],
      success: "tc+10",
      failure: ["time+1", "hp-5"],
    },
  },
  {
    d100: [23, 24],
    name: "Lever",
    desc: "In a secluded part of the dungeon the adventurer find a lever protruding from the wall.",
    roll: [
      {
        d10: [1, 2],
        desc: "Something bad happens.",
        effect: "curse",
      },
      {
        d10: [3, 4, 5],
        desc: "Nothing seems to happen.",
      },
      {
        d10: [6, 7, 8, 9, 10],
        desc: "After it is pulled a far-off rumble can be heard.",
        effect: "levers+1",
      },
    ],
  },
  {
    d100: [25],
    name: "Lava",
    desc: "Pools of glowing hot lava gurgle and bubble all around, and every few seconds pieces of rock explode into fragments, sending hot lava in all directions.",
    persist: true,
    test: {
      attr: "dex",
      mod: -10,
      ability: ["agility", "lucky"],
      success: "hp-1",
      failure: ["hp-3"],
    },
  },
  {
    d100: [26, 27, 28, 29],
    name: "Locked Chest",
    desc: "A large wooden chest banded with golden trim sits proudly waiting to be opened. If the adventurer does not have the key, they may attempt to open the chest as many times as they wish until it is opened as long as they have a pick.",
    uses: "keys",
    test: {
      attr: "dex",
      mod: -20,
      ability: ["locks", "lucky"],
      success: "tc",
      failure: ["picks-1", "time+1"],
    },
  },
  {
    d100: [30],
    name: "Rope Bridge",
    desc: "A huge area of the dungeon floor has at one time collapsed, leaving behind a deep void running from the top left hand corner to the bottom right hand corner of this area. At some time someone, or something, has erected a crude rope bridge that now provides the only way across this bottomless gorge.",
    persist: true,
    test: {
      attr: "dex",
      mod: -5,
      ability: ["agility", "lucky"],
      failure: ["hp-10"],
    },
  },
  {
    d100: [31],
    name: "Bottomless Pit",
    desc: "A deep pit, probably once a mine shaft, blocks the way to all other exits. The pit seems to go on forever, which suggests it's a waste of time trying to descend. The only way to leave this area other than the way you came is to jump the pit.",
    persist: true,
    test: {
      attr: "dex",
      mod: -10,
      ability: ["agility", "lucky"],
      failure: ["death"],
    },
  },
  {
    d100: [32],
    name: "Cave In",
    desc: "The entire ceiling begins to cave in, luckily you manage to find a spot that is protected from the falling rock and wait it out. As the dust settles it is clear the entire area is now buried in rock and all the exits are blocked. After some considerable time you manage to retrace your steps and return to the area you were last in.",
    persist: true,
    effect: ["time+3", "blocked"],
  },
  {
    d100: [33, 34, 35],
    name: "Barrels",
    desc: "The area contains a number of barrels. Search them?",
    roll: [
      {
        d10: [1, 2, 3],
        desc: "The last barrel opened is hiding a giant spider. It uncurls its legs and attacks.",
        result: ["time+1", "encounter[26]"],
      },
      {
        d10: [4, 5],
        desc: "All of the barrels are empty",
        result: ["time+1"],
      },
      {
        d10: [6, 7],
        desc: "most of the barrels are empty, but a few have something of interest.",
        result: ["time+1", "neededx2"],
      },
      {
        d10: [8, 9],
        desc: "Amongst some worthless clothes in one barrel is a weapon.",
        result: ["time+1", "weapons"],
      },
      {
        d10: [10],
        desc: "At the bottom of a large barrel is some armor.",
        result: ["time+1", "armor"],
      },
    ],
  },
  {
    d100: [36, 37, 38, 39, 40],
    name: "Lever",
    desc: "In a secluded part of the dungeon you find a lever protruding from the wall.",
    roll: [
      {
        d10: [1],
        desc: "Something bad happens.",
        effect: "curse",
      },
      {
        d10: [2, 3, 4],
        desc: "Nothing seems to happen.",
      },
      {
        d10: [5, 6, 7, 8, 9, 10],
        desc: "After it is pulled a far-off rumble can be heard.",
        effect: "levers+1",
      },
    ],
  },
  {
    d100: [41],
    name: "River",
    desc: "A fast flowing river is running from the top left hand corner to the bottom right hand corner of this area and will need to be crossed to proceed through any exits on the other side.",
    persist: true,
    test: {
      attr: "str",
      mod: -10,
      ability: ["strong"],
      failure: ["time+1", "hp-2"],
    },
  },
  {
    d100: [42],
    name: "Trapped Chest",
    desc: "A large wooden chest banded with silver trim sits proudly waiting to be opened. The adventurer may try and open the chest by making a TRAPPED CHEST test as many times as they wish until it is opened.",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["traps", "lucky"],
      success: "tb+10",
      failure: ["time+1", "hp-4"],
    },
  },
  {
    d100: [43],
    name: "Locked Chest",
    desc: "A large wooden chest banded with silver trim sits proudly waiting to be opened. If the adventurer does not have the key, they may attempt to open the chest as many times as they wish until it is opened as long as they have a pick.",
    uses: "keys",
    test: {
      attr: "dex",
      mod: -15,
      ability: ["locks", "lucky"],
      success: "tb",
      failure: ["picks-1", "time+1"],
    },
  },
  {
    d100: [44],
    name: "River",
    desc: "A fast flowing river is running from the top right hand corner to the bottom left hand corner of this area and will need to be crossed to proceed through any exits on the other side.",
    persist: true,
    test: {
      attr: "str",
      mod: -10,
      ability: ["strong"],
      failure: ["time+1", "hp-2"],
    },
  },
  {
    d100: [45, 46, 47, 48],
    name: "Trapped Chest",
    desc: "A large wooden chest banded with iron trim sits proudly waiting to be opened. The adventurer may try and open the chest by making a TRAPPED CHEST test as many times as they wish until it is opened.",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["traps", "lucky"],
      success: "ta+10",
      failure: ["time+1", "hp-3"],
    },
  },
  {
    d100: [49],
    name: "Portcullis",
    desc: "A large iron portcullis blocks the way across the entrance to this area of the dungeon, and will need to be lifted and wedged open, or you will be forced to retreat. You may attempt to lift the portcullis as many times as you wish until it is lifted, or you give up trying.",
    effect: "blocked",
    test: {
      attr: "str",
      mod: -15,
      ability: ["strong"],
      failure: ["time+1", "hp-1"],
    },
  },
  {
    d100: [50],
    name: "Barrels",
    desc: "The area contains a number of barrels. Search them?",
    roll: [
      {
        d10: [1, 2, 3],
        desc: "The last barrel opened is hiding a giant spider. It uncurls its legs and attacks.",
        result: ["time+1", "encounter[26]"],
      },
      {
        d10: [4, 5],
        desc: "All of the barrels are empty",
        result: ["time+1"],
      },
      {
        d10: [6, 7],
        desc: "Amongst some worthless clothes in one barrel is a weapon.",
        result: ["time+1", "weapons"],
      },
      {
        d10: [8, 9],
        desc: "At the bottom of a large barrel is some armor.",
        result: ["time+1", "armor"],
      },
      {
        d10: [10],
        desc: "At the bottom of a large barrel is some treasure.",
        result: ["time+1", "ta"],
      },
    ],
  },
  {
    d100: [51],
    name: "Boulder",
    desc: "A large boulder blocks the way through this area of the dungeon, and will need to be moved, or you will be forced to retreat. You may attempt to move the boulder as many times as you wish until it is moved, or you give up trying.",
    effect: "blocked",
    test: {
      attr: "str",
      mod: -10,
      ability: ["strong"],
      failure: ["time+1", "hp-1"],
    },
  },
  {
    d100: [52, 53],
    name: "Lever",
    desc: "In a secluded part of the dungeon you find a lever protruding from the wall.",
    roll: [
      {
        d10: [1, 2, 3],
        desc: "Nothing seems to happen.",
      },
      {
        d10: [4, 5, 6, 7, 8, 9, 10],
        desc: "After it is pulled a far-off rumble can be heard.",
        effect: "levers+1",
      },
    ],
  },
  {
    d100: [54],
    name: "Crypt",
    desc: "The area is dank and foul smelling. All around are tombs which have been disturbed and still hold remains of the dead. One sarcophagus catches the eye as it is still intact. Open it?",
    roll: [
      {
        d10: [1],
        desc: "Inside a skeleton animates and rises from the tomb and then attacks.",
        result: ["time+1", "encounter[72]"],
      },
      {
        d10: [2, 3, 4],
        desc: "The tomb is empty.",
        result: ["time+1"],
      },
      {
        d10: [5, 6, 7, 8, 9, 10],
        desc: "Hidden under the bones of a long dead corpse is a treasure.",
        result: ["time+1", "ta"],
      },
    ],
  },
  {
    d100: [55, 56, 57, 58],
    name: "Locked Chest",
    desc: "A large wooden chest banded with iron trim sits proudly waiting to be opened. If the adventurer does not have the key, they may attempt to open the chest as many times as they wish until it is opened as long as they have a pick.",
    uses: "keys",
    test: {
      attr: "dex",
      mod: -10,
      ability: ["locks", "lucky"],
      success: "ta",
      failure: ["picks-1", "time+1"],
    },
  },
  {
    d100: [59],
    name: "Chasm",
    desc: "A vast chasm crosses from the top left hand corner to the bottom right hand corner of this area. It it so vast and deep it cannot be crossed and exits on the opposite side of the chasm cannot be used.",
  },
  {
    d100: [60, 61, 62],
    name: "Carved Circle",
    desc: "A large circle has been carved into the dungeon floor. Stand on it?",
    roll: [
      {
        d10: [1],
        desc: "When you step into the circle it starts to glow red.",
        result: ["curse"],
      },
      {
        d10: [2, 3],
        desc: "The circle drops and you fall into a pit.",
        result: ["belt", "time+1"],
      },
      {
        d10: [4, 5],
        desc: "As you near the circle there is a flash and a puff of smoke, and a monster appears.",
        result: ["encounter"],
      },
      {
        d10: [6, 7],
        desc: "Standing on the circle causes it to drop slightly and a distant rumble can be heard. Levers increased by 1.",
        result: ["levers+1"],
      },
      {
        d10: [8, 9, 10],
        desc: "When you step into the circle it starts to glow green.",
        result: ["boosts"],
      },
    ],
  },
  {
    d100: [63, 64],
    name: "Forge",
    desc: "This part of the dungeon was once used as a forge and workshop. Everything is a little rusty now but some of the weapons and armor that were left behind could be of some use.",
    effect: ["armor", "weapons"],
  },
  {
    d100: [65],
    name: "Chasm",
    desc: "A vast chasm crosses from the top right hand corner to the bottom left hand corner of this area. It it so vast and deep it cannot be crossed and exits on the opposite side of the chasm cannot be used.",
  },
  {
    d100: [66, 67, 68, 69],
    name: "Fountain",
    desc: "A strangely colored glowing liquid pours from holes in the wals and flows to a central fountain. A wooden cup resting on a platform nearby invites all to sample its delights. Drink?",
    roll: [
      {
        d10: [1, 2],
        desc: "The liquid is foul tasting and you feel ill.",
        result: ["curse"],
      },
      {
        d10: [3, 4, 5, 6],
        desc: "The liquid is refreshing but nothing else happens.",
        result: [""],
      },
      {
        d10: [7, 8, 9, 10],
        desc: "The liquid tastes sweet and you drink greedily.",
        result: ["boosts"],
      },
    ],
  },
  {
    d100: [70],
    name: "Tree",
    desc: "Rooted in the center of the dungeon floor is an enormous tree with long spreading branches and bright green leaves. Beautiful white flowers grow from most branches and they project a soft yellow glow that pulsates as you move. Pick a flower?",
    roll: [
      {
        d10: [1],
        desc: "When the flower is taken its branch dies. Moments later, the entire tree has withered and died.",
        result: ["fate-1"],
      },
      {
        d10: [2],
        desc: "You recoil in pain as it burns to the touch.",
        result: ["hp-3"],
      },
      {
        d10: [3],
        desc: "After the flower is picked it turns black.",
        result: ["item(Black Flower 5gp)"],
      },
      {
        d10: [4, 5, 6],
        desc: "The flower glows brightly and emits a powerful light. For the remainder of the quest you do not spend oil when instructed by the time track.",
        result: ["item(Glowing White Flower 5gp)", "oil_off"],
      },
      {
        d10: [7, 8, 9, 10],
        desc: 'When the flower is taken its petals fall away and its bud turns to crystal. You have discovered a "Crystal Tree", grown by powerful wizards to provide arcane crystals used to power magical artefacts. The tree grows and stores energy, which is passed to a flower when it is picked.',
        result: ["item(Crystal Flower 300gp)"],
      },
    ],
  },
  {
    d100: [71],
    name: "Mushrooms",
    desc: "The whole area is home to some strange looking mushrooms. They are growing everywhere, and as you move through them their stalks twist and turn trying to get close. Eat some?",
    roll: [
      {
        d10: [1, 2],
        desc: "They taste foul and make you very ill.",
        result: ["curse"],
      },
      {
        d10: [3, 4],
        desc: "They have an unpleasant flavor.",
        result: ["curse+20"],
      },
      {
        d10: [5, 6],
        desc: "The mushrooms are pleasant but nothing else happens.",
        result: [""],
      },
      {
        d10: [7, 8],
        desc: "The mushrooms are nourishing and you gather enough for some meals.",
        result: ["food+2"],
      },
      {
        d10: [9, 10],
        desc: "The mushrooms taste wonderful and you feel overwhelmed.",
        result: ["boosts"],
      },
    ],
  },
  {
    d100: [72, 73, 74],
    name: "Barrels",
    desc: "The area contains a number of barrels. Search them?",
    roll: [
      {
        d10: [1, 2, 3],
        desc: "The last barrel opened is hiding a giant spider. It uncurls its legs and attacks.",
        result: ["time+1", "encounter[26]"],
      },
      {
        d10: [4, 5],
        desc: "All of the barrels are empty",
        result: ["time+1"],
      },
      {
        d10: [6, 7],
        desc: "At the bottom of a large barrel is some armor.",
        result: ["time+1", "armor"],
      },
      {
        d10: [8, 9],
        desc: "At the bottom of a large barrel is a treasure.",
        result: ["time+1", "ta"],
      },
      {
        d10: [10],
        desc: "At the bottom of a large barrel is a treasure.",
        result: ["time+1", "tb"],
      },
    ],
  },
  {
    d100: [75, 76, 77],
    name: "Lever",
    desc: "In a secluded part of the dungeon you find a lever protruding from the wall.",
    roll: [
      {
        d10: [1, 2],
        desc: "Nothing seems to happen.",
      },
      {
        d10: [3, 4, 5, 6, 7, 8, 9, 10],
        desc: "After it is pulled a far-off rumble can be heard.",
        effect: "levers+1",
      },
    ],
  },
  {
    d100: [78],
    name: "Locked Chest",
    desc: "A large wooden chest banded with wooden trim sits proudly waiting to be opened. If the adventurer does not have the key, they may attempt to open the chest as many times as they wish until it is opened as long as they have a pick.",
    uses: "keys",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["locks", "lucky"],
      success: "ta-10",
      failure: ["picks-1", "time+1"],
    },
  },
  {
    d100: [79],
    name: "Shrine",
    desc: "A magnificent shrine stands alone and offers a place of worship. Pray to your deity?",
    roll: [
      {
        d10: [1, 2],
        desc: "After some time something appears not quite right.",
        result: ["time+1", "curse"],
      },
      {
        d10: [3, 4, 5],
        desc: "Nothing seems to happen.",
        result: ["time+1"],
      },
      {
        d10: [6, 7, 8, 9, 10],
        desc: "A statue of a god glows brightly.",
        result: ["time+1", "boosts"],
      },
    ],
  },
  {
    d100: [80],
    name: "Trapped Chest",
    desc: "A large wooden chest banded with wooden trim sits proudly waiting to be opened. The adventurer may try and open the chest by making a TRAPPED CHEST test as many times as they wish until it is opened.",
    test: {
      attr: "dex",
      mod: -5,
      ability: ["traps", "lucky"],
      success: "ta",
      failure: ["time+1", "hp-2"],
    },
  },
  {
    d100: [81],
    name: "Altar",
    desc: "An altar has been set out for sacrificial purpose. Pray to your deity?",
    roll: [
      {
        d10: [1],
        desc: "After some time something appears not quite right.",
        result: ["time+1", "curse"],
      },
      {
        d10: [2, 3, 4],
        desc: "Nothing seems to happen.",
        result: ["time+1"],
      },
      {
        d10: [5, 6, 7, 8, 9, 10],
        desc: "A large statue of a god attached to the shrine glows brightly.",
        result: ["time+1", "boosts"],
      },
    ],
  },
  {
    d100: [82, 83],
    name: "Treasure Hunter",
    desc: "You come across a fellow treasure hunter who is just leaving the dungeon. After some time chatting about conquests, he offers to sell some of his items.",
    effect: ["neededx5"],
  },
  {
    d100: [84, 85, 86, 87],
    name: "Lever",
    desc: "In a secluded part of the dungeon you find a lever protruding from the wall.",
    roll: [
      {
        d10: [1],
        desc: "Nothing seems to happen.",
      },
      {
        d10: [2, 3, 4, 5, 6, 7, 8, 9, 10],
        desc: "After it is pulled a far-off rumble can be heard.",
        effect: "levers+1",
      },
    ],
  },
  {
    d100: [88, 90],
    name: "Stairs",
    desc: "The chamber contains a large staircase leading down to another part of the dungeon.",
  },
  {
    d100: [91, 92],
    name: "Locked Chest",
    desc: "A large wooden chest sits proudly waiting to be opened. If the adventurer does not have the key, they may attempt to open the chest as many times as they wish until it is opened as long as they have a pick.",
    uses: "keys",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["locks", "lucky"],
      success: "w",
      failure: ["picks-1", "time+1"],
    },
  },
  {
    d100: [93, 94, 95],
    name: "Trapped Chest",
    desc: "A large wooden chest sits proudly waiting to be opened. The adventurer may try and open the chest by making a TRAPPED CHEST test as many times as they wish until it is opened.",
    test: {
      attr: "dex",
      mod: 0,
      ability: ["traps", "lucky"],
      success: "w+10",
      failure: ["time+1", "hp-1"],
    },
  },
  {
    d100: [96, 97],
    name: "Grate",
    desc: "Recessed in the floor is a small grate and after a quick search you find it is covering a narrow pit filled with muck. Something buried in the dirt catches the eye.",
    test: {
      attr: "str",
      mod: 0,
      ability: ["strong"],
      success: "roll",
      failure: "time+1",
    },
    roll: [
      {
        d10: [1, 2, 3, 4],
        desc: "It was nothing of interest",
        result: [""],
      },
      {
        d10: [5, 6, 7, 8],
        desc: "It's just an item.",
        result: ["item"],
      },
      {
        d10: [9, 10],
        desc: "It's a treasure.",
        result: ["ta"],
      },
    ],
  },
  {
    d100: [98],
    name: "Treasure Trove",
    desc: "You stumble into an area filled with treasures.",
    effect: ["gold[d100x5]", "ta"],
  },
  {
    d100: [99],
    name: "Treasure Trove",
    desc: "You stumble into an area filled with treasures.",
    effect: ["gold[d100x10]", "tb||tax2"],
  },
  {
    d100: [100],
    name: "Treasure Trove",
    desc: "You stumble into an area filled with treasures.",
    effect: ["gold[d100x20]", "tc||tbx2||tax3"],
  },
];