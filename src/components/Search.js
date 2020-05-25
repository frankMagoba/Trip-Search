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
      search: true,
      searchResults: false,
      tripDetails: false,
      data: Trips,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({
      data: this.state.data.filter((trip) => trip.driver_name === query),
    });
  };
  _onButtonClick() {
    this.setState({
      search: false
    });
  }
  handleCheck = (event) => {
    this.setState({ data: Trips });
  };

  handleThree = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.distance < 3),
    });
  };

  handleAny = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.distance > 0),
    });
  };
  handleEight = (event) => {
    this.setState({
      data: this.state.data.filter(
        (trip) => trip.distance > 3 || trip.distance < 8
      ),
    });
  };
  handleFifteen = (event) => {
    this.setState({
      data: this.state.data.filter(
        (trip) => trip.distance > 8 || trip.distance < 15
      ),
    });
  };

  handleMore = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.distance > 15),
    });
  };
  threeMin = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.duration < 5),
    });
  };
  anyTime = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.duration > 0),
    });
  };
  eightMins = (event) => {
    this.setState({
      data: this.state.data.filter(
        (trip) => trip.duration > 5 || trip.duration < 10
      ),
    });
  };
  tenMins = (event) => {
    this.setState({
      data: this.state.data.filter(
        (trip) => trip.duration > 10 || trip.duration < 20
      ),
    });
  };
  fiftMin = (event) => {
    this.setState({
      data: this.state.data.filter((trip) => trip.duration > 20),
    });
  };

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
        onChange={this.handleCheck}
      />
    );
    const Underthree = () => (
      <Radio toggle label="Under 3 Km" onChange={this.handleThree} />
    );
    const Anydistance = () => (
      <Radio toggle label="Any" onChange={this.handleAny} />
    );
    const Threetoeight = () => (
      <Radio toggle label="3 to 8 Km" onChange={this.handleEight} />
    );
    const Eighttofifteen = () => (
      <Radio toggle label="8 to 15 Km" onChange={this.handleFifteen} />
    );
    const Morethanfifteen = () => (
      <Radio toggle label="More tham 15km" onChange={this.handleMore} />
    );
    const Underthreet = () => (
      <Radio toggle label="Under 5 min" onChange={this.threeMin} />
    );
    const Anydistancet = () => (
      <Radio toggle label="Any" onChange={this.anyTime} />
    );
    const Threetoeightt = () => (
      <Radio toggle label="5 to 10 min" onChange={this.eightMins} />
    );
    const Eighttofifteent = () => (
      <Radio toggle label="10 to 20 min" onChange={this.tenMins} />
    );
    const Morethanfifteent = () => (
      <Radio toggle label="More tham 20 min" onChange={this.fiftMin} />
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
        {/* <Link to="/trips">Search</Link> */}
      </div>
    );
  };
  render() {
    const trips = this.state.data;
    const currentView = this.state.search ? (
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
        <div
        //   style={{
        //     display: "none",
        //   }}
        >
          <Button className="ml-4" onClick={this._onButtonClick}>
            Search
          </Button>
        </div>
      </div>
    ) : (
      <Searchresults dataFromParent={this.state.data} />
    );
    return <div>{currentView}</div>;
  }
}
export default Search;
