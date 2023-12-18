import { Component } from "react";
import "./movie-form-sdd.css";

class MovieListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewrs: "1",
    };
  }

  changeHanderInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, viewrs } = this.state;
    const { addForm } = this.props;
    return (
      <div className="MovieListAdd">
        <h3>Yangi Kino qo'shish</h3>
        <form className="add-from d-flex gap-4 " onSubmit={addForm}>
          <input
            name="name"
            type="text "
            className="form-control new-post-label"
            placeholder="Qanday Kino ?"
            onChange={this.changeHanderInput}
            value={name}
          />
          <input
            name="viewrs"
            type="number"
            className="form-control new-post-label"
            placeholder="Nechi marotaba ko'rilgan ?"
            onChange={this.changeHanderInput}
            value={viewrs}
          />
          <button type="button" className="btn btn-outline-dark ">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MovieListAdd;
