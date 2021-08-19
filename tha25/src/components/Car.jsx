import { Carousel } from "react-bootstrap";

const Car = () => {
    return (
        <>
        <Carousel>
        <Carousel.Item>
          <img
            style={{ maxHeight: "500px" }}
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?nature"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Nature</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "500px" }}
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?water"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Water</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "500px" }}
            className="d-block w-100"
            src="https://source.unsplash.com/1600x900/?sky"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Sky</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}

export default Car;