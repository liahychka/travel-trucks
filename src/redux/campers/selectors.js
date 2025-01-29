export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loadning;
export const selectError = (state) => state.campers.error;
export const selectCamperById = (state, id) => {
  return state.campers.items.items.find((camper) => camper.id === id);
};
