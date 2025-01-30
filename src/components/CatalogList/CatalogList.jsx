import { useState } from "react";
import { NavLink } from "react-router-dom";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import FeaturesCampers from "../FeaturesCampers/FeaturesCampers.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
import css from "./CatalogList.module.css";

const ITEMS_PER_PAGE = 4;

const CatalogList = ({ campers }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const filteredCampers = campers.items || []; // Усі кемпери після фільтрації
  const displayedCampers = filteredCampers.slice(0, visibleCount); // Пагінація для відображених кемперів

  return (
    <div>
      <ul>
        {displayedCampers.map((camper) => (
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
              bathroom={camper.bathroom ? "bathroom" : null}
              TV={camper.TV ? "TV" : null}
            />
            <NavLink to={`/catalog/${camper.id}`} className={css.btnShowMore}>
              Show More
            </NavLink>
          </li>
        ))}
      </ul>
      {visibleCount < filteredCampers.length && (
        <LoadMore handleLoadMoreClick={handleLoadMore} />
      )}
    </div>
  );
};

export default CatalogList;
