import css from "./FeaturesCampers.module.css";
import icons from "../icons/icons.svg";

const FeaturesCampers = ({
  form, length, width, height, tank, consumption, 
  water, gas, microwave, refrigerator, radio, TV, 
  kitchen, bathroom, AC, engine, transmission
}) => {
  return (
    <div className={css.boxforFeatures}>
      <ul>
        <li className={css.item}>
          {water && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-water`} />
              </svg>
              {water}
            </p>
          )}
          {gas && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-gas`} />
              </svg>
              {gas}
            </p>
          )}
          {microwave && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-microwave`} />
              </svg>
              {microwave}
            </p>
          )}
          {refrigerator && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-refrigerator`} />
              </svg>
              {refrigerator}
            </p>
          )}
          {radio && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-radio`} />
              </svg>
              {radio}
            </p>
          )}
          {TV && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-tv`} />
              </svg>
              {TV}
            </p>
          )}
          {kitchen && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-kitchen`} />
              </svg>
              {kitchen}
            </p>
          )}
          {bathroom && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-bathroom`} />
              </svg>
              {bathroom}
            </p>
          )}
          {AC && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-ac`} />
              </svg>
              {AC}
            </p>
          )}
          {engine && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-petrol`} />
              </svg>
              {engine}
            </p>
          )}
          {transmission && (
            <p className={css.iconBox}>
              <svg width="20" height="20">
                <use href={`${icons}#icon-automatic`} />
              </svg>
              {transmission}
            </p>
          )}
        </li>
        <h3 className={css.titleVehicle}>Vehicle details</h3>
        <li className={css.itemDetails}>
          <p className={css.detailsBox}> 
            <span>Form</span>
            <span>{form}</span>
          </p>
          <p className={css.detailsBox}> 
            <span>Consumption</span>
            <span>{consumption}</span>
          </p>
          <p className={css.detailsBox}> 
            <span>Tank</span>
            <span>{tank}</span>
          </p>
          <p className={css.detailsBox}> 
            <span>Length</span>
            <span>{height}</span>
          </p>
          <p className={css.detailsBox}> 
            <span>Width</span>
            <span>{width}</span>
          </p>
          <p className={css.detailsBox}> 
            <span>Length</span>
            <span>{length}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesCampers;
