import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MoviesListContext from "../store/MoviesListData";

const Button = ({ label, movie, iconURL }) => {
  const { movieInfoBtn } = useContext(MoviesListContext);
  const navigate = useNavigate();

  const handleMoreDetailsBtn = (e) => {
    e.preventDefault();
    let clickedMovie = movie;
    movieInfoBtn(clickedMovie);
    navigate("/movie-info");
  };
  return (
    <button
      className={
        "flex justify-center items-center gap-2 mt-2 px-7 py-4 border font-montserrat text-lg leading-none bg-slate-400 border-coral-red rounded-b-lg"
      }
      onClick={(e) => {
        handleMoreDetailsBtn(e);
      }}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
