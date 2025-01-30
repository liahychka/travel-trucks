export const selectCamperById = (state, id) => {
  return state.campers.items?.items?.find((camper) => camper.id === id) || null;
};

export const selectCampers = (state) => state.campers.items;

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
