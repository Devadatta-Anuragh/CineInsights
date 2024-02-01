import { createContext, useEffect, useReducer, useState } from "react";

const MoviesListContext = createContext({
  MoviesList: [],
  Movie: [],
  fetching: false,
  onGetPostsBtn: () => {},
  movieInfoBtn: () => {},
});
export default MoviesListContext;

export const MoviesListReducer = (currMoviesList, action) => {
  let newMoviesList = currMoviesList;

  if (action.type === "GET_POSTS") {
    newMoviesList = action.payload.data;
  } else if (action.type === "MOVIE_INFO") {
    newMoviesList = currMoviesList.filter(
      (movie) => movie.show.id === action.payload.movieId
    );
  }
  return newMoviesList;
};

export const MovieReducer = (currMovie, action) => {
  let newMovie = currMovie;

  if (action.type === "MOVIE_INFO") {
    newMovie = action.payload.clickedMovie;
  }

  return newMovie;
};

export const MoviesListContextProvider = ({ children }) => {
  const [MoviesList, dispatchMoviesList] = useReducer(MoviesListReducer, []);
  const [Movie, dispatchMovie] = useReducer(MovieReducer, []);

  const [fetching, setFetching] = useState(false);

  const onGetPostsBtn = (data) => {
    dispatchMoviesList({
      type: "GET_POSTS",
      payload: {
        data,
      },
    });
  };

  const movieInfoBtn = (clickedMovie) => {
    dispatchMovie({
      type: "MOVIE_INFO",
      payload: {
        clickedMovie,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://api.tvmaze.com/search/shows?q=all", { signal })
      .then((res) => res.json())
      .then((data) => {
        onGetPostsBtn(data);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <MoviesListContext.Provider
      value={{ MoviesList, onGetPostsBtn, fetching, movieInfoBtn, Movie }}
    >
      {children}
    </MoviesListContext.Provider>
  );
};
