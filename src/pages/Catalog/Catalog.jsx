import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampersWithFilters } from "../../redux/campers/operations.js";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterComponent from "../../components/FilterComponent/FilterComponent.jsx";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampersWithFilters({ location: "", equipment: {}, vehicleType: "" }));
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <FilterComponent />
      {isLoading && null}
      {isError && <h2>Error...</h2>}
      {campers.items && campers.items.length ? (
        <CatalogList campers={campers} />
      ) : (
        <p>You don&apos;t have campers yet!</p>
      )}
    </div>
  );
};

export default Catalog;
