export type RecipePost = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // URL изображения
  rating?: number;    // Рейтинг от 1 до 5
  reviews?: number; // Количество отзывов
  ingredients: string[]; // Список ингредиентов
  cookTime: string;      // "30 мин"
  steps: string[];       // Нумерованные шаги
  category: string;      // "Десерты"
  createdAt: string;
  updatedAt: string;
}

export type RecipeImageProps = {
  imageUrl: string;
}

export type ShowRatingProps = {
  rating: number | null,
  reviews: number
};

export type Recipes = RecipePost[];

export type RecipeEditorProps = {
  initialData: RecipePost;
  onSave: (recipe: RecipePost) => Promise<void>;
  onCancel: () => void;
}

export type RecipeCardProps = {
  recipe: RecipePost;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export type EditRecipePostProps = {
  title: string;
  setTitle: (title: string) => void;

  ingredients: string[];
  changeIngredient: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;

  content: string;
  setContent: (content: string) => void;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  setIsEditing: (isEditing: boolean) => void;

  alert: AlertStateType;
  setAlert: (updater: (prev: AlertStateType) => AlertStateType) => void;
};

export type AlertStateType = {
  isOpen: boolean;
  message: string;
  type: AlertType;
};

export type AlertType = 'error' | 'success' | 'warning' | 'info';



export interface RecipeListProps {
  recipes: Recipes;
  onUpdate: () => void;
}

export interface NewPostFormProps {
  onPostCreated: (newPost: RecipePost) => void;
}

export type RatingProps = {
  rating: number;
};
