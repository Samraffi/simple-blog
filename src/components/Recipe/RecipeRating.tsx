import { FaStar, FaRegStar } from 'react-icons/fa';
import { RatingProps } from '../../types/recipe';

const RecipeRating = ({ rating }: RatingProps) => {
  const reviews = 0;

  const renderStar = (i: number) => {
    if (i < Math.floor(rating)) {
      return <FaStar key={i} className="text-yellow-500" />;
    }

    if (i < rating) {
      return (
        <div key={i} className="relative">
          <FaStar
            className="text-yellow-500 absolute"
            style={{ clipPath: `inset(0 ${((5 - rating) * 10 % 10) * 10}% 0 0)` }}
          />
          <FaRegStar className="text-yellow-500" />
        </div>
      );
    }

    return <FaRegStar key={i} className="text-yellow-500" />;
  };

  return (
    <div className="flex items-center mb-6">
      <div className="flex">
        {[...Array(5)].map((_, i) => renderStar(i))}
      </div>
      {reviews > 0 && <span className="ml-2 text-gray-700">{reviews} отзывов</span>}
    </div>
  );
};

export default RecipeRating;
