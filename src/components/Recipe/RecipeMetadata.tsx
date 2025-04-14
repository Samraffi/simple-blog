import { formatDate } from '../../utils/dateUtils';

interface RecipeMetadataProps {
  cookTime: string;
  createdAt: string;
  category: string;
  id: string;
}

const RecipeMetadata = ({ cookTime, createdAt, category, id }: RecipeMetadataProps) => {
  return (
    <div className="p-6 border-t border-gray-200">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700"><strong>Cooking time:</strong> {cookTime}</p>
          <p className="text-gray-700"><strong>Created:</strong> {formatDate(createdAt)}</p>
        </div>
        <div>
          <p className="text-gray-700"><strong>Category:</strong> {category}</p>
          <p className="text-gray-700"><strong>Recipe ID:</strong> {id.slice(0, 8)}...</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeMetadata;
