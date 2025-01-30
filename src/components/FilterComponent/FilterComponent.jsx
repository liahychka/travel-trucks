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
    <div>
      <h3>Filters</h3>
      
      <div>
        <label>Location</label>
        <input 
          type="text" 
          value={location}
          onChange={handleLocationChange}
          placeholder="Search by location"
        />
      </div>

      <h3>Vehicle equipment</h3>
      <ul>
        <li>
          <input 
            type="checkbox" 
            name="ac"
            checked={equipment.ac}
            onChange={handleEquipmentChange}
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-ac`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            name="kitchen"
            checked={equipment.kitchen}
            onChange={handleEquipmentChange} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-kitchen`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            name="tv"
            checked={equipment.tv}
            onChange={handleEquipmentChange} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-tv`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            name="bathroom"
            checked={equipment.bathroom}
            onChange={handleEquipmentChange} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-bathroom`} />
          </svg>
              </li>
              <li>
          <input 
            type="checkbox" 
            name="automatic"
            checked={equipment.automatic}
            onChange={handleEquipmentChange} 
          />
        <svg width="32" height="32">
            <use href={`${icons}#icon-automatic`} />
          </svg>
        </li>
      </ul>

      <h3>Vehicle type</h3>
      <ul>
        <li>
          <input 
            type="radio" 
            name="vehicleType" 
            value="panelTruck" 
            checked={vehicleType === "panelTruck"}
            onChange={handleVehicleTypeChange}
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-van`} />
          </svg>
        </li>
        <li>
          <input 
            type="radio" 
            name="vehicleType" 
            value="alcove" 
            checked={vehicleType === "alcove"}
            onChange={handleVehicleTypeChange}
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-alcove`} />
          </svg>
        </li>
        <li>
          <input 
            type="radio" 
            name="vehicleType" 
            value="fullyIntegrated" 
            checked={vehicleType === "fullyIntegrated"}
            onChange={handleVehicleTypeChange}
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-fullyIntegrated`} />
          </svg>
        </li>
      </ul>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterComponent;
