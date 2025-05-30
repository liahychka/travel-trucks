import { useState } from "react";
import { useSelector } from "react-redux";
import ReviewsCampers from "../ReviewsCampers/ReviewsCampers";
import { selectCamperById } from "../../redux/campers/selectors";
import { useParams } from "react-router-dom";
import FeaturesCampers from "../FeaturesCampers/FeaturesCampers";
import css from "./NavigationDetails.module.css"
import FormBooking from "../FormBooking/FormBooking";

const NavigationDetails = () => {
  const { id } = useParams();
  const camper = useSelector((state) => selectCamperById(state, id));

  const [activeTab, setActiveTab] = useState("features");

  if (!camper) {
    return <h2>Camper not found</h2>;
  }

  
  return (
    <div>
      <ul className={css.listlink}>
        <li onClick={() => setActiveTab("features")} className={css.linkActive}>
          Features
        </li>
        <li onClick={() => setActiveTab("reviews")} className={css.linkActive}>
          Reviews
        </li>
      </ul>
      <div className={css.boxDetails}>
            {activeTab === "features" && (
        <FeaturesCampers
          transmission={camper.transmission}
          engine={camper.engine}
          kitchen={camper.kitchen ? "kitchen" : null}
          AC={camper.AC ? "AC" : null}
          water={camper.water ? "water" : null}
          gas={camper.gas ? "gas" : null}
          microwave={camper.microwave ? "microwave" : null}
          refrigerator={camper.refrigerator ? "refrigerator" : null}
          radio={camper.radio ? "radio" : null}
          TV={camper.TV ? "TV" : null}
          bathroom={camper.bathroom ? "bathroom" : null}
          consumption={camper.consumption}
          tank={camper.tank}
          height={camper.height}
          width={camper.width}
          length={camper.length}
          form={camper.form}
        />
      )}

      {activeTab === "reviews" && (
        <div>
          {camper.reviews.map((review, index) => (
            <ReviewsCampers
              key={index}
              reviewer_name={review.reviewer_name}
              reviewer_rating={review.reviewer_rating}
              comment={review.comment}
            />
          ))}                 
        </div>
      )}
       <FormBooking />   
    </div>

    </div>
  );
 
};

export default NavigationDetails;
