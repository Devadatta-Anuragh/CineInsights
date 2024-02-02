import React, { useContext } from "react";
import MoviesListContext from "../store/MoviesListData";
import { useNavigate } from "react-router-dom";

const MovieSummary = () => {
  const { Movie } = useContext(MoviesListContext);
  const { show } = Movie;
  const navigate = useNavigate();

  const handleBookticketBtn = (e) => {
    e.preventDefault();
    navigate("/movie-info/book-tickets", {
      state: { moviename: Movie.show.name },
    });
  };

  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex justify-center items-center ">
        {show.image != null && show.image.original != null ? (
          <img
            src={show.image.original}
            alt="shoe8"
            width={480}
            height={522}
            className="object-contain rounded-3xl shadow-2xl"
          />
        ) : (
          <img
            src="/ImgNotFound.jpg"
            alt="shoe8"
            width={480}
            height={522}
            className="object-contain rounded-3xl shadow-2xl"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          {show.name}
        </h1>
        <div className=" flex justify-start gap-2.5 font-medium mt-2">
          <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
            {show.rating.average != null
              ? `Rating : ${show.rating.average}`
              : "Rating : Not Avaialble"}
          </p>
        </div>
        <div className=" flex justify-start gap-2.5 font-medium">
          <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
            {show.language != null
              ? `Language : ${show.language}`
              : "Language : Not Avaialble"}
          </p>
        </div>
        <div className=" flex justify-start gap-2.5 font-medium">
          <p className="font-montserrat text-[15px] leading-normal text-slate-gray">
            {show.genres != null
              ? `Genre : ${show.genres}`
              : "Genre : Not Avaialble"}
          </p>
        </div>
        <p className="mt-4 lg:max-w-lg info-text">
          {show.summary.slice(3, -4)}
        </p>
        <div className="mt-11">
          <button
            type="button"
            className="text-white bg-gray-400 hover:bg-gray-300 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-400 dark:hover:bg-gray-400 focus:outline-none dark:focus:bg-gray-400"
            onClick={(e) => handleBookticketBtn(e)}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieSummary;
