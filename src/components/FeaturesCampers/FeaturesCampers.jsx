import css from "./FeaturesCampers.module.css"
import icons from '../icons/icons.svg';

const FeaturesCampers = ({
  form, length, width, height, tank, consumption, water, gas, microwave, refrigerator, radio, TV, kitchen, bathroom, AC, engine, transmission
}) => {
  
  return (
    <div className={css.boxforFeatures}>
      <ul>
        <li className={css.item}>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-water`} />
        </svg>            
            {water}</p>
          <p>
            {gas}</p>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-microwave`} />
        </svg>               
            {microwave}</p>
          <p>
          {refrigerator && (
            <svg width="32" height="32">
              <use href={`${icons}#icon-refrigerator`} />
            </svg>
          )}
          </p>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-radio`} />
        </svg>
            {radio}</p>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-tv`} />
        </svg>
            {TV}</p>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-kitchen`} />
        </svg>
        <span>Kitchen</span>
            {kitchen}</p>
          <p>
          <svg width="32" height="32">
        <use href={`${icons}#icon-bathroom`} />
        </svg>            
            {bathroom}</p>
          <p>
            <svg width="32" height="32">
        <use href={`${icons}#icon-ac`} />
        </svg>      
            {AC}</p> 
          <p>
            <svg width="32" height="32">
        <use href={`${icons}#icon-petrol`} />
        </svg>      
            {engine}</p>
          <p>
            <svg width="32" height="32">
        <use href={`${icons}#icon-automatic`} />
        </svg>      
            {transmission}</p>        
        </li> 
        <li>
          <h3>Vehicle details</h3>
          <p>Form {form}</p>
          <p>Consumption {consumption}</p>
          <p>Tank {tank}</p>
          <p>Length {height}</p>
          <p>Width {width}</p>
          <p>Length {length}</p>          
        </li>
      </ul>
    </div>
  );
};


export default FeaturesCampers;