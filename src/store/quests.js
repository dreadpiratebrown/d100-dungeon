export const useQuestsStore = (set) => ({
  completedQuests: [],
  failedQuests: [],
  currentQuest: {
    d100: [],
    name: "",
    modifier: 0,
    success: {},
    failure: {},
    description: "",
    timeTracker: 0,
    darkness: false,
  },
  addCompletedQuest: () =>
    set((state) => ({
      completedQuests: [...state.completedQuests, ...state.currentQuest.d100],
    })),
  addFailedQuest: () =>
    set((state) => ({
      failedQuests: [...state.failedQuests, ...state.currentQuest.d100],
    })),
  setCurrentQuest: (quest) =>
    set((state) => ({
      currentQuest: {
        ...state.currentQuest,
        d100: [...quest.d100],
        name: quest.name,
        modifier: quest.modifier,
        success: { ...quest.success },
        failure: { ...quest.failure },
        description: quest.description,
      },
    })),
  passTime: () => {
    set((state) => ({
      currentQuest: {
        ...state.currentQuest,
        timeTracker: state.currentQuest.timeTracker + 1,
      },
    }));
  },
  resetTime: () => {
    set((state) => ({
      currentQuest: {
        ...state.currentQuest,
        timeTracker: 0,
      },
    }));
  },
  toggleDarkness: () => {
    set((state) => ({
      currentQuest: {
        ...state.currentQuest,
        darkness: !state.currentQuest.darkness,
      },
    }));
  },
  resetQuests: () => {
    set({
      completedQuests: [],
      failedQuests: [],
      currentQuest: {
        d100: [],
        name: "",
        modifier: 0,
        success: {},
        failure: {},
        description: "",
        timeTracker: 0,
        darkness: false,
      },
    });
  },
});
