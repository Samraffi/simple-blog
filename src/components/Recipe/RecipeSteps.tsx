interface RecipeStepsProps {
  steps: string[];
}

const RecipeSteps = ({ steps }: RecipeStepsProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Instructions</h3>
      <ol className="list-decimal pl-5 space-y-4">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeSteps;
