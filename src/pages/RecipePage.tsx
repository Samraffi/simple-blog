import { RecipePost, AlertStateType } from '../types/recipe';
import RecipeImage from '../components/Recipe/RecipeImage';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getPosts } from '../services/recipeService/getPosts';
import RecipeEditModal from '../components/Recipe/RecipeEditModal';
import Alert from '../components/Alert';
import RecipeHeader from '../components/Recipe/RecipeHeader';
import RecipeDetailsCard from '../components/Recipe/RecipeDetailsCard';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipePost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState<AlertStateType>({
    isOpen: false,
    message: '',
    type: 'success'
  });

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
      <RecipeHeader 
        title={recipe.title}
        category={recipe.category}
        cookTime={recipe.cookTime}
        updatedAt={recipe.updatedAt}
        rating={recipe.rating ?? null}
        reviews={recipe.reviews ?? 0}
      />

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">{recipe.content}</p>
      </div>

      <RecipeImage imageUrl={recipe.imageUrl || ''} />

      <RecipeDetailsCard 
        title={recipe.title}
        cookTime={recipe.cookTime}
        category={recipe.category}
        content={recipe.content}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
        createdAt={recipe.createdAt}
        id={recipe.id}
        onEdit={() => setIsEditing(true)}
      />

      <RecipeEditModal 
        recipe={recipe}
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        onUpdate={setRecipe}
        onAlertShow={(message: string, type: 'success' | 'error') => 
          setAlert({ isOpen: true, message, type })}
      />

      <Alert
        isOpen={alert.isOpen}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default RecipePage;
