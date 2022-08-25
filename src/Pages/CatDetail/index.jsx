import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CatFrame from '../../Components/CatFrame';
import LevelBar from '../../Components/LevelBar';
import OtherPhoto from './OtherPhoto';

function CatDetail() {
  const { breedId } = useParams();
  const {
    isLoading, error, data,
  } = useQuery(['cat-details'], () => axios
    .get(`http://localhost:3001/cats/breeds/${breedId}`)
    .then((res) => res.data));

  if (isLoading) return <div>Loading sayang...</div>;

  if (error) return <div>Error sayang...</div>;

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-7 md:flex-row md:justify-start md:items-center md:gap-10">
        <CatFrame image={data.image.url || '/image/image-3.png'} className="w-full h-72 rounded-3xl mb-5 md:justify-center" />
        <div>
          <h1 className="font-bold text-3xl text-center mb-3">{data.name}</h1>
          <p className="text-justify mb-3">{data.description}</p>
          <div className="flex flex-col gap-5 mb-5">
            <p>
              Temprament :
              {' '}
              {data.temperament}
              {' '}
            </p>
            <p>
              Origin :
              {' '}
              {data.origin}
            </p>
            <p>
              Lifespan :
              {' '}
              {data.life_span}
              {' '}
              years
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-level items-center">
              <span className="">Adaptability:</span>
              <LevelBar curLevel={data.adaptability} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Affection Level:</span>
              <LevelBar curLevel={data.affection_level} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Child Friendly:</span>
              <LevelBar curLevel={data.child_friendly} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Grooming:</span>
              <LevelBar curLevel={data.grooming} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Intelligence:</span>
              <LevelBar curLevel={data.intelligence} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Health Issues:</span>
              <LevelBar curLevel={data.health_issues} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Social Needs:</span>
              <LevelBar curLevel={data.social_needs} maxLevel={5} />
            </div>
            <div className="grid grid-cols-level items-center">
              <span className="">Stranger Friendly:</span>
              <LevelBar curLevel={data.stranger_friendly} maxLevel={5} />
            </div>
          </div>
        </div>
      </div>
      <OtherPhoto breedId={breedId} />
    </>
  );
}

export default CatDetail;
