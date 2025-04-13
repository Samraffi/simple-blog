import { useNavigate } from 'react-router';
import { RecipePost } from '../../types/recipe';
import { createPost } from '../../services/recipeService/createPost';

export type RecipeFormValues = Omit<RecipePost, 'id' | 'createdAt' | 'updatedAt' | 'rating' | 'reviews'>;

export const useRecipeCreate = () => {
  const navigate = useNavigate();
  
  const handleSubmit = async (values: RecipeFormValues): Promise<void> => {
    try {
      const newRecipe: RecipePost = {
        ...values,
        id: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        rating: 0,
        reviews: 0
      };
      
      await createPost(newRecipe);
      navigate('/recipes');
    } catch (error) {
      console.error('Failed to create recipe:', error);
      throw error; // Re-throw to let Formik handle the error state
    }
  };

  return { handleSubmit };
};
