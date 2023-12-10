import { Component } from "react";
import "./movie-list-item.css";

class MovieListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false,
      like: false,
    };
  }

  onFavorite = () => {
    this.setState((prevState) => ({
      favourite: !prevState.favourite,
    }));
  };

  onLike = () => {
    this.setState(({ like }) => ({
      like: !like,
    }));
  };
  render() {
    const { name, viewers } = this.props;
    const { favourite, like } = this.state;
    return (
      <li
        className={`list-group-item d-flex  justify-content-between ${
          favourite && "favourite"
        }  ${like && "like"}`}
      >
        <span onClick={this.onLike} className="list-group-item-label">
          {name}
        </span>
        <input
          type="number"
          className="list-group-item-input "
          defaultValue={viewers}
        />
        <div className="d-flex justify-content-center   align-align-items-center ">
          <button className="btn-cookie btn-sm" onClick={this.onFavorite}>
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
  }
}

export default MovieListItem;
