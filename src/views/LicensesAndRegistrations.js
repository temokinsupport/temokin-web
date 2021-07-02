import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/styles/licensesandregistrations.scss';

function LicensesAndRegistrations() {
  return (
    <div className="--licenses-and-registrations">
        <div className="--bg-1">
            <Container>
                <Row>
                    <Col>
                        <h1 className="--title">Licenses <br/> and Registrations</h1>
                        <p className="--desc">These licenses and certifications specify the <br/>
                        range of our capabilities, allowing us to take <br/>
                        on large-scale, complex projects with the <br/>
                        approval of the authorities.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default LicensesAndRegistrations;
