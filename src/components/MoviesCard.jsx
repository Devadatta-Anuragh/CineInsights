import Button from "./Button";

const MoviesCard = ({ movie }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full border rounded-xl shadow-lg ">
      {movie.show.image != null ? (
        <img
          src={movie.show.image.original}
          alt="img"
          className="w-full h-[280px] rounded-t-xl"
        />
      ) : (
        <img src="/ImgNotFound.jpg" className="h-[280px] w-full rounded-xl" />
      )}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin pl-2">
        {movie.show.name}
      </h3>
      <div className=" flex justify-start gap-2.5 pl-2">
        <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
          {movie.show.rating.average != null
            ? `Rating : ${movie.show.rating.average}`
            : "Rating : Not Avaialble"}
        </p>
      </div>
      <div className=" flex justify-start gap-2.5 pl-2">
        <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
          {movie.show.language != null
            ? `Language : ${movie.show.language}`
            : "Language : Not Avaialble"}
        </p>
      </div>
      <div className=" flex justify-start gap-2.5 pl-2">
        <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
          {movie.show.genres != null
            ? `Genre : ${movie.show.genres}`
            : "Genre : Not Avaialble"}
        </p>
      </div>
      <Button label="More details" movie={movie} />
    </div>
  );
};

export default MoviesCard;
