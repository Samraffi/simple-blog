import { RecipePost } from '../../types/recipe';

interface UseRecipeEditProps {
  initialData: RecipePost;
  onSave: (data: RecipePost) => Promise<void>;
}

export const useRecipeEdit = ({ initialData, onSave }: UseRecipeEditProps) => {
  const handleSubmit = async (values: RecipePost) => {
    try {
      await onSave(values);
    } catch (error) {
      console.error('Failed to update recipe:', error);
      throw error;
    }
  };

  return { handleSubmit, initialData };
};
