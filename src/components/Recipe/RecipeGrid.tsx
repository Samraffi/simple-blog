import { useState } from 'react';
import { AlertStateType, RecipePost } from '../../types/recipe';
import RecipeCard from './RecipeCard';
import RecipeEditor from './RecipeEditor';
import Alert from '../Alert';
import ConfirmDialog from '../ConfirmDialog';
import { deletePost } from '../../services/recipeService/deletePost';
import { updatePost } from '../../services/recipeService/updatePost';

interface RecipeGridProps {
  recipes: RecipePost[];
  onUpdate: () => void;
}

const RecipeGrid = ({ recipes, onUpdate }: RecipeGridProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [alert, setAlert] = useState<AlertStateType>({
    isOpen: false,
    message: '',
    type: 'error'
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    message: '',
    deleteId: ''
  });

  const handleUpdate = async (updatedRecipe: RecipePost) => {
    try {
      await updatePost(updatedRecipe);
      onUpdate();
      setEditingId(null);
      setAlert({
        isOpen: true,
        message: 'Recipe updated successfully',
        type: 'success'
      });
    } catch (error) {
      setAlert({
        isOpen: true,
        message: 'Failed to update recipe',
        type: 'error'
      });
    }
  };

  const handleDelete = (id: string) => {
    setConfirmDialog({
      isOpen: true,
      title: 'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      deleteId: id
    });
  };

  const confirmDelete = async () => {
    try {
      await deletePost(confirmDialog.deleteId);
      onUpdate();
      setAlert({
        isOpen: true,
        message: 'Recipe deleted successfully',
        type: 'success'
      });
    } catch (error) {
      setAlert({
        isOpen: true,
        message: 'Failed to delete recipe',
        type: 'error'
      });
    } finally {
      setConfirmDialog(prev => ({ ...prev, isOpen: false }));
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Rated Recipes</h2>
      <p className="text-lg mb-8 text-gray-600">
        Out of all the many recipes on Piece of Cake, these are our shining stars - the recipes we come back to again and again (and again).
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            {editingId === recipe.id ? (
              <RecipeEditor
                initialData={recipe}
                onSave={handleUpdate}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <RecipeCard 
                recipe={recipe}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <a 
          href="#" 
          className="inline-flex items-center px-5 py-3 border border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
        >
          + View All Recipes
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <Alert
        isOpen={alert.isOpen}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert(prev => ({ ...prev, isOpen: false }))}
      />
      
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.title}
        message={confirmDialog.message}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmDialog(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};

export default RecipeGrid;
