export const useBackpackStore = (set) => ({
  itemsWithDamageTrack: [],
  itemsWithoutDamageTrack: [],
  addItemWithDamageTrack: (item) =>
    set((state) => ({
      itemsWithDamageTrack: [...state.itemsWithDamageTrack, item],
    })),
  remItemWithDamagetrack: (item) =>
    set((state) => ({
      itemsWithDamageTrack: [
        ...state.itemsWithDamageTrack.filter((i) => i.uuid !== item.uuid),
      ],
    })),
  addItemWithoutDamageTrack: (item) =>
    set((state) => ({
      itemsWithoutDamageTrack: [...state.itemsWithoutDamageTrack, item],
    })),
  resetBackpack: () => {
    set({
      itemsWithDamageTrack: [],
      itemsWithoutDamageTrack: [],
    });
  },
});
