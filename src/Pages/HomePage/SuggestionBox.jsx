import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SuggestionBox() {
  const navigate = useNavigate();
  const {
    isLoading, error, data: suggestions,
  } = useQuery(['allBreeds'], () => axios
    .get('http://localhost:3001/cats/breeds/all')
    .then((res) => res.data), {
    refetchOnWindowFocus: false,
  });

  const navigateToDetails = (breedId) => {
    navigate(`/cat/details/${breedId}`);
  };

  if (isLoading) return <div>Loading sayang...</div>;

  if (error) return <div>Error sayang...</div>;

  return (
    <div className="">
      <div className="flex items-start justify-start mt-2">
        <div className="p-4 bg-white rounded-3xl text-black h-60 overflow-scroll">
          <div>{suggestions.map((breed) => <option key={breed.id} className="mb-5 cursor-pointer hover:bg-gray-100" onMouseDown={() => navigateToDetails(breed.id)}>{breed.name}</option>)}</div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionBox;
