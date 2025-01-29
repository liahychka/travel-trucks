import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/campers/slice";
import css from './FilterComponent.module.css';
import icons from '../icons/icons.svg';
import { useState } from "react";

const FilterComponent = () => {
  const dispatch = useDispatch();

  const [filters, setLocalFilters] = useState({
    location: '',
    vehicleType: '',
    hasAC: false,
    hasKitchen: false,
    hasTV: false,
    hasBathroom: false,
    isAutomatic: false,
    isAlcove: false,
  });

  const handleFilterChange = (filterType, value) => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const applyFilters = () => {
    dispatch(setFilters(filters)); 
  };

  return (
    <div>
      <h3>Filters</h3>
      
      <div>
        <label>Location</label>
        <input 
          type="text" 
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)} 
          placeholder="Search by location"
        />
      </div>

      <h3>Vehicle equipment</h3>
      <ul>
        <li>
          <input 
            type="checkbox" 
            checked={filters.hasAC}
            onChange={(e) => handleFilterChange('hasAC', e.target.checked)} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-ac`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            checked={filters.hasKitchen}
            onChange={(e) => handleFilterChange('hasKitchen', e.target.checked)} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-kitchen`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            checked={filters.hasTV}
            onChange={(e) => handleFilterChange('hasTV', e.target.checked)} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-tv`} />
          </svg>
        </li>
        <li>
          <input 
            type="checkbox" 
            checked={filters.hasBathroom}
            onChange={(e) => handleFilterChange('hasBathroom', e.target.checked)} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-bathroom`} />
          </svg>
              </li>
              <li>
          <input 
            type="checkbox" 
            checked={filters.isAutomatic}
            onChange={(e) => handleFilterChange('isAutomatic', e.target.checked)} 
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
            value="van" 
            checked={filters.vehicleType === 'van'}
            onChange={() => handleFilterChange('vehicleType', 'van')} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-van`} />
          </svg>
        </li>
        <li>
          <input 
            type="radio" 
            name="vehicleType" 
            value="fullyIntegrated" 
            checked={filters.vehicleType === 'fullyIntegrated'}
            onChange={() => handleFilterChange('vehicleType', 'fullyIntegrated')} 
          />
          <svg width="32" height="32">
            <use href={`${icons}#icon-fullyIntegrated`} />
          </svg>
              </li>
        <li>
          <input 
            type="radio" 
            name="vehicleType" 
            value="alcove" 
            checked={filters.vehicleType === 'alcove'}
            onChange={() => handleFilterChange('vehicleType', 'alcove')} 
          />
        <svg width="32" height="32">
            <use href={`${icons}#icon-alcove`} />
          </svg>
        </li>
      </ul>

      <button onClick={applyFilters}>Search</button>
    </div>
  );
};

export default FilterComponent;
