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
          <p className="text-gray-700"><strong>Время готовки:</strong> {cookTime}</p>
          <p className="text-gray-700"><strong>Создано:</strong> {formatDate(createdAt)}</p>
        </div>
        <div>
          <p className="text-gray-700"><strong>Категория:</strong> {category}</p>
          <p className="text-gray-700"><strong>ID рецепта:</strong> {id.slice(0, 8)}...</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeMetadata;
