export const useMapStore = (set) => ({
  mapTiles: [],
  locations: [],
  exits: [],
  addMapTile: (tile) =>
    set((state) => ({
      mapTiles: [...state.mapTiles, tile],
    })),
  addLocation: (location) =>
    set((state) => ({
      locations: [...state.locations, location],
    })),
  addExit: (exit) =>
    set((state) => ({
      exits: [...state.exits, exit],
    })),
  resetMap: () => {
    set({
      mapTiles: [],
      locations: [],
      exits: [],
    });
  },
});
