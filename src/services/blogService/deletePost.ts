import { STORAGE_KEY } from '../../constants/blog';
import { getPosts } from './getPosts';

export const deletePost = (id: string): void => {
  const posts = getPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts));
};
