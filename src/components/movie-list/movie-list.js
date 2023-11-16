import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";
const MovieList = ({ name, viewer }) => {
  // console.log(data);
  return (
    <div className="movie-list">
      <MovieListItem />
    </div>
  );
};

export default MovieList;
