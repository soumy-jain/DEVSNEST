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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </>
    )
}

export default Car;