import { useState } from 'react';
import { CATEGORIES, TOP_RATED_RICEPES } from '../constants/recipe';
import { RatingProps, CategorySectionProps } from '../types/recipe';

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Rating stars component
  const RatingStars = ({ rating }: RatingProps) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < fullStars ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : hasHalfStar && i === fullStars ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </span>
        ))}
      </div>
    );
  };

  // CategorySection component
  const CategorySection = ({ title, items }: CategorySectionProps) => {
    return (
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b border-gray-200 pb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="px-3 py-1.5 bg-gray-100 hover:bg-cyan-500 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  };

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
            {TOP_RATED_RICEPES.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center space-x-1 text-white">
                      <RatingStars rating={recipe.rating} />
                      <span className="text-sm ml-1">({recipe.rating})</span>
                      <span className="text-sm ml-2">{recipe.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-cyan-600 transition-colors">
                    <a href="#">{recipe.title}</a>
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
        
        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
          {/* Column 1 */}
          <div>
            <CategorySection title="Popular Categories" items={CATEGORIES.popular} />
            <CategorySection title="Recipes by Meal Type" items={CATEGORIES.mealType} />
            <CategorySection title="Recipes by Season" items={CATEGORIES.season} />
          </div>
          
          {/* Column 2 */}
          <div>
            <CategorySection title="Recipes by Course" items={CATEGORIES.course} />
            <CategorySection title="Recipes by Diet" items={CATEGORIES.diet} />
            <CategorySection title="Recipes by Method" items={CATEGORIES.method} />
          </div>
          
          {/* Column 3 */}
          <div>
            <CategorySection title="Recipes by Ingredient" items={CATEGORIES.ingredient} />
            <CategorySection title="Recipes by Series" items={CATEGORIES.series} />
          </div>
        </div>
      </div>
      
      {/* Newsletter Signup */}
      <div className="bg-gray-100 py-12 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">signup</h3>
              <p className="text-gray-600">for Email Updates</p>
            </div>
            <p className="text-center mb-6">Get a Free eCookbook with our top 25 recipes.</p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text" placeholder="First Name" className="px-4 py-3 rounded-md flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                <input type="email" placeholder="Email" className="px-4 py-3 rounded-md flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-gradient-to-r from-slate-300 from-5% to-cyan-500 text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition duration-300 text-lg">GO</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;