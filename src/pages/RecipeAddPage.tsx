import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router';
import { RecipePost } from '../types/recipe';
import { createPost } from '../services/recipeService/createPost';
import InputField from '../components/forms/InputField';
import TextareaField from '../components/forms/TextareaField';
import ArrayField from '../components/forms/ArrayField';
import FormActions from '../components/forms/FormActions';
import { validationSchema } from '../constants/validation';
import { initialRecipeValues } from '../constants/recipe';

const RecipeAddPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Создать новый рецепт</h1>
      
      <Formik
        initialValues={initialRecipeValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
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
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-2xl mx-auto space-y-6">
            <InputField
              label="Название"
              name="title"
            />

            <TextareaField
              label="Содержание"
              name="content"
            />

            <InputField
              label="URL изображения"
              name="imageUrl"
              type="url"
              required={false}
            />

            <InputField
              label="Время приготовления"
              name="cookTime"
            />

            <InputField
              label="Категория"
              name="category"
            />

            <ArrayField
              label="Ингредиенты"
              name="ingredients"
            />

            <ArrayField
              label="Шаги приготовления"
              name="steps"
              isTextarea
            />

            <FormActions 
              onCancel={() => navigate('/recipes')} 
              submitDisabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecipeAddPage;
