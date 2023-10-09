import React from 'react'
import './project.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
export default function Projects() {
  return (
    <div className='main-bg' id="projects">
      <Container>
        <Row>
          <div className='text-white mx-auto py-5 text-center'>
            <h1 className='text-center'>Projects</h1>
            <p className='text-center'>This is where the magic is
            </p>
          </div>
        </Row>
        <Row className='justify-content-center '>
          <Col lg="4" md="6" className='py-5 gx-4'>
            <div className='card pb-3'>
              <img src='https://i.postimg.cc/RVxn7kZX/Ip-tracker.png' alt="ip tracker" className="card-img" />
              <h3 className="text-center text-white">IP Address tracker</h3>
              <div className='chips d-flex justify-content-center'>
                <p className='chip bg-success'>javascript</p>
                <p className='chip bg-warning'>css</p>
                <p className='chip bg-danger'>html</p>
                <p className='chip bg-secondary'>Ipify Api</p>
                <p className='chip bg-primary'>leaflet JS</p>
              </div>
              <span className='text-center text-white py-1'>
                The IP address tracker displays the user's location based on their IP address when 
                the initial page loads. It uses the Ipify IP API to fetch the user's IP address, 
                and then it can retrieve the user's location information. 
                Users also have the option to search for any IP address, and the corresponding location is displayed on a map. 
                This functionality is achieved using the Leaflet.js library.
              </span>
              <div class="card-button text-center">
                <a className='Card-btn text-decoration-none' target="_blank" rel="noopener" href="https://glorioussuperqueries.parvezshaikh1.repl.co/">Check it out</a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" className='py-5'>
            <div className='card pb-3'>
              <img src='https://i.postimg.cc/GtVRGRQx/Screenshot-2023-10-02-T104613-877.png' alt="ip tracker" className="card-img " />
              <h3 className="text-center text-white">Weather App</h3>
              <div className='chips d-flex justify-content-center'>
                <p className='chip bg-success'>javascript</p>
                <p className='chip bg-warning'>css</p>
                <p className='chip bg-danger'>html</p>
                <p className='chip bg-primary'>Open Weather Api</p>
              </div>
              <span className='text-center text-white py-1'>
              In this Weather API Project, the app displays the user's weather information based on their current location, 
              which is obtained by fetching their IP address using the Ipify API. 
              The app provides data such as wind speed and visibility. 
              Users also have the option to search for the weather of a specific city, 
              and the app renders the weather information for that city accordingly.
              </span>
              <div class="card-button text-center">
                <a className='Card-btn text-decoration-none' rel="noopener" target="_blank" href="https://parvez785.github.io/Weather-app/">Check it out</a>
              </div>
            </div>
          </Col>
          <Col md="6" lg="4" className='py-5'>
            <div className='card pb-3'>
              <img src='https://i.postimg.cc/7Y4nHG0H/Screenshot-2023-10-02-T105614-423.png' alt="ip tracker" className="card-img" />
              <h3 className="text-center text-white">Hoobank</h3>
              <div className='chips d-flex justify-content-center'>
                <p className='chip bg-success'>javascript</p>
                <p className='chip bg-warning'>css</p>
                <p className='chip bg-danger'>bootstrap</p>
              </div>
              <span className='text-center text-white py-1'>
Hoobank is a modern static website built with Bootstrap and CSS. Its responsive design ensures that it looks great on any device, with a beautiful gradient background that adds an extra touch of elegance. 
The website is designed to provide an easy and intuitive user experience with a wide range of features and information.
Moreover the navbar is responsive for mobile version 
              </span>
              <div class="card-button text-center">
                <a className='Card-btn text-decoration-none' rel="noopener" target="_blank" href="https://whimsicalcharmingslope.parvezshaikh1.repl.co/">Check it out</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
