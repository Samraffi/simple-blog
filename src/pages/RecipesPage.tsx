import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { RecipePost } from '../types/recipe';
import { getPosts } from '../services/recipeService/getPosts';
import RecipeHero from '../components/Recipe/RecipeHero';
import RecipeSearch from '../components/Recipe/RecipeSearch';
import RecipeGrid from '../components/Recipe/RecipeGrid';

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allRecipes, setAllRecipes] = useState<RecipePost[]>([]);

  // Load recipes on mount
  useEffect(() => {
    const loadRecipes = () => {
      const loadedRecipes = getPosts() as RecipePost[];
      const processedRecipes = loadedRecipes.map(recipe => ({
        ...recipe,
        ingredients: recipe.ingredients || [],
        cookTime: recipe.cookTime || '',
        steps: recipe.steps || [],
        category: recipe.category || ''
      }));
      setAllRecipes(processedRecipes);
    };

    loadRecipes();
  }, []);

  // Memoized recipe filtering
  const filteredRecipes = useMemo(() => {
    if (!searchQuery) return allRecipes;

    const lowerQuery = searchQuery.toLowerCase();
    return allRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(lowerQuery) ||
      recipe.category.toLowerCase().includes(lowerQuery) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(lowerQuery))
    ).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [allRecipes, searchQuery]);

  return (
    <div className="bg-white pb-16">
      <RecipeHero />
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <Link 
            to="/recipes/add"
            className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors duration-200"
          >
            Create recipe
          </Link>
        </div>
        <RecipeSearch 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <RecipeGrid 
          recipes={filteredRecipes}
          onUpdate={() => setAllRecipes([...getPosts()])} // Update list
        />
      </div>
    </div>
  );
};

export default RecipesPage;
