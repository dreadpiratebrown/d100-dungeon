export const useQuestsStore = (set) => ({
  completedQuests: [1, 2],
  failedQuests: [],
  currentQuest: {
    d100: [],
    name: "",
    modifier: 0,
    success: {},
    failure: {},
    description: "",
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
      },
    });
  },
});
