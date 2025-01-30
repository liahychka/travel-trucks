import icons from '../icons/icons.svg';


const CatalogItem = ({ name, location, price, rating, description, gallery }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{rating}</p>
      <h3>€{price}</h3>
      <p>{description}</p>
        <div>
        {gallery && gallery.length > 0 ? (
          gallery.map((image, index) => (
            <img
              key={index}
              src={image.original}
              alt={`${name} image ${index + 1}`}
              style={{ width: "100%", height: "auto", marginBottom: "10px" }}
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default CatalogItem;
