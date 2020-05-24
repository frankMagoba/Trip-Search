import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";
import { Card, Button, CardGroup } from "react-bootstrap";
import { FcFlashOff, FcFlashOn, FcCheckmark, FcDislike } from "react-icons/fc";
import StarRatings from "react-star-ratings";

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

  render() {
    const { message, loading } = this.state;
    const { query } = this.state;
    return (
      <div>
        <div className="container">
          {/*Heading*/}
          <h2 className="heading">Trip Details</h2>
        </div>
        <div className="container">
          <Card className="text-center">
            <Card.Header as="h5">Time Amount</Card.Header>
            <Card.Body>
              <Card.Title>
                {" "}
                <FcFlashOn />
                Source
              </Card.Title>
              <Card.Title>
                {" "}
                <FcFlashOff />
                Destination
              </Card.Title>
            </Card.Body>
          </Card>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://hr.hava.bz/trips/c13.jpg" />
              <Card.Body>
                <Card.Title>Car Name</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Text>Distance </Card.Text>
                <Card.Text>Duration </Card.Text>
                <Card.Text>Sub total </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://hr.hava.bz/trips/p13.jpg" />
              <Card.Body>
                <Card.Title>Driver Name</Card.Title>
                <Card.Text>
                  <StarRatings
                    rating={2}
                    starRatedColor="blue"
                    numberOfStars={5}
                    isSelectable={false}
                    name="rating"
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}
export default Tripdetails;
