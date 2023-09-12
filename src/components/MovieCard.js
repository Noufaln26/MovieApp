const MovieCard = ({ movie, index }) => {
  const breakWord = (word) => {
    if (word.length <= 11) return word;
    return `${word.slice(0, 9)}...`;
  };

  return (
    <div className="flex flex-col">
      <img
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "./images/placeholder_for_missing_posters.png";
        }}
        src={`/images/${movie["poster-image"]}`}
        alt={`${movie.name} poster`}
        width={200}
        height={300}
        loading="lazy"
      />
      <p className="mt-2 text-sm text-left">{breakWord(movie.name)}</p>
    </div>
  );
};

export default MovieCard;
