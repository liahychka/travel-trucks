import css from "./CampersDetailsPage.module.css";
import { useParams } from "react-router-dom";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import FeaturesCampers from "../../components/FeaturesCampers/FeaturesCampers";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors.js";

const CampersDetailsPage = () => {
  const { id } = useParams();

  const camper = useSelector((state) => selectCamperById(state, id));

  if (!camper) {
    return <h2>Camper not found</h2>;
  }

  return (
    <div className={css.detailsContainer}>
      <CatalogItem
        name={camper.name}
        rating={camper.rating}
        location={camper.location}
        price={camper.price}
        description={camper.description}
        gallery={camper.gallery}
      />

          <div>
        <h4>Features</h4>
        <FeaturesCampers
            transmission={camper.transmission}
            engine={camper.engine}
            kitchen={camper.kitchen ? "kitchen" : null}
            AC={camper.AC ? "AC" : null}
             water={camper.water ? "water" : null}
            gas={camper.gas ? "gas" : null}
            microwave={camper.microwave ? "microwave" : null}
            refrigerator={camper.refrigerator ? "refrigerator" : null}
            radio={camper.radio ? "radio" : null}
            TV={camper.TV ? "TV" : null}
            bathroom={camper.bathroom ? "bathroom" : null}
                  consumption={camper.consumption}
                  tank={camper.tank}
                  height={camper.height}
                  width={camper.width}
                  length={camper.length}
                  form={camper.form}
        />
      </div>
    </div>
  );
};

export default CampersDetailsPage;
