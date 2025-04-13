import { RECIPE_VALIDATION, RecipeCategory, FormValidation, RecipePost } from "../../types/recipe";

export const validateRecipeFields = (recipe: Partial<RecipePost>): FormValidation => {
  const errors: FormValidation = {};

  // Validate title
  if (!recipe.title) {
    errors.title = ["Название рецепта обязательно"];
  } else if (recipe.title.length < RECIPE_VALIDATION.title.minLength) {
    errors.title = [`Название должно содержать минимум ${RECIPE_VALIDATION.title.minLength} символа`];
  } else if (recipe.title.length > RECIPE_VALIDATION.title.maxLength) {
    errors.title = [`Название не должно превышать ${RECIPE_VALIDATION.title.maxLength} символов`];
  }

  // Validate content
  if (!recipe.content) {
    errors.content = ["Описание рецепта обязательно"];
  } else if (recipe.content.length < RECIPE_VALIDATION.content.minLength) {
    errors.content = [`Описание должно содержать минимум ${RECIPE_VALIDATION.content.minLength} символов`];
  } else if (recipe.content.length > RECIPE_VALIDATION.content.maxLength) {
    errors.content = [`Описание не должно превышать ${RECIPE_VALIDATION.content.maxLength} символов`];
  }

  // Validate ingredients
  if (!recipe.ingredients || recipe.ingredients.length < RECIPE_VALIDATION.ingredients.minItems) {
    errors.ingredients = ["Добавьте хотя бы один ингредиент"];
  }

  // Validate cookTime
  if (!recipe.cookTime) {
    errors.cookTime = ["Время приготовления обязательно"];
  } else if (!RECIPE_VALIDATION.cookTime.pattern.test(recipe.cookTime)) {
    errors.cookTime = ["Время должно быть указано в формате '30 мин'"];
  }

  // Validate steps
  if (!recipe.steps || recipe.steps.length < RECIPE_VALIDATION.steps.minItems) {
    errors.steps = ["Добавьте хотя бы один шаг приготовления"];
  }

  // Validate category
  if (!recipe.category) {
    errors.category = ["Выберите категорию рецепта"];
  } else if (!Object.values(RecipeCategory).includes(recipe.category as RecipeCategory)) {
    errors.category = ["Выбрана некорректная категория"];
  }

  return errors;
};
