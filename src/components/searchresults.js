import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";
import { Card, Button } from "react-bootstrap";
import { FcFlashOff, FcFlashOn, FcCheckmark, FcDislike } from "react-icons/fc";
import StarRatings from "react-star-ratings";
import Trips from "../info-json";
import { Link } from "react-router-dom";
import Tripdetails from "./tripdetails";
class Searchresults extends React.Component {
  constructor() {
    super();
    this.state = {
      showComponent: false,
      data: Trips,
    };
  }

  detail(id) {
    this.setState({
      data: this.state.data.filter((trip) => trip.id === id),
      showComponent: true,
    });
  }
  render() {
    const trips = this.props.dataFromParent;
    return (
      <div>
        <div className="container">
          {/*Heading*/}
          <h2 className="heading">Trips</h2>
        </div>
        <div className="container">
          {/*Heading*/}

          {trips.map((trip) => (
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
                  <button onClick={() => this.detail(trip.id)}>
                    View Trip Details
                  </button>{" "}
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
    );
  }
}
export default Searchresults;
