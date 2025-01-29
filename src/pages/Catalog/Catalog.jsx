import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError, selectLoading } from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campers/operations.js";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import FilterComponent from "../../components/FilterComponent/FilterComponent.jsx";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const IsError = useSelector(selectError);
  

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div>
      <FilterComponent/>
      {isLoading && <h2>Loading...</h2>}
      {IsError && <h2>Error...</h2>}
      {campers.items && campers.items.length ? (
        <CatalogList campers={campers.items} />
      ) : (
        <p>You don&apos;t have campers yet!</p>
      )
      }
    </div>
  )
}

export default Catalog