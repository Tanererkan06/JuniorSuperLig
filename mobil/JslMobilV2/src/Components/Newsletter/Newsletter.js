import { useState, useEffect, Image } from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import './Newsletter.css'
import axios from 'axios';


const Newsletter = () => {
    const [sponsors, setSponsors] = useState([]);
    // const [sponsorFileName, setSponsorFileName] = useState([]);

    const sponsorsFilesName = [];

    axios.get("http://localhost:8000/sliderupload/files").then(response => {
        // console.log(response.data);
            setSponsors(response.data);
    })

    for(let i = 0; i < sponsors.length; i++) {
        sponsorsFilesName.push(sponsors[i].url);
    }

    return (
        <div className='news py-5'>
            <Container>
                <div className="text-center">
                    <div>
                        <span className='subTitle'>Sponsorlar</span>
                        {/* <h3>Sponsorlarımız</h3> */}
                    </div>
                    <div className="grid-sponsor mt-3">
                        {
                            sponsorsFilesName.length > 0
                            ? sponsorsFilesName.map((sponsor, index) => {
                                return (
                                    <div className="singleGalleryItems" key={index}>
                                        <img src={sponsor} alt="sponsor" className="w-50 h-50 rounded-circle" />
                                    </div>
                                )
                            })
                            : <div>Yükleniyor...</div>
                        }
                        {/* <div className="singleGalleryItems">
                            <img src={require('../../utilities/images/logo/sponsor.png')} alt="sponsor" className="w-50" />
                        </div>
                        <div className="singleGalleryItems">
                            <img src={require('../../utilities/images/logo/sponsor.png')} alt="sponsor" className="w-50" />
                        </div>
                        <div className="singleGalleryItems">
                            <img src={require('../../utilities/images/logo/sponsor.png')} alt="sponsor" className="w-50" />
                        </div>
                        <div className="singleGalleryItems">
                            <img src={require('../../utilities/images/logo/sponsor.png')} alt="sponsor" className="w-50" />
                        </div> */}
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default Newsletter;