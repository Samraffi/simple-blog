import { FormEvent, useState } from "react";
import { NewPostFormProps } from "../../types/recipe";
import { createPost } from "../../services/recipeService/createPost";

const RecipeAdd = ({ onPostCreated }: NewPostFormProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);
  const [cookTime, setCookTime] = useState('');
  const [category, setCategory] = useState('');

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newRecipe = {
      id: crypto.randomUUID(),
      title: title.trim(),
      content,
      ingredients: ingredients.filter(i => i.trim()),
      steps: steps.filter(s => s.trim()),
      cookTime,
      category,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    createPost(newRecipe);
    onPostCreated(newRecipe);

    // Reset form state
    setTitle('');
    setContent('');
    setIngredients(['']);
    setSteps(['']);
    setCookTime('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6 border-2 border-blue-500">
      {/* Recipe title field */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название рецепта"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        required
      />

      {/* Ingredients fields */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Ингредиенты:</label>
        {ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Ингредиент ${index + 1}`}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          + Добавить ингредиент
        </button>
      </div>

      {/* Steps fields */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Шаги приготовления:</label>
        {steps.map((step, index) => (
          <textarea
            key={index}
            value={step}
            onChange={(e) => handleStepChange(index, e.target.value)}
            placeholder={`Шаг ${index + 1}`}
            className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min-h-20"
          />
        ))}
        <button
          type="button"
          onClick={handleAddStep}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          + Добавить шаг
        </button>
      </div>

      {/* Cooking time field */}
      <input
        type="text"
        value={cookTime}
        onChange={(e) => setCookTime(e.target.value)}
        placeholder="Время приготовления (например, 30 мин)"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {/* Category field */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Категория (например, Десерты)"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {/* Content/Description field */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Описание рецепта"
        className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min-h-32"
      />

      {/* Submit button */}
      <div className="flex gap-2">
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Создать рецепт
        </button>
      </div>
    </form>
  );
};

export default RecipeAdd;