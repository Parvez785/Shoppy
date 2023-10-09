import React, { useEffect } from 'react';
import VANTA from 'vanta';
import WAVES from 'vanta/src/vanta.waves';
import './Hero.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Hero() {

    useEffect(() => {
        WAVES({
            el: '#Vanta',
            mouseControls: false,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            shininess: 15,
            waveHeight: 26.50,
            waveSpeed: 0.40,
            color: 0x000927
        });
    }, [])

    return (
        <div className='Her0-bg-section'>
            <div className='bg' id="Vanta">
                <Container>
                    <Row className='pt-md-5 main-row'>
                        <Col md="6" className='d-flex flex-column pt-md-5 mt-md-4'>
                            <div class="text-section">
                                <p className='text-white'>Welcome</p>
                                <h2 className='text-white pb-2'>👋 Hi, I'm a <span className='yellow'>Front End Developer</span> </h2>
                                    <p className='text-white lh-4'>Driven Web Developer looking for an organization where I can thrive in a team-oriented environment, develop a deeper understanding of new techniques and technologies, and deliver projects that exceed client expectations.</p>
                                    <button className="button-main-new"><a href="#contact">Let's Connect</a></button>
                            </div>
                        </Col>
                        <Col md="6" className='pt-5 mt-md-4  d-flex justify-content-center jump'>
                            <div class="image ">
                                <img src='https://i.postimg.cc/Bv643xXD/ezgif-5-50ee1d1988-removebg-preview.png' alt='main-img' className="img-fluid"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
