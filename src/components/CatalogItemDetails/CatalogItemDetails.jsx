import css from './CatalogItemDetails.module.css'

const CatalogItemDetails = ({ name, location, price, rating, description, gallery }) => {
  return (
      <div>
            <h3>{name}</h3>
            <div className={css.ratingLocation}>
            <p>{rating}</p>    
            <p>{location}</p>      
            </div>
          <h3>€{price}</h3>
          <div className={css.boxImage}>
                {gallery && gallery.length > 0 ? (
                gallery.map((image, index) => (
                <img
                key={index}
                src={image.original}
                alt={`${name} image ${index + 1}`}
                className={css.imageDetails}  
                />
                ))
                ) : (
                null
                )}
          </div>
            <p>{description}</p>
        <div>
      </div>
    </div>
  );
};

export default CatalogItemDetails;