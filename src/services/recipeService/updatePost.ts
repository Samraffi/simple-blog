import { RecipePost } from '../../types/recipe';
import { STORAGE_KEY } from '../../constants/recipe';
import { getPosts } from './getPosts';

export const updatePost = (post: RecipePost): void => {
  const posts = getPosts();
  const updatedPosts = posts.map(p => 
    p.id === post.id 
      ? { ...post, updatedAt: new Date().toISOString() }
      : p
  );
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
};
