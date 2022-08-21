import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CatFrame from '../../Components/CatFrame';

function MostSearch() {
  const navigate = useNavigate();
  const {
    isLoading, error, data,
  } = useQuery(['mostSearchedData'], () => axios
    .get('http://localhost:3001/cats/most-searched')
    .then((res) => res.data));

  if (isLoading) {
    return (
      <div>
        <h1>Loading sayang...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error sayang...</h1>
      </div>
    );
  }

  const navigateToDetails = (breedId) => {
    navigate(`/cat/details/${breedId}`);
  };

  return (
    <div className="p-10">
      <p className="font-bold text-3xl">Most Searched Breeds</p>
      <div className="h-1 w-12 bg-black rounded-md mb-12" />
      <p className="font-bold text-xl mb-3">66+ Breeds For you to discover </p>
      <div className="grid grid-cols-2 gap-5 md:flex md:justify-between">
        {data.map((cat) => (
          <div role="presentation" className="text-center cursor-pointer" key={cat.id} onClick={() => navigateToDetails(cat.id)}>
            <CatFrame image={cat.image.url} className="w-72 h-72 rounded-3xl" />
            <p className="mt-4 font-bold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MostSearch;
