interface RecipeSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const RecipeSearch = ({ searchQuery, onSearchChange }: RecipeSearchProps) => {
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Search by keyword</h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full py-4 px-5 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
        />
        <button className="absolute right-2 top-2 bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RecipeSearch;
