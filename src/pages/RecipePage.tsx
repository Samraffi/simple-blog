import { RecipePost } from '../types/recipe';
import { formatDate } from '../utils/dateUtils';
import RecipeImage from '../components/Recipe/RecipeImage';
import { FaPrint, FaShare } from 'react-icons/fa';
import RecipeRating from '../components/Recipe/RecipeRating';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getPosts } from '../services/recipeService/getPosts';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipePost | null>(null);

  useEffect(() => {
    const savedRecipes = getPosts() as RecipePost[];
    const foundRecipe = savedRecipes.find((recipe: RecipePost) => recipe.id === id);
    
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      console.error(`Recipe with id ${id} not found`);
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading... or Recipe not found</div>;
  }


  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{recipe.title}</h1>

      {/* Metadata */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {recipe.category}
          </span>
          <span className="ml-4 text-gray-500">⏱️ {recipe.cookTime}</span>
        </div>
        <div className="text-sm text-gray-500">
          Обновлено: {formatDate(recipe.updatedAt)}
        </div>
      </div>

      <RecipeRating rating={recipe.rating ?? null} reviews={recipe.reviews ?? 0} />


      {/* Description */}
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">{recipe.content}</p>
      </div>

      <RecipeImage imageUrl={recipe.imageUrl || ''} />

      {/* Recipe Card */}
      <div className="border border-gray-200 rounded-lg shadow-lg mb-12">
        <div className="bg-gray-100 p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>

          {/* Time and Actions */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">Время приготовления: {recipe.cookTime}</p>
              <p className="text-gray-700">Категория: {recipe.category}</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md flex items-center">
                <FaPrint className="mr-1" /> Печать
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center">
                <FaShare className="mr-1" /> Поделиться
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{recipe.content}</p>
        </div>

        {/* Ingredients and Instructions */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-bold mb-4">Ингредиенты</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-xl font-bold mb-4">Инструкции</h3>
              <ol className="list-decimal pl-5 space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Recipe Metadata */}
        <div className="p-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700"><strong>Время готовки:</strong> {recipe.cookTime}</p>
              <p className="text-gray-700"><strong>Создано:</strong> {formatDate(recipe.createdAt)}</p>
            </div>
            <div>
              <p className="text-gray-700"><strong>Категория:</strong> {recipe.category}</p>
              <p className="text-gray-700"><strong>ID рецепта:</strong> {recipe.id.slice(0, 8)}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
