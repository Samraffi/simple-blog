import { FaPrint, FaShare } from 'react-icons/fa';

interface RecipeActionsProps {
  onEdit: () => void;
}

const RecipeActions = ({ onEdit }: RecipeActionsProps) => {
  return (
    <div className="flex space-x-3">
      <button 
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded-md flex items-center"
        onClick={onEdit}
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-md flex items-center">
        <FaPrint className="mr-1" /> Print
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md flex items-center">
        <FaShare className="mr-1" /> Share
      </button>
    </div>
  );
};

export default RecipeActions;
