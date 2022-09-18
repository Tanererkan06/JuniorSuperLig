import React, { useState } from 'react';
import { Container,Table,Card, Modal} from 'react-bootstrap';
import './Favourite.css'
import img1 from '../../utilities/images/gallery/galeri-101.jpg';
import img2 from '../../utilities/images/gallery/galeri-102.jpg';
import img3 from '../../utilities/images/gallery/galeri-103.jpg';
import img4 from '../../utilities/images/gallery/galeri-104.jpg';
import img5 from '../../utilities/images/gallery/galeri-105.jpg';
import img6 from '../../utilities/images/gallery/galeri-106.jpg';
import img7 from '../../utilities/images/gallery/galeri-107.jpg';
import img8 from '../../utilities/images/gallery/galeri-108.jpg';
import img9 from '../../utilities/images/gallery/galeri-109.jpg';
import img10 from '../../utilities/images/gallery/galeri-110.jpg';
import img11 from '../../utilities/images/gallery/galeri-111.jpg';
import img12 from '../../utilities/images/gallery/galeri-112.jpg';
import img13 from '../../utilities/images/gallery/galeri-113.jpg';
import img14 from '../../utilities/images/gallery/galeri-114.jpg';
import img15 from '../../utilities/images/gallery/galeri-115.jpg';
import { FaTimes } from "react-icons/fa";
const Favourite = () => {
    const galleryImages = [
        img1, 
        img2, 
        img3, 
        img4, 
        img5, 
        img6, 
        img7, 
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15
    ]
    const [modalShow, setModalShow] = React.useState(false);
    const [images,setImages] = useState(img1)
    const showImage = img =>{
        setImages(img)
        setModalShow(true)
    }
    return (
        <div className='favourite py-5'>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <div className='position-relative rounded'>
                        <FaTimes onClick={()=>setModalShow(false)} className='pointer m-2 fs-3 text-light position-absolute top-0 end-0'/>
                        <img src={images} alt="" className="w-100" />
                    </div>
                </Modal>
            <Container>
                {/* <div className="row">
                    <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                        <div>
                           <h2>Photos</h2>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ut dicta deleniti architecto, explicabo rem pariatur nostrum perferendis tempore tenetur qui cum aperiam nam earum facilis, mir est dolore, vero, velit rerum magni inventore, temporibus autem tenetur accusantium optio ratione ullam totam! Tenetur facere, error inventore explicabo in illo quo volchitecto voluptatum, quaerat delectus aspernatur cupiditate vitae beatae nam enim, asperiores sit iste itaque quod inventore. Fugiat beatae ipsum qui? Debitis?</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 col-xl-4">
                        <div>
                            <h3>Information</h3>
                            <Table>
                                <tbody>
                                    <tr>
                                    <td>Category</td>
                                    <td>Friendly Match</td>
                                    </tr>
                                    <tr>
                                    <td>Location</td>
                                    <td>Berlin,Germany</td>
                                    </tr>
                                    <tr>
                                    <td>Tags</td>
                                    <td>@football,@match,@goal</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div> */}

                {/* <div className="row my-5">
                    <div className="col-12 col-md-12 col-lg-4 col-xl-4 py-2">
                        <div>
                            <span className="subTitle">25 January 2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum impedit quod obcaecati, molestias voluptatibus, vitae at porro in consequatur nihil earum dicta iusto mollitia nisi. Ducimus nulla inventore fuga labore deleniti accusamus consequuntur accusantium!</p>
                            <button className='button1 px-5 py-2 rounded-0'>Details</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-8 col-xl-8">
                        <div>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={require("../../utilities/images/background/event-banner-bg.png")}
                                />
                            </Card>
                        </div>
                    </div>
                </div> */}
                <div className="grid-gallery">
                    {
                        galleryImages.map((image,i) => <div key={i} onClick={()=>showImage(image)} className='pointer single-gallery-image'>
                        <img src={image} alt="" className="w-100 h-100" />
                    </div>)
                    }
                    
                </div>

                {/* <div className="row my-5">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={require("../../utilities/images/background/event-banner-bg.png")}
                                />
                            </Card>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6">
                        <div>
                            <span className="subTitle">25 January 2022</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum impedit quod obcaecati, molestias voluptatibus, vitae at porro in consequatur nihil earum dicta iusto mollitia nisi. Ducimus nulla inventore fuga labore deleniti accusamus consequuntur accusantium!</p>
                            <button className='button2 px-5 py-2 rounded-0'>Details</button>
                        </div>
                        
                    </div>
                </div> */}

            </Container>
        </div>
    );
};

export default Favourite;