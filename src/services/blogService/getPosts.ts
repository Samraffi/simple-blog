import { BlogPost } from '../../types/blog';
import { STORAGE_KEY } from '../../constants/blog';

export const getPosts = (): BlogPost[] => {
  const posts = localStorage.getItem(STORAGE_KEY);
  return posts ? JSON.parse(posts) : [];
};
