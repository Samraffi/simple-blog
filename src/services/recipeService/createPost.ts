import { RecipePost } from '../../types/recipe';
import { STORAGE_KEY } from '../../constants/recipe';
import { getPosts } from './getPosts';

export const createPost = (post: RecipePost): void => {
  const posts = getPosts();
  const newPost: RecipePost = {
    ...post,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...posts, newPost]));
};
