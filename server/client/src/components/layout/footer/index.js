import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer>
      <div className='footer-ara'>
        <Container>
          <Row>
            <Col md={4} sm={4} xs={12}>
              <div className='footer-content'>
                <div className='footer-head'>
                  <div class='footer-logo'>
                    <h2>
                      <span>e</span>Business
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
