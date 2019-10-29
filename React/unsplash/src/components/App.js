import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

export default class App extends Component {
  state = {
    keyword: "",
    images: []
  };

  handleKeyword = word => {
    this.setState({ keyword: word });
  };

  onSubmit = async () => {
    const response = await unsplash.get("search/photos", {
      params: { query: this.state.keyword, page: 1, per_page: 5 }
    });
    this.setState({ images: response.data.results });
    console.log(response);
  };

  onClick = async () => {
    const response2 = await unsplash.get("search/photos", {
      params: { query: this.state.keyword, page: 2, per_page: 5 }
    });
    this.setState({ images: response2.data.results });
    console.log("hhhhh", response2);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          handleKeyword={this.handleKeyword}
          onSubmit={this.onSubmit}
          onClick={this.onClick}
        />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}
