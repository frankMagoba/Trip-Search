import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";
import { Card, Button } from "react-bootstrap";
import { FcFlashOff, FcFlashOn, FcCheckmark, FcDislike } from "react-icons/fc";
import StarRatings from "react-star-ratings";
import Trips from "../info-json";

class Searchresults extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.dataFromParent);
    this.state = {
      data: Trips,
    };
    console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <div className="container">
          {/*Heading*/}
          <h2 className="heading">Trips</h2>
        </div>
        <div className="container">
          {/*Heading*/}

          {this.state.data.map((trip) => (
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
                  <Button variant="primary">View Trip Details</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {/* Complete <FcCheckmark /> / Cancelled <FcDislike /> */}
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
