import { RecipeImageProps } from '../../types/recipe';

const RecipeImage = ({ imageUrl }: RecipeImageProps) => {
  return (
    <div className="mb-8">
      <div className={`w-full ${imageUrl === "" ? 'h-64' : ''} bg-gray-200 rounded-lg flex items-center justify-center`}>
        {imageUrl === "" ? (
          <span className="text-gray-500 text-xl">Recipe image is missing but will be added soon</span>
        ) : (
          <img
            src={imageUrl}
            alt="Soft Chocolate Chip Cookies on parchment"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        )}
      </div>
    </div>
  );
}

export default RecipeImage;