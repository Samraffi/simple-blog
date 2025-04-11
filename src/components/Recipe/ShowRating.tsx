import { ShowRatingProps } from '../../types/recipe';
import RecipeRating from '../../components/Recipe/RecipeRating';

const ShowRating = ({ rating, reviews }: ShowRatingProps) => {
  if (rating) {
    return (
      <>
        <RecipeRating rating={rating ?? 0} />
        <span className="text-sm ml-1">({rating})</span>
        <span className="text-sm ml-2">{reviews} reviews</span>
      </>
    );
  }

  return null;
}

export default ShowRating;