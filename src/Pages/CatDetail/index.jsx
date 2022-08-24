import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CatFrame from '../../Components/CatFrame';

function CatDetail() {
  const { breedId } = useParams();
  const {
    isLoading, error, data,
  } = useQuery([breedId], () => axios
    .get(`http://localhost:3001/cats/breeds/${breedId}`)
    .then((res) => res.data));

  if (isLoading) return <div>Loading sayang...</div>;

  if (error) return <div>Error sayang...</div>;

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-7">
        <CatFrame image={data.image.url} className="w-72 h-72 rounded-3xl mb-5" />
        <div>
          <h1 className="font-bold text-3xl text-center mb-3">{data.name}</h1>
          <p className="text-justify mb-3">{data.description}</p>
          <div>
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
          <div>
            <p>
              Adaptability:
              {' '}
              {data.adaptability}
            </p>
            <p>
              Affection Level:
              {' '}
              {data.affection_level}
              {' '}
            </p>
            <p>
              Child Friendly:
              {' '}
              {data.child_friendly}
              {' '}
            </p>
            <p>
              Grooming:
              {' '}
              {data.grooming}
              {' '}
            </p>
            <p>
              Intelligence:
              {' '}
              {data.intelligence}
              {' '}
            </p>
            <p>
              Health Issues:
              {' '}
              {data.health_issues}
              {' '}
            </p>
            <p>
              Social Needs:
              {' '}
              {data.social_needs}
              {' '}
            </p>
            <p>
              Stranger Friendly:
              {' '}
              {data.stranger_friendly}
              {' '}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center mb-3">Other Photos</h1>
        <div className="text-center">
          <CatFrame image={data.image.url} className="w-72 h-72 rounded-3xl" />
        </div>

      </div>
    </>
  );
}

export default CatDetail;
