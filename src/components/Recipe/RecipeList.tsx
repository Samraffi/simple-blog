// RecipeList.tsx (список рецептов)
import { useState } from 'react';
import { AlertStateType, RecipeListProps, RecipePost } from '../../types/recipe';
import RecipeEditor from './RecipeEditor';
import RecipeCard from './RecipeCard';
import Alert from '../Alert';
import ConfirmDialog from '../ConfirmDialog';
import { deletePost } from '../../services/recipeService/deletePost';
import { updatePost } from '../../services/recipeService/updatePost';

const RecipeList = ({ recipes, onUpdate }: RecipeListProps) => {
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
    deleteId: '' // Добавляем ID для удаления
  });

  const handleUpdate = async (updatedRecipe: RecipePost) => {
    try {
      await updatePost(updatedRecipe);
      onUpdate();
      setEditingId(null);
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

  console.log('recipes', recipes);

  return (
    <div className="space-y-6">
      {recipes.map(recipe => (
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

export default RecipeList;