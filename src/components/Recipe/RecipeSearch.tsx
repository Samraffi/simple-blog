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
      </div>
    </div>
  );
};

export default RecipeSearch;