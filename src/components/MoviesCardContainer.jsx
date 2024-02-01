import { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import MoviesCard from "./MoviesCard";
import MoviesListContext from "../store/MoviesListData";

const MoviesCardContainer = () => {
  const { MoviesList } = useContext(MoviesListContext);
  const { fetching } = useContext(MoviesListContext);

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">Movies | Shows</h2>
      </div>
      <div className="mt-12">{fetching && <LoadingSpinner />}</div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {MoviesList.map((movie) => (
          <MoviesCard key={movie.show.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesCardContainer;
