import "./movie-list-item.css";
const MovieListItem = ({ name, viewer }) => {
  return (
    <li className="list-group-item d-flex  justify-content-between ">
      <span className="list-group-item-label">Osmon</span>
      <input
        type="number"
        className="list-group-item-input "
        defaultValue="901"
      />
      <div className="d-flex justify-content-center  align-align-items-center ">
        <button className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>

        <button className="btn-star btn-sm">
          <i className="fas fa-star"></i>
        </button>
      </div>
    </li>
  );
};

export default MovieListItem;
