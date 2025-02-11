import { useDispatch } from "react-redux";
import { useState } from "react";
import css from './FilterComponent.module.css';
import icons from '../icons/icons.svg';
import { fetchCampersWithFilters } from "../../redux/campers/operations.js";

const FilterComponent = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState({
    ac: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    automatic: false
  });
  const [vehicleType, setVehicleType] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleEquipmentChange = (e) => {
    const { name, checked } = e.target;
    setEquipment((prev) => ({ ...prev, [name]: checked }));
  };
  const handleVehicleTypeChange = (e) => setVehicleType(e.target.value);

  const handleSearch = () => {
    dispatch(fetchCampersWithFilters({ location, equipment, vehicleType }));
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
        <li className={css.itemFilter} >
        <label className={css.label}>
            <input 
            type="checkbox" 
            name="ac"
            checked={equipment.ac}
            onChange={handleEquipmentChange}
            className={css.hiddenCheckbox}
            />
            <svg width="32" height="32" className={equipment.ac ? css.activeIcon : ""}>
            <use href={`${icons}#icon-ac`} />
            </svg>
            <span>AC</span>
        </label>
        </li>
  <li className={css.itemFilter}>
    <label className={css.label}>
      <input 
        type="checkbox" 
        name="kitchen"
        checked={equipment.kitchen}
        onChange={handleEquipmentChange} 
        className={css.hiddenCheckbox} 
      />
      <svg width="32" height="32" className={equipment.kitchen ? css.activeIcon : ""}>
        <use href={`${icons}#icon-kitchen`} />
        </svg>
        <span>Kitchen</span>
    </label>
  </li>

  <li className={css.itemFilter}>
    <label className={css.label}>
      <input 
        type="checkbox" 
        name="tv"
        checked={equipment.tv}
        onChange={handleEquipmentChange} 
        className={css.hiddenCheckbox} 
      />
      <svg width="32" height="32" className={equipment.tv ? css.activeIcon : ""}>
        <use href={`${icons}#icon-tv`} />
        </svg>
       <span>TV</span>                   
    </label>
  </li>

        <li className={css.itemFilter}>
            <label className={css.label}>
            <input 
                type="checkbox" 
                name="bathroom"
                checked={equipment.bathroom}
                onChange={handleEquipmentChange} 
                className={css.hiddenCheckbox} 
            />
            
            <svg width="32" height="32" className={equipment.bathroom ? css.activeIcon : ""}>
                <use href={`${icons}#icon-bathroom`} />
                          </svg>
            <span>Bathroom</span>
            </label>
        </li>

        <li className={css.itemFilter}>
            <label className={css.label}>
            <input 
                type="checkbox" 
                name="automatic"
                checked={equipment.automatic}
                onChange={handleEquipmentChange} 
                className={css.hiddenCheckbox} 
            />
            
            <svg width="32" height="32" className={equipment.automatic ? css.activeIcon : ""}>
                <use href={`${icons}#icon-automatic`} />
                          </svg>
            <span>Automatic</span>
            </label>
        </li>
        </ul>

        <h3 className={css.nameVehicleType}>Vehicle type</h3>
        <ul className={css.listVehicle}>
        <li className={css.itemFilter}>
            <label className={css.label}>
            <input 
                type="radio" 
                name="vehicleType" 
                value="panelTruck" 
                checked={vehicleType === "panelTruck"}
                onChange={handleVehicleTypeChange}
                className={css.hiddenCheckbox} 
            />
            <svg width="32" height="32" className={vehicleType === "panelTruck" ? css.activeIcon : ""}>
                <use href={`${icons}#icon-van`} />
                          </svg>
            <span>Van</span>
            </label>
        </li>

        <li className={css.itemFilter}>
            <label className={css.label}>
            <input 
                type="radio" 
                name="vehicleType" 
                value="alcove" 
                checked={vehicleType === "alcove"}
                onChange={handleVehicleTypeChange}
                className={css.hiddenCheckbox} 
            />
            <svg width="32" height="32" className={vehicleType === "alcove" ? css.activeIcon : ""}>
                <use href={`${icons}#icon-alcove`} />
                          </svg>
            <span>Alcove</span>
            </label>
        </li>

        <li className={css.itemFilter}>
            <label className={css.label}>
            <input 
                type="radio" 
                name="vehicleType" 
                value="fullyIntegrated" 
                checked={vehicleType === "fullyIntegrated"}
                onChange={handleVehicleTypeChange}
                className={css.hiddenCheckbox} 
            />
            <svg width="32" height="32" className={vehicleType === "fullyIntegrated" ? css.activeIcon : ""}>
                <use href={`${icons}#icon-fullyIntegrated`} />
                          </svg>
            <span>Fully Integrated</span>
            </label>
        </li>
        </ul>
      <button className={css.btnSearch} onClick={handleSearch} type="button" >Search</button>
    </div>
  );
};

export default FilterComponent;
