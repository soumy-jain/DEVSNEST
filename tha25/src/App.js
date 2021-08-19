import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Car";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Carousel/>
      <Container>
        <Row>
        <Col>
            <Cards src="https://source.unsplash.com/1600x900/?earth" text="Earth"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?sky" text="Sky"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?scenary" text="GreenLand"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?scenery" text="Village"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?galaxy?" text="Galaxy"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?water" text="Water"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?space" text="Space"/>
          </Col>
          <Col>
            <Cards src="https://source.unsplash.com/1600x900/?nature" text="Sea"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
