interface RecipeIngredientsProps {
  ingredients: string[];
}

const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Ingredients</h3>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <input type="checkbox" className="mt-1 mr-2" />
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
