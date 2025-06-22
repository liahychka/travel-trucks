import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { useEffect, useState } from "react";
import { fetchCampersWithFilters } from "../../redux/campers/operations.js";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterComponent from "../../components/FilterComponent/FilterComponent.jsx";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const [filters, setFilters] = useState({
    location: "",
    equipment: {
      ac: false,
      kitchen: false,
      tv: false,
      bathroom: false,
      automatic: false,
    },
    vehicleType: "",
  });

  useEffect(() => {
    dispatch(fetchCampersWithFilters(filters));
  }, []);

  const handleSearch = () => {
    dispatch(fetchCampersWithFilters(filters));
  };

  const camperList = campers?.items || [];

  return (
    <div className={css.catalog}>
      <FilterComponent
        filters={filters}
        setFilters={setFilters}
        onSearch={handleSearch}
      />
      {isLoading && <p>Loading...</p>}
      {isError && <h2>Error...</h2>}
      {camperList.length > 0 ? (
        <CatalogList campers={camperList} />
      ) : (
        <p>No campers found</p>
      )}
    </div>
  );
};

export default Catalog;
