const CatalogItem = ({ name, location, rating, price, description, gallery }) => {
  return (
    <li>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{rating}</p>
      <h2>€{price}</h2>
      <p>{description}</p>
      <div>
        {gallery && gallery.map((image, index) => (
          <img key={index} src={image.original} alt={`${name} image ${index + 1}`} />
        ))}
      </div>
    </li>
  );
};

export default CatalogItem;