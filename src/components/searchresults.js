import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";
import { Card, Button } from "react-bootstrap";
import { FcFlashOff, FcFlashOn, FcCheckmark, FcDislike } from "react-icons/fc";
import StarRatings from "react-star-ratings";
import Trips from "../info-json";
import { Link } from "react-router-dom";
import Tripdetails from "./tripdetails";
import { BsFillBackspaceFill } from "react-icons/bs";
class Searchresults extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: true,
      data: Trips,
      //   search: false,
      currentView: false,
      //   foundTrips: [],
    };
    this.render = this.render.bind(this);
    this.foundTrips = [];
  }

  detail(id) {
    this.setState({
      data: Trips.filter((trip) => trip.id === id),
      searchResults: false,
    });
  }

  getData() {
    // this.setState({
    //   data: Trips,
    // });
    // this.state.data = Trips;
  }

  back() {
    this.setState({
      searchResults: false,
    });
  }
  render() {
    typeof this.props.dataFromParent === "undefined"
      ? (this.foundTrips = this.state.data)
      : (this.foundTrips = this.props.dataFromParent);
    const currentView = this.state.searchResults ? (
      <div>
        <div className="container">
          {/*Heading*/}
          <h4 className="heading">
            <Button variant="outline-warning" onClick={() => this.back()}>
              <BsFillBackspaceFill />
            </Button>
          </h4>
          <h2 className="heading"> Trips</h2>
        </div>
        <div className="container">
          {/*Heading*/}

          {this.foundTrips.map((trip) => (
            <li key={trip.id}>
              <Card className="text-center">
                <Card.Header as="h5">{trip.request_date}</Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <FcFlashOn />
                    {trip.pickup_location}
                  </Card.Title>
                  <Card.Title>
                    {" "}
                    <FcFlashOff />
                    {trip.dropoff_location}
                  </Card.Title>
                  {trip.cost_unit} {trip.cost}
                  <StarRatings
                    rating={trip.driver_rating}
                    starRatedColor="blue"
                    numberOfStars={5}
                    isSelectable={false}
                    name="rating"
                  />
                  {/* <Link to="/tripdetails">View Trip Details</Link> */}
                  <Button
                    variant="outline-success"
                    onClick={() => this.detail(trip.id)}
                  >
                    View Trip Details
                  </Button>{" "}
                  {this.state.showComponent ? (
                    <Tripdetails dataFromParent={this.state.data} />
                  ) : null}
                </Card.Body>
                <Card.Footer className="text-muted">
                  {trip.status}{" "}
                  {trip.status === "COMPLETED" ? (
                    <FcCheckmark />
                  ) : (
                    <FcDislike />
                  )}
                </Card.Footer>
              </Card>
            </li>
          ))}
        </div>
      </div>
    ) : (
      <Tripdetails getData={this.getData} dataFromParent={this.state.data} />
    );
    return <div>{currentView}</div>;
  }
}
export default Searchresults;
