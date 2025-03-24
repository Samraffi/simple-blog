import { useState, useEffect } from 'react';
import { BlogPost as BlogPostType } from './types/blog';
import { getPosts } from './services/blogService/getPosts';
import { BlogPost } from './components/BlogPost';
import { NewPostForm } from './components/NewPostForm';

const App = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);

  const loadPosts = () => {
    const loadedPosts = getPosts();
    setPosts(loadedPosts.sort((a: BlogPostType, b: BlogPostType) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Simple React Blog</h1>
        <NewPostForm onPostCreated={loadPosts} />
        <div className="space-y-6">
          {posts.map(post => (
            <BlogPost 
              key={post.id} 
              post={post} 
              onUpdate={loadPosts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
