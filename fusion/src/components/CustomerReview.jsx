import ReviewCard from "./ReviewCard";
import { reviews } from "../constants/constats";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Što naši
        <span className="text-coral-red"> Kupci </span>
        kažu?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Pročitajte neke od receznija naših zadovoljnih kupaca
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
