import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CatFrame from '../../Components/CatFrame';

function OtherPhoto({ breedId }) {
  const { isLoading, error, data } = useQuery(['other-photos'], () => axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=8`)
    .then((res) => res.data));

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mb-3 md:text-left">Other Photos</h1>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {data.map((image) => <CatFrame key={image.id} image={image.url} className="w-72 h-72 rounded-3xl" />)}
      </div>
    </div>
  );
}

export default OtherPhoto;
