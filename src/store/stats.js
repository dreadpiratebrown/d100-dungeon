export const useStatsStore = (set) => ({
  str: {
    primary: 0,
    adjusted: 0,
    attuned: false,
  },
  dex: {
    primary: 0,
    adjusted: 0,
    attuned: false,
  },
  int: {
    primary: 0,
    adjusted: 0,
    attuned: false,
  },
  setStrPrimary: (value) =>
    set((state) => ({ str: { ...state.str, primary: value } })),
  setStrAdjusted: (value) =>
    set((state) => ({
      str: { ...state.str, adjusted: state.str.adjusted + value },
    })),
  setStrAttuned: (value) =>
    set((state) => ({ str: { ...state.str, attuned: value } })),
  setDexPrimary: (value) =>
    set((state) => ({ dex: { ...state.dex, primary: value } })),
  setDexAdjusted: (value) =>
    set((state) => ({
      dex: { ...state.dex, adjusted: state.dex.adjusted + value },
    })),
  setDexAttuned: (value) =>
    set((state) => ({ dex: { ...state.dex, attuned: value } })),
  setIntPrimary: (value) =>
    set((state) => ({ int: { ...state.int, primary: value } })),
  setIntAdjusted: (value) =>
    set((state) => ({
      int: { ...state.int, adjusted: state.int.adjusted + value },
    })),
  setIntAttuned: (value) =>
    set((state) => ({ int: { ...state.int, attuned: value } })),
  resetStats: () => {
    set({
      str: {
        primary: 0,
        adjusted: 0,
        attuned: false,
      },
      dex: {
        primary: 0,
        adjusted: 0,
        attuned: false,
      },
      int: {
        primary: 0,
        adjusted: 0,
        attuned: false,
      },
    });
  },
});
