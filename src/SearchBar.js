import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = event => {
    if (this.props.filteredAuthors(event.target.value)) {
      this.setState({ query: this.props.filteredAuthors(event.target.value) });
    } else {
      this.setState({ query: event.target.value });
    }
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <div onClick={this.handleChange} className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
