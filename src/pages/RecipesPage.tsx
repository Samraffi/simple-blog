import { useState, useEffect } from 'react';
import { RecipePost as RecipePostType } from '../types/recipe';
import { getPosts } from '../services/recipeService/getPosts';
import { Link } from 'react-router';
import RecipeImage from '../components/Recipe/RecipeImage';
import ShowRating from '../components/Recipe/ShowRating';

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<RecipePostType[]>([]);

  const loadRecipes = () => {
    const loadedRecipes = getPosts() as RecipePostType[];
    setRecipes(loadedRecipes.map(recipe => ({
      ...recipe,
      ingredients: recipe.ingredients || [],
      cookTime: recipe.cookTime || '',
      steps: recipe.steps || [],
      category: recipe.category || ''
    })).sort((a: RecipePostType, b: RecipePostType) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ));
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div className="bg-white pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-300 from-5% to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recipes</h1>
          <p className="text-lg max-w-3xl mx-auto">
            We've organized these recipes every way we could think of so you don't have to! 
            Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… 
            no matter how you browse, we're sure you'll find just what you were looking for.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Search by keyword</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-4 px-5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
            />
            <button className="absolute right-2 top-2 bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Top Rated Recipes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Top Rated Recipes</h2>
          <p className="text-lg mb-8 text-gray-600">
            Out of all the many recipes on Piece of Cake, these are our shining stars - the recipes we come back to again and again (and again).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-56 overflow-hidden">
                  <RecipeImage imageUrl={recipe.imageUrl || ''} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center space-x-1 text-white">
                      <ShowRating rating={recipe.rating ?? null} reviews={recipe.reviews ?? 0}/>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-cyan-600 transition-colors">
                    <Link to={`${recipe.id}`}>
                      {recipe.title}
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center px-5 py-3 border border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-colors duration-200"
            >
              + View All Recipes
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;