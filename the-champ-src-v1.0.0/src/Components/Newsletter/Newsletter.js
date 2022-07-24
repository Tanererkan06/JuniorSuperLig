import React from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='news py-5'>
            <Container>
                <div className="text-center">
                        <div>
                            <span className='subTitle'>Newsletter</span>
                            <h3>Get Our Latest and Premium Offers</h3>
                            <p>Lorem, ipuam, in temporibus fugiat quam necessitatibus veritatis est <br /> facere aut possimus inventore. Similique, modi?</p>
                        </div>
                        <div>
                        <InputGroup className="mb-3 responsible-width mx-auto">
                            <Form.Control
                            className="bg-transparent text-light"
                            placeholder="Your email address"
                            aria-label="Your email address"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className='btn text-light border' id="basic-addon2">Subscribe Now</InputGroup.Text>
                        </InputGroup>
                        </div>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;