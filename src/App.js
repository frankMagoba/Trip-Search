import React from "react";
import "./App.css";
import Search from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          background: "#282c34"
        }}
      >
        <Search />
      </div>
    );
  }
}
export default App;
