import { BlogPost } from '../../types/blog';
import { STORAGE_KEY } from '../../constants/blog';
import { getPosts } from './getPosts';

export const createPost = (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): void => {
  const posts = getPosts();
  const newPost: BlogPost = {
    ...post,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...posts, newPost]));
};
