import css from './FilterComponent.module.css';
import icons from '../icons/icons.svg';

const FilterComponent = ({ filters, setFilters, onSearch }) => {
  const { location, equipment, vehicleType } = filters;

  const handleLocationChange = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      equipment: { ...prev.equipment, [name]: checked },
    }));
  };

  const handleVehicleTypeChange = (e) => {
    setFilters((prev) => ({ ...prev, vehicleType: e.target.value }));
  };

  return (
    <div className={css.boxFilter}>
      <div className={css.divLocation}>
        <label className={css.location}>Location</label>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="City"
          className={css.input}
        />
      </div>

      <h4 className={css.nameFilter}>Filters</h4>
      <h4 className={css.vehicle}>Vehicle equipment</h4>
      <ul className={css.listVehicle}>
        {[
          { name: "ac", icon: "icon-ac", label: "AC" },
          { name: "kitchen", icon: "icon-kitchen", label: "Kitchen" },
          { name: "tv", icon: "icon-tv", label: "TV" },
          { name: "bathroom", icon: "icon-bathroom", label: "Bathroom" },
          { name: "automatic", icon: "icon-automatic", label: "Automatic" },
        ].map(({ name, icon, label }) => (
          <li key={name}
            className={`${css.itemFilter} ${equipment[name] ? css.activeItem : ""}`} >
            <label className={css.labelInput}>
              <input
                type="checkbox"
                name={name}
                checked={equipment[name]}
                onChange={handleEquipmentChange}
                className={css.hiddenCheckbox}
              />
              <svg width="32" height="32" className={equipment[name] ? css.activeIcon : ""}>
                <use href={`${icons}#${icon}`} />
              </svg>
              <span>{label}</span>
            </label>
          </li>
        ))}
      </ul>

      <h3 className={css.nameVehicleType}>Vehicle type</h3>
      <ul className={css.listVehicle}>
        {[
          { value: "panelTruck", icon: "icon-van", label: "Van" },
          { value: "alcove", icon: "icon-alcove", label: "Alcove" },
          { value: "fullyIntegrated", icon: "icon-fullyIntegrated", label: "Fully Integrated" },
        ].map(({ value, icon, label }) => (
          <li key={value}
          className={`${css.itemFilter} ${vehicleType === value ? css.activeItem : ""}`}>
            <label className={css.labelInput}>
              <input
                type="radio"
                name="vehicleType"
                value={value}
                checked={vehicleType === value}
                onChange={handleVehicleTypeChange}
                className={css.hiddenCheckbox}
              />
              <svg width="32" height="32" className={vehicleType === value ? css.activeIcon : ""}>
                <use href={`${icons}#${icon}`} />
              </svg>
              <span>{label}</span>
            </label>
          </li>
        ))}
      </ul>

      <button className={css.btnSearch} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterComponent;
