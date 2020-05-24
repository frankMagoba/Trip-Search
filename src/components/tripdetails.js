import React from "react";
import { Checkbox, Radio } from "semantic-ui-react";
import "../Search.css";
import { Card, Button } from "react-bootstrap";
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
          {/*Heading*/}
          <Card className="text-center">
            <Card.Header as="h5">Time</Card.Header>
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
              <Card.Text>
                Amount
                <StarRatings
                  rating={2}
                  starRatedColor="blue"
                  numberOfStars={5}
                  isSelectable={false}
                  name="rating"
                />
              </Card.Text>
              <Button variant="primary">View Trip Details</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Complete <FcCheckmark /> / Cancelled <FcDislike />
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  }
}
export default Tripdetails;
