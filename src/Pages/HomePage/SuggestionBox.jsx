import { useNavigate } from 'react-router-dom';

function SuggestionBox({ suggestions }) {
  const navigate = useNavigate();

  const navigateToDetails = (breedId) => {
    navigate(`/cat/details/${breedId}`);
  };

  return (
    <div>
      <div className="flex items-start justify-start mt-2">
        <div className={`p-4 bg-white rounded-3xl text-black ${suggestions.length > 1 ? 'h-60' : 'h-14'} w-60 overflow-scroll`}>
          {suggestions.length > 0
            ? <div>{suggestions.map((breed) => <option key={breed.id} className="mb-5 cursor-pointer hover:bg-gray-100" onMouseDown={() => navigateToDetails(breed.id)}>{breed.name}</option>)}</div>
            : <h1>Cat breed not found!</h1> }
        </div>
      </div>
    </div>
  );
}

export default SuggestionBox;
