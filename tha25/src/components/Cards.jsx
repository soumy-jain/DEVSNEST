import { Button, Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
      <Card style={{ width: "18rem" , marginTop:"50px"}}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.text}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
