import { RecipePost } from '../../types/recipe';
import RecipeEditor from './RecipeEditor';
import { updatePost } from '../../services/recipeService/updatePost';

interface RecipeEditModalProps {
  recipe: RecipePost;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (recipe: RecipePost) => void;
  onAlertShow: (message: string, type: 'success' | 'error') => void;
}

const RecipeEditModal = ({
  recipe,
  isOpen,
  onClose,
  onUpdate,
  onAlertShow
}: RecipeEditModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Edit recipe</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <RecipeEditor
            initialData={recipe}
            onSave={async (updatedRecipe) => {
              try {
                await updatePost(updatedRecipe);
                onUpdate(updatedRecipe);
                onClose();
                onAlertShow('Recipe updated successfully', 'success');
              } catch (error) {
                onAlertShow('Error updating recipe', 'error');
              }
            }}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeEditModal;
