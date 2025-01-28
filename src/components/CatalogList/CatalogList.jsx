import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import FeaturesCampers from "../FeaturesCampers/FeaturesCampers.jsx";

const CatalogList = ({ campers }) => {
  return (
    <div>
      <ul>
        {campers.map((camper) => (
          <CatalogItem
            key={camper.id}
            name={camper.name}
            location={camper.location}
            price={camper.price}
            
          />
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
