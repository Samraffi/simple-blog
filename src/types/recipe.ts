export type RecipePost = {
  id: string;
  title: string;
  content: string;
  imageUrl?: string; // Image URL
  rating?: number;   // Rating from 1 to 5
  reviews?: number;  // Number of reviews
  ingredients: string[]; // List of ingredients
  cookTime: string;      // "30 min"
  steps: string[];       // Numbered steps
  category: string;      // "Desserts"
  createdAt: string;
  updatedAt: string;
}

export type RecipeImageProps = {
  imageUrl: string;
}

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
  rating: number | null;
  reviews: number;
};

export type FormValidation = {
  [key: string]: string[];
};

export const RECIPE_VALIDATION = {
  title: {
    required: true,
    minLength: 3,
    maxLength: 100
  },
  content: {
    required: true,
    minLength: 10,
    maxLength: 2000
  },
  ingredients: {
    required: true,
    minItems: 1
  },
  cookTime: {
    required: true,
    pattern: /^\d+\s*min$/
  },
  steps: {
    required: true,
    minItems: 1
  },
  category: {
    required: true
  }
};

export enum RecipeCategory {
  Desserts = "Desserts",
  MainDishes = "Main Dishes",
  Soups = "Soups",
  Salads = "Salads",
  Appetizers = "Appetizers",
  Beverages = "Beverages",
  Breads = "Breads",
  Other = "Other"
}
