import { Formik, Form } from 'formik';
import { RecipeEditorProps } from '../../types/recipe';
import { useRecipeEdit } from '../../hooks/form/useRecipeEdit';
import { validationSchema } from '../../constants/validation';
import InputField from '../forms/InputField';
import TextareaField from '../forms/TextareaField';
import ArrayField from '../forms/ArrayField';
import FormActions from '../forms/FormActions';

const RecipeEditor = ({ initialData, onSave, onCancel }: RecipeEditorProps) => {
  const { handleSubmit } = useRecipeEdit({ initialData, onSave });

  return (
    <Formik
      initialValues={initialData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded-lg mb-6">
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
            onCancel={onCancel} 
            submitDisabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RecipeEditor;
