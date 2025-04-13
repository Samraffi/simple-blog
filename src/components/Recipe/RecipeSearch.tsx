import { Formik, Field, Form } from 'formik';
import { searchValidationSchema } from '../../constants/validation';

interface RecipeSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

interface SearchFormValues {
  searchQuery: string;
}

const RecipeSearch = ({ searchQuery, onSearchChange }: RecipeSearchProps) => {
  const initialValues: SearchFormValues = {
    searchQuery
  };

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Search by keyword</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={searchValidationSchema}
        onSubmit={() => {}}
        enableReinitialize
      >
        {({ values }) => (
          <Form className="relative">
            <Field
              type="text"
              name="searchQuery"
              placeholder="Search recipes..."
              className="w-full py-4 px-5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onSearchChange(e.target.value);
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RecipeSearch;
