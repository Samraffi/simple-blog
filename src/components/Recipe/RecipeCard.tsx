import { Link } from 'react-router';
import { RecipePost } from '../../types/recipe';
import RecipeImage from './RecipeImage';
import RecipeRating from './RecipeRating';

interface RecipeCardProps {
  recipe: RecipePost;
  onEdit?: () => void;
  onDelete?: () => void;
}

const RecipeCard = ({ recipe, onEdit, onDelete }: RecipeCardProps) => {
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
          <Link to={`${recipe.id}`}>
            {recipe.title}
          </Link>
          </h3>
          {(onEdit || onDelete) && (
            <div className="flex space-x-2">
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="text-cyan-600 hover:text-cyan-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={onDelete}
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
