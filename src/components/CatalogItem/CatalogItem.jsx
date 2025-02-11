import { NavLink } from 'react-router-dom';
import { useFavorites } from "../../FavoritesContext/FavoritesContext.jsx";
import css from './CatalogItem.module.css';
import icons from '../icons/icons.svg';

const truncateText = (text, limit) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
};

const CatalogItem = (props) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { id, name, location, price, rating, description = '', gallery, transmission,
    engine, kitchen, AC
   } = props;

  return (
    <div className={css.box}>
    {gallery?.length > 0 && (
      <img
        src={gallery[0].original}
        alt={`${name} image`}
        className={css.imgCatalogList}
      />
    )}
      <div>
        <ul className={css.list}>
          <li className={css.catalogItem}>
            <div className={css.namePrice}>
              <h4 className={css.name}>{name}</h4>
              <div className={css.spanPrice}>
              <h4 className={css.price}>€{price}.00</h4>
              <span onClick={() => toggleFavorite(id)} className={css.spanHeart}>
                <svg className={`${css.heart} ${favorites.includes(id) ? css.filled : ''}`}>
                  <use href={`${icons}#icon-heart`} />
                </svg>
              </span>                
              </div>

            </div>
            <div className={css.ratingLocation}>
              <p>
              <svg className={css.star}>
                <use href={`${icons}#icon-star-orange`} />
              </svg>
                {rating}</p>
              <p className={css.locationText}> 
              <svg className={css.location}>
                <use href={`${icons}#icon-location`} />
              </svg>
                {location}</p>
            </div>
            <p className={css.description}>{truncateText(description, 10)}</p> 
            <div className={css.boxFeatures}>
              {kitchen && (
                <p className={css.iconBox}>
                  <svg className={css.iconStyles}>
                    <use href={`${icons}#icon-kitchen`} />
                  </svg>                
                  {kitchen}
                </p>
              )}
            {AC && (           
              <p className={css.iconBox}>
              <svg className={css.iconStyles}>
                <use href={`${icons}#icon-ac`} />
              </svg>   
                {AC}
              </p>)}
            {engine && (           
              <p className={css.iconBox}>
              <svg className={css.iconStyles}>
                <use href={`${icons}#icon-petrol`} />
              </svg>   
                {engine}
                </p>)}
            {transmission && (           
              <p className={css.iconBox}>
              <svg className={css.iconStyles}>
                <use href={`${icons}#icon-automatic`} />
              </svg>   
                {transmission}
              </p>)}                
            </div>
            <div>
        <NavLink to={`/catalog/${id}`} className={css.btnShowMore}>
          Show More
        </NavLink>      
            </div>
            
          </li>
        </ul>
         
      </div>
    </div>
  );
};

export default CatalogItem;
