import { BlogPost } from '../../types/blog';
import { STORAGE_KEY } from '../../constants/blog';
import { getPosts } from './getPosts';

export const updatePost = (post: BlogPost): void => {
  const posts = getPosts();
  const updatedPosts = posts.map(p => 
    p.id === post.id 
      ? { ...post, updatedAt: new Date().toISOString() }
      : p
  );
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
};
