import { useState } from "react";
import { NavLink } from "react-router-dom";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import FeaturesCampers from "../FeaturesCampers/FeaturesCampers.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
import { useFavorites } from "../../FavoritesContext/FavoritesContext.jsx"; // імпортуємо хук
import css from "./CatalogList.module.css";
import icons from '../icons/icons.svg';

const ITEMS_PER_PAGE = 4;

const CatalogList = ({ campers }) => {
  const { favorites, toggleFavorite } = useFavorites(); // отримуємо список обраних та функцію для зміни
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const filteredCampers = campers.items || [];
  const displayedCampers = filteredCampers.slice(0, visibleCount);

  return (
    <div>
      <ul>
        {displayedCampers.map((camper) => (
          <li key={camper.id}>
            <span onClick={() => toggleFavorite(camper.id)}>
              <svg width="32" height="32" className={`${css.heart} ${favorites.includes(camper.id) ? css.filled : ''}`}>
                <use href={`${icons}#icon-heart`} />
              </svg>
            </span>
            <CatalogItem
              name={camper.name}
              rating={camper.rating}
              location={camper.location}
              price={camper.price}
              description={camper.description}
              gallery={camper.gallery ? [camper.gallery[0]] : []}
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
