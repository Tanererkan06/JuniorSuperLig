import React from 'react';
import { Container} from 'react-bootstrap';
import './Photos.css'

const Photos = () => {
    return (
        <div className='photos py-5'>
            <Container>
                <div>
                    <h2>Photo Is A Story Without Words</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut dicta deleniti architecto, <br /> explicabo rem pariatur nostrum perferendis tempore tenetur qui cum aperiam nam earum facilis, mir est dolore, vero, velit rerum magni inventore, <br /> temporibus autem tenetur accusantium optio ratione ullam totam! Tenetur facere, error inventore explicabo in illo quo volchitecto voluptatum, <br /> quaerat delectus aspernatur cupiditate vitae beatae nam enim, asperiores sit iste itaque quod inventore. Fugiat beatae ipsum qui? Debitis?</p>
                    <button className="button1">Read More...</button>
                </div>
            </Container>
        </div>
    );
};

export default Photos;