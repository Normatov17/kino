import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieAddListAdd from "../movie-list/movie-list";
import MovieListAdd from "../movieform/movie-form-add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Empario Osmon ", viewers: 1290, id: 1, favourite: true },
        { name: "Omar", viewers: 1922, id: 2, favourite: true },
        { name: "Umar Ibn Hattob", viewers: 908, id: 3, favourite: false },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((c) => c.id !== id),
    }));
  };

  addForm = (item) => {
    const newItem = { name: item.name, viewers: item.viewers, id: uuidv4() };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app font-monofcase">
        <div className="content">
          <AppInfo />
          <div className="serch-panel">
            <SearchPanel />
            <AppFilter />
          </div>
          <MovieAddListAdd data={data} onDelete={this.onDelete} />
          <MovieListAdd addForm={this.addForm} />
        </div>
      </div>
    );
  }
}

export default App;
