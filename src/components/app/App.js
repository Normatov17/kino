import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieAddListAdd from "../movie-list/movie-list";
import MovieListAdd from "../movieform/movie-form-add";

const App = () => {
  return (
    <div className="app font-monofcase">
      <div className="content">
        <AppInfo />
        <div className="serch-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieAddListAdd />
        <MovieListAdd />
      </div>
    </div>
  );
};

export default App;
