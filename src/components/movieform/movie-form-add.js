import { Component } from "react";
import "./movie-form-sdd.css";

class MovieListAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      viewers: "",
    };
  }

  changeHanderInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();

    this.props.addForm({
      name: this.state.name,
      viewers: this.state.viewers,
    });

    this.setState({
      name: "",
      viewers: "",
    });
  };

  render() {
    const { name, viewers } = this.state;
    return (
      <div className="MovieListAdd">
        <h3>Yangi Kino qo'shish</h3>
        <form className="add-from d-flex gap-4 " onSubmit={this.addFormHandler}>
          <input
            name="name"
            type="text "
            className="form-control new-post-label"
            placeholder="Qanday Kino ?"
            onChange={this.changeHanderInput}
            value={name}
          />
          <input
            type="text"
            className="form-control new-post-label"
            name="viewers"
            placeholder="Nechi marotaba ko'rilgan ?"
            onChange={this.changeHanderInput}
            value={viewers}
          />
          <button type="submit" className="btn btn-outline-dark ">
            Qo'shish
          </button>
        </form>
      </div>
    );
  }
}

export default MovieListAdd;
