import css from "./ReviewsCampers.module.css";
import icons from "../icons/icons.svg";

const ReviewsCampers = ({ reviewer_name, reviewer_rating, comment }) => {
  const rating = Number(reviewer_rating);

  return (
    <ul className={css.list}>
      <li className={css.itemReviews}>
        <div className={css.boxReviews}>
          <div className={css.wordNameBox}>
            <p className={css.wordName}>{reviewer_name.charAt(0)}</p>
          </div>
          <div className={css.boxNameStars}>
            <h4>{reviewer_name}</h4>
            <div className={css.stars}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16">
                  <use
                    href={`${icons}#${i < rating ? "icon-star-orange" : "icon-star"}`}
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p>{comment}</p>
      </li>
    </ul>
  );
};

export default ReviewsCampers;
