import { useState, useEffect } from 'react';
import { RecipePost as RecipePostType } from '../types/recipe';
import { getPosts } from '../services/recipeService/getPosts';
import RecipeList from '../components/Recipe/RecipeList';
import RecipeAdd from '../components/Recipe/RecipeAdd';

const HomePage = () => {
  const [posts, setPosts] = useState<RecipePostType[]>([]);

  const loadPosts = () => {
    const loadedPosts = getPosts() as RecipePostType[];
    setPosts(loadedPosts.map(post => ({
      ...post,
      ingredients: post.ingredients || [],
      cookTime: post.cookTime || '',
      steps: post.steps || [],
      category: post.category || ''
    })).sort((a: RecipePostType, b: RecipePostType) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Simple React Blog</h1>
      <RecipeAdd onPostCreated={loadPosts} />
      <div className="space-y-6">
        {/* {posts.map(recipe => ( */}
          <RecipeList
            // key={recipe.id}
            recipes={posts}
            onUpdate={loadPosts}
          />
        {/* ))} */}
      </div>
    </div>
  );
};

export default HomePage;
