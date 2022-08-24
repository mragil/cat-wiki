function CatFrame({ image, className = '' }) {
  return (
    <div className="">
      <img src={image} alt="cat" className={`${className}`} loading="lazy" />
    </div>
  );
}

export default CatFrame;
