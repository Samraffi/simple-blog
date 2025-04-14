import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router';
import { useRecipeCreate } from '../hooks/form/useRecipeCreate';
import InputField from '../components/forms/InputField';
import TextareaField from '../components/forms/TextareaField';
import ArrayField from '../components/forms/ArrayField';
import FormActions from '../components/forms/FormActions';
import { validationSchema } from '../constants/validation';
import { initialRecipeValues } from '../constants/recipe';

const RecipeAddPage = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useRecipeCreate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-center font-bold mb-8">Create new recipe</h1>
      
      <Formik
        initialValues={initialRecipeValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-2xl mx-auto space-y-6">
            <InputField
              label="Title"
              name="title"
            />

            <TextareaField
              label="Content"
              name="content"
            />

            <InputField
              label="Image URL"
              name="imageUrl"
              type="url"
              required={false}
            />

            <InputField
              label="Cooking time"
              name="cookTime"
            />

            <InputField
              label="Category"
              name="category"
            />

            <ArrayField
              label="Ingredients"
              name="ingredients"
            />

            <ArrayField
              label="Cooking steps"
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
