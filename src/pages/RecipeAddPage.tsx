import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RecipePost } from '../types/recipe';
import { createPost } from '../services/recipeService/createPost';
import InputField from '../components/forms/InputField';
import TextareaField from '../components/forms/TextareaField';
import ArrayField from '../components/forms/ArrayField';
import FormActions from '../components/forms/FormActions';

const RecipeAddPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    ingredients: [''],
    steps: [''],
    cookTime: '',
    category: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field: 'ingredients' | 'steps') => 
    (index: number, value: string) => {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].map((item, i) => i === index ? value : item)
      }));
    };

  const addArrayItem = (field: 'ingredients' | 'steps') => () => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeArrayItem = (field: 'ingredients' | 'steps') => 
    (index: number) => {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newRecipe: RecipePost = {
        ...formData,
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
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Создать новый рецепт</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <InputField
          label="Название"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />

        <TextareaField
          label="Содержание"
          name="content"
          value={formData.content}
          onChange={handleInputChange}
        />

        <InputField
          label="URL изображения"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          type="url"
        />

        <InputField
          label="Время приготовления"
          name="cookTime"
          value={formData.cookTime}
          onChange={handleInputChange}
        />

        <InputField
          label="Категория"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />

        <ArrayField
          label="Ингредиенты"
          items={formData.ingredients}
          onAdd={addArrayItem('ingredients')}
          onRemove={removeArrayItem('ingredients')}
          onChange={handleArrayChange('ingredients')}
          renderItem={(item, index) => (
            <input
              type="text"
              value={item}
              onChange={(e) => handleArrayChange('ingredients')(index, e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          )}
        />

        <ArrayField
          label="Шаги приготовления"
          items={formData.steps}
          onAdd={addArrayItem('steps')}
          onRemove={removeArrayItem('steps')}
          onChange={handleArrayChange('steps')}
          renderItem={(item, index) => (
            <textarea
              value={item}
              onChange={(e) => handleArrayChange('steps')(index, e.target.value)}
              rows={2}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          )}
        />

        <FormActions onCancel={() => navigate('/recipes')} />
      </form>
    </div>
  );
};

export default RecipeAddPage;