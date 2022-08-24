function LevelBar({ curLevel, maxLevel }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxLevel }, (_, i) => {
        if (i < curLevel) {
          return <div key={i} className="h-2 w-10 bg-black rounded-md" />;
        }
        return <div key={i} className="h-2 w-10 bg-gray-400 rounded-md" />;
      })}
    </div>

  );
}

export default LevelBar;
