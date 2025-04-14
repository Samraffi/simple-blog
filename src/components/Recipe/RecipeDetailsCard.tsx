import RecipeActions from './RecipeActions';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import RecipeMetadata from './RecipeMetadata';

interface RecipeDetailsCardProps {
  title: string;
  cookTime: string;
  category: string;
  content: string;
  ingredients: string[];
  steps: string[];
  createdAt: string;
  id: string;
  onEdit: () => void;
}

const RecipeDetailsCard = ({
  title,
  cookTime,
  category,
  content,
  ingredients,
  steps,
  createdAt,
  id,
  onEdit
}: RecipeDetailsCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg mb-12">
      <div className="bg-gray-100 p-6 rounded-t-lg">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>

        {/* Time and Actions */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div>
            <p className="text-gray-700">Cooking time: {cookTime}</p>
            <p className="text-gray-700">Category: {category}</p>
          </div>
          <RecipeActions onEdit={onEdit} />
        </div>

        <p className="text-gray-700 mb-4">{content}</p>
      </div>

      {/* Ingredients and Instructions */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RecipeIngredients ingredients={ingredients} />
          <RecipeSteps steps={steps} />
        </div>
      </div>

      <RecipeMetadata 
        cookTime={cookTime}
        createdAt={createdAt}
        category={category}
        id={id}
      />
    </div>
  );
};

export default RecipeDetailsCard;
