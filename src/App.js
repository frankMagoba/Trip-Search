import React from "react";
import "./App.css";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: true,
      searchResults: false,
      tripDetails: false
    };
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
export default App;
