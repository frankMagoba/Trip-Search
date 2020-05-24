import React from "react";
import Trips from "../info-json";
import { Checkbox, Radio } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Searchresults from "./searchresults";
import { Button } from "react-bootstrap";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      results: {},
      loading: false,
      data: Trips,
    };
    // this.handleChanges()
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
  };

  handleChange = (event) => {
    const query = event.target.value;
    console.log(event);
    // console.log(Trips);
    const tr = this.state.data.filter((trip) => trip.status === "COMPLETED");
    console.log(tr);
  };

  handleChanges(event) {
    var x = document.getElementsByClassName("App");
    x.style.display = "none";
  }

  tripFilters = () => {
    const { data, value } = this.state;
    const style = (
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
      />
    );
    const CheckboxExampleChecked = () => (
      <Checkbox
        label="Include Cancelled Trips"
        defaultChecked
        onChange={this.handleChange}
      />
    );
    const Underthree = () => (
      <Radio toggle label="Under 3 Km" onChange={this.handleChange} />
    );
    const Anydistance = () => (
      <Radio toggle label="Any" onChange={this.handleChange} />
    );
    const Threetoeight = () => (
      <Radio toggle label="3 to 8 Km" onChange={this.handleChange} />
    );
    const Eighttofifteen = () => (
      <Radio toggle label="6 to 15 Km" onChange={this.handleChange} />
    );
    const Morethanfifteen = () => (
      <Radio toggle label="More tham 15km" onChange={this.handleChange} />
    );
    const Underthreet = () => (
      <Radio toggle label="Under 5 min" onChange={this.handleChange} />
    );
    const Anydistancet = () => (
      <Radio toggle label="Any" onChange={this.handleChange} />
    );
    const Threetoeightt = () => (
      <Radio toggle label="5 to 10 min" onChange={this.handleChange} />
    );
    const Eighttofifteent = () => (
      <Radio toggle label="10 to 20 min" onChange={this.handleChange} />
    );
    const Morethanfifteent = () => (
      <Radio toggle label="More tham 20 min" onChange={this.handleChange} />
    );
    return (
      <div>
        {" "}
        <div className="container">
          <div>
            {style}
            <CheckboxExampleChecked />
          </div>
        </div>
        <div className="rowC">
          <div className="container">
            <h4>Distance</h4>
            <div>
              <Anydistance />
            </div>
            <div>
              <Underthree />
            </div>
            <div>
              <Threetoeight />
            </div>
            <div>
              <Eighttofifteen />
            </div>
            <div>
              <Morethanfifteen />
            </div>
          </div>
          <div className="container">
            <h4>Time</h4>
            <div>
              <Anydistancet />
            </div>
            <div>
              <Underthreet />
            </div>
            <div>
              <Threetoeightt />
            </div>
            <div>
              <Eighttofifteent />
            </div>
            <div>
              <Morethanfifteent />
            </div>
          </div>{" "}
        </div>
        <Link to="/trips">Search</Link>
      </div>
    );
  };
  render() {
    return (
      <div>
        {" "}
        <div className="container">
          {/*Heading*/}
          <h2 className="heading">Trip Search</h2>
          {/*Search Input*/}
          <label className="search-label" htmlFor="search-input">
            <input
              type="text"
              id="search-input"
              placeholder="Search..."
              onChange={this.handleOnInputChange}
            />
          </label>
          {this.tripFilters()}
        </div>
        <div  style={{
          display: "none"
        }}>
          {" "}
          <Searchresults dataFromParent={this.state.data} />
        </div>
      </div>
    );
  }
}
export default Search;
