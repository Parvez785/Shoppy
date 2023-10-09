import React from 'react'
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
export default function Footer() {
  return (
    <div className='Footer py-5'>
<Container>
    <Row className='mx-auto d-flex justify-content-center text-center'>
  <div className='contact-container d-flex flex-column'>
    <h1 className="color-b py-2">Let's Talk</h1>
    <div className='contact-icons d-flex justify-content-between py-3' id="contact">
 <a href='mailto:ps693909@gmail.com'> <FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} /></a>
 <a href="https://www.linkedin.com/in/parvezshaikh456" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}}/></a>
  <a href='https://github.com/Parvez785' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} /></a>
  <a href="tel:8999001967"><FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} /></a>
  </div>
  </div>
    </Row>
<Row className=' d-flex justify-content-center align-items-center'>
<div className='copyright text-white d-flex'>
<h3 className='mt-5'>PS</h3>
</div>
</Row>
</Container>
    </div>
  )
}
