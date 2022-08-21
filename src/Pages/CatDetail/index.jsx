import { useParams } from 'react-router-dom';

function CatDetail() {
  const { breedId } = useParams();
  return (
    <div>
      CatDetail
      {' '}
      {breedId}
    </div>
  );
}

export default CatDetail;
