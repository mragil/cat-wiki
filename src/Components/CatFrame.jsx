function CatFrame({ image, className = '' }) {
  return (
    <div className="">
      <img src={image} alt="cat" className={className} />
    </div>
  );
}

export default CatFrame;
