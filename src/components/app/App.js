import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieAddListAdd from "../movie-list/movie-list";
import MovieListAdd from "../movieform/movie-form-add";
const App = () => {
  const data = [
    { name: "Empario Osmon ", viewers: 1290, id: 1, favourite: true },
    { name: "Omar", viewers: 1922, id: 2, favourite: true },
    { name: "Umar Ibn Hattob", viewers: 908, id: 3, favourite: false },
  ];
  return (
    <div className="app font-monofcase">
      <div className="content">
        <AppInfo />
        <div className="serch-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MovieAddListAdd data={data} />
        <MovieListAdd />
      </div>
    </div>
  );
};

export default App;
