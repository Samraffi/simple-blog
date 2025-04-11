import { useState } from "react";
import { RecipeEditorProps, RecipePost } from "../../types/recipe";

const RecipeEditor = ({ initialData, onSave, onCancel }: RecipeEditorProps) => {
  const [formData, setFormData] = useState<RecipePost>(initialData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(formData);
  };

  // Handler for changing ingredients
  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  // Handler for adding a new ingredient
  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""]
    });
  };

  // Handler for changing steps
  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...formData.steps];
    newSteps[index] = value;
    setFormData({ ...formData, steps: newSteps });
  };

  // Handler for adding a new step
  const addStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, ""]
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-500">
      {/* Recipe title field */}
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        placeholder="Recipe title"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {/* Ingredients fields */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Ingredients:</label>
        {formData.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Ingredient #${index + 1}`}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ))}
        <button
          type="button"
          onClick={addIngredient}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          + Add Ingredient
        </button>
      </div>

      {/* Cooking time field */}
      <input
        type="text"
        value={formData.cookTime}
        onChange={(e) => setFormData({...formData, cookTime: e.target.value})}
        placeholder="Cooking time (e.g., 30 mins)"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {/* Steps fields */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Steps:</label>
        {formData.steps.map((step, index) => (
          <textarea
            key={index}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Step #${index + 1}`}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min-h-20"
          />
        ))}
        <button
          type="button"
          onClick={addStep}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          + Add Step
        </button>
      </div>

      {/* Category field */}
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
        placeholder="Category (e.g., Desserts)"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {/* Content/Description field */}
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({...formData, content: e.target.value})}
        placeholder="Recipe description"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min-h-32"
      />

      {/* Control buttons */}
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeEditor;