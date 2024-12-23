const SongCard = ({ song }) => {
  const handleAddFavourite = () => {
    alert(`Added "${song.name}" by ${song.artist} to favourites!`);
  };

  console.log(song.image);
  return (
    <div className="flex justify-center flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-md space-x-4 max-w-48 ">
      {/* Album Art */}
      <img
        className="w-40 h-40 rounded-md object-cover"
        src={song.image}
        alt={`${song.name} cover`}
      />

      {/* Song Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold truncate">{song.name}</h3>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
      </div>

      {/* Add to Favourite Button */}
      <button
        onClick={handleAddFavourite}
        className="px-4 py-2 mt-2 bg-green-500 text-sm font-medium rounded-lg hover:bg-green-600 focus:outline-none"
      >
        Add to Favourite
      </button>
    </div>
  );
};

export default SongCard;
