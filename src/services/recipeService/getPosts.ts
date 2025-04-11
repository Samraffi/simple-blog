import { RecipePost } from '../../types/recipe';
import { STORAGE_KEY } from '../../constants/recipe';

export const getPosts = (): RecipePost[] => {
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};
