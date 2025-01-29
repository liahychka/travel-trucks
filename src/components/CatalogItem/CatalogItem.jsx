const CatalogItem = ({ name, location, price, rating, description, gallery }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{rating}</p>
      <h3>€{price}</h3>
      <p>{description}</p>
      <div>
        {gallery && gallery.map((image, index) => (
          <img key={index} src={image.original} alt={`${name} image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default CatalogItem;
