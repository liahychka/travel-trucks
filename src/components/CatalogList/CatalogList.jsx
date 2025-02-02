import { useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";
import css from "./CatalogList.module.css";

const ITEMS_PER_PAGE = 4;

const CatalogList = ({ campers }) => {
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
          <li key={camper.id} className={css.box1}>
            <div className={css.boxForItemBtn}>
              <CatalogItem {...camper}
              kitchen={camper.kitchen ? "kitchen" : null}
              AC={camper.AC ? "AC" : null} 
              bathroom={camper.bathroom ? "bathroom" : null}
              TV={camper.TV ? "TV" : null}/>
            </div>
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