export const useMapStore = (set) => ({
  mapTiles: [],
  locations: [],
  eventHtml: [],
  heroPosition: { left: "-9999px", top: 0 },
  addMapTile: (tile) =>
    set((state) => ({
      mapTiles: [...state.mapTiles, tile],
    })),
  addLocation: (location) =>
    set((state) => ({
      locations: [...state.locations, location],
    })),
  addEventTxt: (text) =>
    set((state) => ({
      eventHtml: [text, ...state.eventHtml],
    })),
  setHeroPosition: ({ left, top }) =>
    set((state) => ({
      heroPosition: { left: left, top: top },
    })),
  resetMap: () => {
    set({
      mapTiles: [],
      locations: [],
      eventHtml: [],
      heroPosition: { left: "-9999px", top: 0 },
    });
  },
});
