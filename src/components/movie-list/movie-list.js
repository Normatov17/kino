import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";
const MovieList = ({ data, onDelete }) => {
  return (
    <ul className="movie-list">
      {data.map((item) => (
        <MovieListItem
          key={item.id}
          name={item.name}
          viewers={item.viewers}
          favourite={item.favourite}
          onDelete={() => onDelete(item.id)}
        />
        // <MovieListItem {...item} />
      ))}
    </ul>
  );
};

export default MovieList;
