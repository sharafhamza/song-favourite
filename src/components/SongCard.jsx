const SongCard = ({ song, index, handleAddFavourite }) => {
  const { name, added, artist, image } = song;

  return (
    <div className="flex justify-center flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-md space-x-4 max-w-48 ">
      {/* Album Art */}
      <img
        className="w-40 h-40 rounded-md object-cover"
        src={image}
        alt={`${name} cover`}
      />

      {/* Song Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-400 truncate">{artist}</p>
      </div>

      {/* Add to Favourite Button */}
      <button
        onClick={() => handleAddFavourite(index)}
        className={`px-4 py-2 mt-2 ${
          added ? "bg-orange-500" : "bg-green-500"
        } text-sm font-medium rounded-lg focus:outline-none`}
      >
        {added ? "Added" : "Add to Favourite"}
      </button>
    </div>
  );
};

export default SongCard;
