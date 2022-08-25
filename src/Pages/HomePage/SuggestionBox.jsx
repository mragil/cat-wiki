import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function SuggestionBox() {
  const {
    isLoading, error, data: suggestions,
  } = useQuery(['allBreeds'], () => axios
    .get('http://localhost:3001/cats/breeds/all')
    .then((res) => res.data), {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading sayang...</div>;

  if (error) return <div>Error sayang...</div>;

  return (
    <div className="">
      <div className="flex items-start justify-start mt-2">
        <div className="p-4 bg-white rounded-3xl text-black h-60 overflow-scroll">
          <div>{suggestions.map((breed) => <div key={breed.id} className="mb-5">{breed.name}</div>)}</div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionBox;
