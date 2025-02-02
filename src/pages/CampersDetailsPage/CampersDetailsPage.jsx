import css from "./CampersDetailsPage.module.css";
import { useParams } from "react-router-dom";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import { selectCamperById } from "../../redux/campers/selectors.js";
import FormBooking from "../../components/FormBooking/FormBooking.jsx";
import NavigationDetails from "../../components/NavigationDetails/NavigationDetails.jsx";
import CatalogItemDetails from "../../components/CatalogItemDetails/CatalogItemDetails.jsx";

const CampersDetailsPage = () => {
  const { id } = useParams();

  const camper = useSelector((state) => selectCamperById(state, id));

  if (!camper) {
    return <h2>Camper not found</h2>;
  }

  return (
    <div className={css.detailsContainer}>
      <div>
        <CatalogItemDetails
          name={camper.name}
          rating={camper.rating}
          location={camper.location}
          price={camper.price}
          description={camper.description}
          gallery={camper.gallery}
        />
        <NavigationDetails />
        <FormBooking />
      </div>
    </div>
  );
};

export default CampersDetailsPage;

