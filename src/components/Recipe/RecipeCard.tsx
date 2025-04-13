import { Link } from 'react-router';
import { RecipePost } from '../../types/recipe';
import RecipeImage from './RecipeImage';
import RecipeRating from './RecipeRating';

interface RecipeCardProps {
  recipe: RecipePost;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
      <div className="relative h-56 overflow-hidden">
        <RecipeImage imageUrl={recipe.imageUrl || ''} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center space-x-1 text-white">
            <RecipeRating rating={recipe.rating ?? null} reviews={recipe.reviews ?? 0} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-xl text-gray-800 hover:text-cyan-600 transition-colors">
            <Link to={`/recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
