import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null,
    authors: authors,
    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  filterAuthors = query => {
    this.setState({
      filteredAuthors: authors.filter(author => {
        const name = author.first_name + " " + author.last_name;
        if (query) {
          return name.toLowerCase().includes(query.toLowerCase());
        } else {
          return true;
        }
      })
    });
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar selectAuthor={this.selectAuthor} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor === null ? (
              <AuthorsList
                authors={this.state.filteredAuthors}
                selectAuthor={this.selectAuthor}
                filteredAuthors={this.filterAuthors}
              />
            ) : (
              <AuthorDetail author={this.state.currentAuthor} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
