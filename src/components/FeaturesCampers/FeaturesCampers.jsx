// import css from "./FeaturesCampers.module.css"
// import icons from '../icons/icons.svg';


// const FeaturesCampers = ({
//   form, length, width, height, tank, consumption, water, gas, microwave, refrigerator, radio, TV, kitchen, bathroom, AC, engine, transmission
// }) => {

//   return (
//     <div className={css.boxforFeatures}>
//       <ul>
//         <li className={css.item}>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-water`} />
//         </svg>            
//             {water}</p>
//           <p>
          
//             {gas}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-microwave`} />
//         </svg>               
//             {microwave}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-refrigerator`} />
//         </svg>                  
//             {refrigerator}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-radio`} />
//         </svg>
//             {radio}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-tv`} />
//         </svg>
//             {TV}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-kitchen`} />
//         </svg>
//         <span>Kitchen</span>
//             {kitchen}</p>
//           <p>
//           <svg width="32" height="32">
//         <use href={`${icons}#icon-bathroom`} />
//         </svg>            
//             {bathroom}</p>
//           <p>
//             <svg width="32" height="32">
//         <use href={`${icons}#icon-ac`} />
//         </svg>      
//             {AC}</p> 
          // <p>{engine}</p>
          // <p>{transmission}</p>
          // <p>{consumption}</p>
          // <p>{tank}</p>
          // <p>{height}</p>
          // <p>{width}</p>
          // <p>{length}</p>
          // <p>{form}</p>
//         </li>
//       </ul>
//     </div>
//   );
// };


// export default FeaturesCampers;

import css from "./FeaturesCampers.module.css";
import icons from "../icons/icons.svg";

const FeaturesCampers = (props) => {
  const features = [
    { key: "water", icon: "icon-water" },
    { key: "gas", icon: "icon-gas" },
    { key: "microwave", icon: "icon-microwave" },
    { key: "refrigerator", icon: "icon-refrigerator" },
    { key: "radio", icon: "icon-radio" },
    { key: "TV", icon: "icon-tv" },
    { key: "kitchen", icon: "icon-kitchen" },
    { key: "bathroom", icon: "icon-bathroom" },
    { key: "AC", icon: "icon-ac" },
    { key: "engine", icon: "icon-engine" },
    { key: "transmission", icon: "icon-transmission" },
    { key: "tank", icon: "icon-tank" },
    { key: "consumption", icon: "icon-consumption" },
    { key: "length", icon: "icon-length" },
    { key: "width", icon: "icon-width" },
    { key: "height", icon: "icon-height" }
  ];

  return (
    <div className={css.boxforFeatures}>
      <ul>
        {features.map(({ key, icon }) =>
          props[key] ? (
            <li key={key} className={css.item}>
              <svg width="32" height="32">
                <use href={`${icons}#${icon}`} />
              </svg>
              <span>{props[key]}</span>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};

export default FeaturesCampers;
