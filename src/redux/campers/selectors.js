export const selectCamperById = (state, id) => {
  return state.campers.items?.items?.find((camper) => camper.id === id) || null;
};

export const selectCampers = (state) => {
  const { items, filters } = state.campers;

  if (!items || !items.items) return { total: 0, items: [] }; // Перевірка на наявність даних

  const filteredItems = items.items.filter((item) => {
    return (
      (!filters.location || item.location?.includes(filters.location)) &&
      (!filters.vehicleType || item.form === filters.vehicleType) &&
      (filters.hasAC ? item.AC : true) &&
      (filters.hasKitchen ? item.kitchen : true) &&
      (filters.hasTV ? item.TV : true) &&
      (filters.hasBathroom ? item.bathroom : true) &&
      (filters.isAutomatic ? item.transmission === "automatic" : true)
    );
  });

  return { ...items, items: filteredItems };
};

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
