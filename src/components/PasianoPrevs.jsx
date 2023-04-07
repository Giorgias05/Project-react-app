import { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaTemperatureLow } from "react-icons/fa";
import { SiWindicss } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";
import { BsClouds } from "react-icons/bs";

class PasianoPrev extends Component {
  state = {
    weather: {},
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };



  fetchPasiano = async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=45.8474&lon=12.6281&appid=0b06337c917c360bf8b12646bc3deb78&units=metric"
      );

      if (response.ok) {
        const data = await response.json();

        this.setState({
          weather: data,
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`
      });
    }
  };

  componentDidMount = () => {
    this.fetchPasiano();
  };


  
  render() {
    const { weather, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    return (
      <div
        className="bg-secondary bg-opacity-25 rounded border border-dark-subtle my-4 mx-auto"
        style={{ width: "50%" }}
      >
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6} className="d-flex align-items-center flex-column">
            <h2>
              {weather.name} ({weather.sys.country})
            </h2>
            <p>
              <FaTemperatureLow className="text-danger" /> {weather.main.temp}°C
            </p>
            <p>
              <BsClouds /> {weather.weather[0].description}
            </p>
            <p>
              <WiHumidity className="text-primary fs-3" /> {weather.main.humidity}%
            </p>
            <p>
              <SiWindicss className="text-primary" /> {weather.wind.speed} km/h
            </p>
          </Col>
          <Col xs={12} md={6} className="text-end p-0">
            <Image
              src="https://mediaim.expedia.com/destination/1/fde28f2c9a98076f585c10cc5c16e6c7.jpg?impolicy=fcrop&w=512&h=288&q=medium"
              style={{ width: "320px", aspectRatio: "1/0.8" }}
              className="rounded"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PasianoPrev;
