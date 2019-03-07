import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";
class AuthorsList extends Component {
  render() {
    const authorCards = this.props.authors.map(author => (
      <AuthorCard
        selectAuthor={this.props.selectAuthor}
        key={author.first_name + author.last_name}
        author={author}
      />
    ));

    return (
      <div className="authors">
        <SearchBar filteredAuthors={this.props.filteredAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
