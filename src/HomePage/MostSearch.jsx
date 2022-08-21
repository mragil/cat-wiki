import CatFrame from '../Components/CatFrame';

function MostSearch() {
  return (
    <div className="p-10">
      <p className="font-bold text-3xl">Most Searched Breeds</p>
      <div className="h-1 w-12 bg-black rounded-md mb-12" />
      <p className="font-bold text-xl mb-3">66+ Breeds For you to discover </p>
      <div className="grid grid-cols-2 gap-5 md:flex md:justify-between">
        <div className="text-center">
          <CatFrame image="/image/image-1.png" className="w-72 h-72" />
          <p className="mt-4 font-bold">Bengal</p>
        </div>
        <div className="text-center">
          <CatFrame image="/image/image-1.png" className="w-72 h-72" />
          <p className="mt-4 font-bold">Savannah</p>
        </div>
        <div className="text-center">
          <CatFrame image="/image/image-1.png" className="w-72 h-72" />
          <p className="mt-4 font-bold">Norwegian Forest Cat</p>
        </div>
        <div className="text-center">
          <CatFrame image="/image/image-1.png" className="w-72 h-72" />
          <p className="mt-4 font-bold">Selkirk Rex</p>
        </div>
      </div>
    </div>
  );
}

export default MostSearch;
