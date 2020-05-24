import React from "react";
import "../Search.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import { FcFlashOff, FcFlashOn, FcCheckmark, FcDislike } from "react-icons/fc";
import StarRatings from "react-star-ratings";
import MapContainer from "./map";

class Tripdetails extends React.Component {
  render() {
    console.log(this.props.dataFromParent);
    const trips = this.props.dataFromParent;
    console.log(trips);
    return (
      <div>
        <div className="container">
          {/*Heading*/}
          <h2 className="heading">Trip Details</h2>
        </div>
        {trips.map((trip) => (
          <li key={trip.id}>
            <div className="container">
              <Card className="text-center">
                <Card.Header as="h5">
                  {trip.dropoff_date}
                  {trip.dropoff_date} {""} {trip.cost_unit}
                  {trip.cost}
                </Card.Header>
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
                </Card.Body>
              </Card>
              <CardGroup>
                <Card>
                  <Card.Img variant="top" src={trip.car_pic} />
                  <Card.Body>
                    <Card.Title>
                      {trip.car_make}
                      {trip.car_model}
                    </Card.Title>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Text>
                      Distance {trip.distance}
                      {trip.distance_unit}
                    </Card.Text>
                    <Card.Text>
                      Duration {trip.duration}
                      {trip.duration_unit}
                    </Card.Text>
                    <Card.Text>
                      Sub total {trip.cost_unit} {""}
                      {trip.cost}{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={trip.driver_pic} />
                  <Card.Body>
                    <Card.Title> {trip.driver_name}</Card.Title>
                    <StarRatings
                      rating={trip.driver_rating}
                      starRatedColor="blue"
                      numberOfStars={5}
                      isSelectable={false}
                      name="rating"
                    />
                  </Card.Body>
                </Card>
              </CardGroup>
              <Card>
                <MapContainer />
              </Card>
            </div>
          </li>
        ))}
      </div>
    );
  }
}
export default Tripdetails;
