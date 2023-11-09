import "./movie-form-sdd.css";
const MovieListAdd = () => {
  return (
    <div className="MovieListAdd">
      <h3>Yangi Kino qo'shish</h3>
      <form className="add-from d-flex gap-4 ">
        <input
          type="text "
          className="form-control new-post-label"
          placeholder="Qanday Kino ?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Nechi marotaba ko'rilgan ?"
        />
        <button type="button" className="btn btn-outline-dark ">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default MovieListAdd;
