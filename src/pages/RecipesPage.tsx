import { useState, useEffect } from 'react';
import { RecipePost } from '../types/recipe';
import { getPosts } from '../services/recipeService/getPosts';
import RecipeHero from '../components/Recipe/RecipeHero';
import RecipeSearch from '../components/Recipe/RecipeSearch';
import RecipeGrid from '../components/Recipe/RecipeGrid';

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<RecipePost[]>([]);

  const loadRecipes = () => {
    const loadedRecipes = getPosts() as RecipePost[];
    setRecipes(loadedRecipes.map(recipe => ({
      ...recipe,
      ingredients: recipe.ingredients || [],
      cookTime: recipe.cookTime || '',
      steps: recipe.steps || [],
      category: recipe.category || ''
    })).sort((a: RecipePost, b: RecipePost) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div className="bg-white pb-16">
      <RecipeHero />
      <div className="container mx-auto px-4 py-12">
        <RecipeSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <RecipeGrid 
          recipes={recipes}
          onUpdate={loadRecipes}
        />
      </div>
    </div>
  );
};

export default RecipesPage;
