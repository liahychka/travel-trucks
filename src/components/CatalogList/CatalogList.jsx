import { NavLink } from "react-router-dom";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import FeaturesCampers from "../FeaturesCampers/FeaturesCampers.jsx";
import css from "./CatalogList.module.css"

const CatalogList = ({ campers }) => {
  
  return (
    <div>
<ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CatalogItem
              name={camper.name}
              rating={camper.rating}
              location={camper.location}
              price={camper.price}
              description={camper.description}
            />
            <FeaturesCampers
              transmission={camper.transmission}
              engine={camper.engine}
              kitchen={camper.kitchen ? "kitchen" : null}
              AC={camper.AC ? "AC" : null}
            />
            <NavLink to='/catalog/:${id}' className={css.btnShowMore}>Show More</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
