import { RECIPE_VALIDATION, RecipeCategory, FormValidation, RecipePost } from "../../types/recipe";

export const validateRecipeFields = (recipe: Partial<RecipePost>): FormValidation => {
  const errors: FormValidation = {};

  // Validate title
  if (!recipe.title) {
    errors.title = ["Recipe title is required"];
  } else if (recipe.title.length < RECIPE_VALIDATION.title.minLength) {
    errors.title = [`Title must be at least ${RECIPE_VALIDATION.title.minLength} characters`];
  } else if (recipe.title.length > RECIPE_VALIDATION.title.maxLength) {
    errors.title = [`Title must not exceed ${RECIPE_VALIDATION.title.maxLength} characters`];
  }

  // Validate content
  if (!recipe.content) {
    errors.content = ["Recipe description is required"];
  } else if (recipe.content.length < RECIPE_VALIDATION.content.minLength) {
    errors.content = [`Description must be at least ${RECIPE_VALIDATION.content.minLength} characters`];
  } else if (recipe.content.length > RECIPE_VALIDATION.content.maxLength) {
    errors.content = [`Description must not exceed ${RECIPE_VALIDATION.content.maxLength} characters`];
  }

  // Validate ingredients
  if (!recipe.ingredients || recipe.ingredients.length < RECIPE_VALIDATION.ingredients.minItems) {
    errors.ingredients = ["Add at least one ingredient"];
  }

  // Validate cookTime
  if (!recipe.cookTime) {
    errors.cookTime = ["Cooking time is required"];
  } else if (!RECIPE_VALIDATION.cookTime.pattern.test(recipe.cookTime)) {
    errors.cookTime = ["Time should be in format '30 min'"];
  }

  // Validate steps
  if (!recipe.steps || recipe.steps.length < RECIPE_VALIDATION.steps.minItems) {
    errors.steps = ["Add at least one cooking step"];
  }

  // Validate category
  if (!recipe.category) {
    errors.category = ["Please select a recipe category"];
  } else if (!Object.values(RecipeCategory).includes(recipe.category as RecipeCategory)) {
    errors.category = ["Invalid category selected"];
  }

  return errors;
};
