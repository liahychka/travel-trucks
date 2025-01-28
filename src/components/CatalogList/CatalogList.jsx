import CatalogItem from "../CatalogItem/CatalogItem.jsx";

const CatalogList = ({ campers }) => {
  return (
    <div>
      <ul>
        {campers.map((camper) => (
          <CatalogItem
            key={camper.id}
            name={camper.name}
            location={camper.location}
            price={camper.price}
            // Можна додавати інші дані, якщо вони потрібні
          />
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
