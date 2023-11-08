import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";

const App = () => {
  return (
    <div className="app font-monofcase">
      <div className="content">
        <AppInfo />
        <div className="serch-panel">
          <SearchPanel />
          <AppFilter />
        </div>
      </div>
    </div>
  );
};

export default App;
