import "./app-info.css";
const AppInfo = ({ allMovies, favouriteMovie }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercase ">Barcha kinolar soni: {allMovies}</p>
      <p className="fs-4 text-uppercase ">
        Sevimli Kinolar Soni: {favouriteMovie}
      </p>
    </div>
  );
};

export default AppInfo;
