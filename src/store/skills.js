export const useSkillsStore = (set) => ({
  agility: {
    score: 0,
    attuned: false,
  },
  aware: {
    score: 0,
    attuned: false,
  },
  bravery: {
    score: 0,
    attuned: false,
  },
  dodge: {
    score: 0,
    attuned: false,
  },
  escape: {
    score: 0,
    attuned: false,
  },
  locks: {
    score: 0,
    attuned: false,
  },
  lucky: {
    score: 0,
    attuned: false,
  },
  magic: {
    score: 0,
    attuned: false,
  },
  strong: {
    score: 0,
    attuned: false,
  },
  traps: {
    score: 0,
    attuned: false,
  },
  setAgility: (value) =>
    set((state) => ({
      agility: {
        ...state.agility,
        score: parseInt(state.agility.score) + parseInt(value),
      },
    })),
  setAgilityAttuned: (value) =>
    set((state) => ({ agility: { ...state.agility, attuned: value } })),
  setAware: (value) =>
    set((state) => ({
      aware: {
        ...state.aware,
        score: parseInt(state.aware.score) + parseInt(value),
      },
    })),
  setAwareAttuned: (value) =>
    set((state) => ({ aware: { ...state.aware, attuned: value } })),
  setBravery: (value) =>
    set((state) => ({
      bravery: {
        ...state.bravery,
        score: parseInt(state.bravery.score) + parseInt(value),
      },
    })),
  setBraveryAttuned: (value) =>
    set((state) => ({ bravery: { ...state.bravery, attuned: value } })),
  setDodge: (value) =>
    set((state) => ({
      dodge: {
        ...state.dodge,
        score: parseInt(state.dodge.score) + parseInt(value),
      },
    })),
  setDodgeAttuned: (value) =>
    set((state) => ({ dodge: { ...state.dodge, attuned: value } })),
  setEscape: (value) =>
    set((state) => ({
      escape: {
        ...state.escape,
        score: parseInt(state.escape.score) + parseInt(value),
      },
    })),
  setEscapeAttuned: (value) =>
    set((state) => ({ escape: { ...state.escape, attuned: value } })),
  setLocks: (value) =>
    set((state) => ({
      locks: {
        ...state.locks,
        score: parseInt(state.locks.score) + parseInt(value),
      },
    })),
  setLocksAttuned: (value) =>
    set((state) => ({ locks: { ...state.locks, attuned: value } })),
  setLucky: (value) =>
    set((state) => ({
      lucky: {
        ...state.lucky,
        score: parseInt(state.lucky.score) + parseInt(value),
      },
    })),
  setLuckyAttuned: (value) =>
    set((state) => ({ lucky: { ...state.lucky, attuned: value } })),
  setMagic: (value) =>
    set((state) => ({
      magic: {
        ...state.magic,
        score: parseInt(state.magic.score) + parseInt(value),
      },
    })),
  setMagicAttuned: (value) =>
    set((state) => ({ magic: { ...state.magic, attuned: value } })),
  setStrong: (value) =>
    set((state) => ({
      strong: {
        ...state.strong,
        score: parseInt(state.strong.score) + parseInt(value),
      },
    })),
  setStrongAttuned: (value) =>
    set((state) => ({ strong: { ...state.strong, attuned: value } })),
  setTraps: (value) =>
    set((state) => ({
      traps: {
        ...state.traps,
        score: parseInt(state.traps.score) + parseInt(value),
      },
    })),
  setTrapsAttuned: (value) =>
    set((state) => ({ traps: { ...state.traps, attuned: value } })),
  resetSkills: () => {
    set({
      agility: {
        score: 0,
        attuned: false,
      },
      aware: {
        score: 0,
        attuned: false,
      },
      bravery: {
        score: 0,
        attuned: false,
      },
      dodge: {
        score: 0,
        attuned: false,
      },
      escape: {
        score: 0,
        attuned: false,
      },
      locks: {
        score: 0,
        attuned: false,
      },
      lucky: {
        score: 0,
        attuned: false,
      },
      magic: {
        score: 0,
        attuned: false,
      },
      strong: {
        score: 0,
        attuned: false,
      },
      traps: {
        score: 0,
        attuned: false,
      },
    });
  },
});
