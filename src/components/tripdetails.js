import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";

class Tripdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }
  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({ query, results: {}, message: "" });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        // this.fetchSearchResults(1, query);
      });
    }
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
        onChange={this.handleChange}
      />
    );
    const Underthree = () => (
      <Radio label="Under 3 Km" onChange={this.handleChange} />
    );
    const Anydistance = () => (
      <Radio label="Any" onChange={this.handleChange} />
    );
    const Threetoeight = () => (
      <Radio label="3 to 8 Km" onChange={this.handleChange} />
    );
    const Eighttofifteen = () => (
      <Radio label="6 to 15 Km" onChange={this.handleChange} />
    );
    const Morethanfifteen = () => (
      <Radio label="More tham 15km" onChange={this.handleChange} />
    );
    const Underthreet = () => (
        <Radio label="Under 5 min" onChange={this.handleChange} />
      );
      const Anydistancet = () => (
        <Radio label="Any" onChange={this.handleChange} />
      );
      const Threetoeightt = () => (
        <Radio label="5 to 10 min" onChange={this.handleChange} />
      );
      const Eighttofifteent = () => (
        <Radio label="10 to 20 min" onChange={this.handleChange} />
      );
      const Morethanfifteent = () => (
        <Radio label="More tham 20min" onChange={this.handleChange} />
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
        <button>Search</button>
      </div>
    );
  };
  render() {
    const { message, loading } = this.state;
    const { query } = this.state;
    return (
      <div className="container">
        {/*Heading*/}
        <h2 className="heading">Trips</h2>
      </div>
    );
  }
}
export default Tripdetails;
