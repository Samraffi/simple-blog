import { RecipeCardProps } from '../../types/recipe';
import { formatDate } from '../../utils/dateUtils';

const RecipeCard = ({ recipe, onEdit, onDelete }: RecipeCardProps) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md mb-6">
      <header className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {recipe.category || "Без категории"}
          </span>
        </div>
        <div className="text-sm text-gray-500">
          <span>⏱️ {`${recipe.cookTime} мин` || "Время не указано"}</span>
          <span className="ml-4">
            Обновлено: {formatDate(recipe.updatedAt)}
          </span>
        </div>
      </header>

      {recipe.content && (
        <div className="mb-4">
          <p className="text-gray-600">{recipe.content}</p>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Ингредиенты:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-600">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Приготовление:</h3>
        <ol className="list-decimal pl-5 space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ol>
      </div>

      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => onEdit(recipe.id)} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Редактировать
        </button>
        <button 
          onClick={() => onDelete(recipe.id)} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Удалить
        </button>
      </div>
    </article>
  );
};

export default RecipeCard;