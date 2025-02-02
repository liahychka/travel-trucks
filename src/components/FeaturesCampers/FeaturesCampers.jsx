import css from "./FeaturesCampers.module.css"

const FeaturesCampers = ({
  form, length, width, height, tank, consumption, water, gas, microwave, refrigerator, radio, TV, kitchen, bathroom, AC, engine, transmission
}) => {

  return (
    <div>
      <ul>
        <li className={css.boxforFeatures}>
          <p>{water}</p>
          <p>{gas}</p>
          <p>{microwave}</p>
          <p>{refrigerator}</p>
          <p>{radio}</p>
          <p>{TV}</p>
          <p>{kitchen}</p>
          <p>{bathroom}</p>
          <p>{AC}</p> 
          <p>{engine}</p>
          <p>{transmission}</p>
          <p>{consumption}</p>
          <p>{tank}</p>
          <p>{height}</p>
          <p>{width}</p>
          <p>{length}</p>
          <p>{form}</p>
        </li>
      </ul>
    </div>
  );
};


export default FeaturesCampers;
