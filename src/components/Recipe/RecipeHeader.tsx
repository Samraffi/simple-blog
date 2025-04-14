import { formatDate } from '../../utils/dateUtils';
import RecipeRating from './RecipeRating';

interface RecipeHeaderProps {
  title: string;
  category: string;
  cookTime: string;
  updatedAt: string;
  rating: number | null;
  reviews: number;
}

const RecipeHeader = ({ title, category, cookTime, updatedAt, rating, reviews }: RecipeHeaderProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
          <span className="ml-4 text-gray-500">⏱️ {cookTime}</span>
        </div>
        <div className="text-sm text-gray-500">
          Updated: {formatDate(updatedAt)}
        </div>
      </div>

      <RecipeRating rating={rating} reviews={reviews} />
    </>
  );
};

export default RecipeHeader;
