import React from "react";
import "./Gallery.css";
import gal1 from "../../utilities/images/gallery/gallery-one.png";
import gal2 from "../../utilities/images/gallery/gallery-two.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Gallery = () => {


  return (
    <div className="gallery py-5">
      <Container>
        <div>
          <div className="sub-heading border-end border-1 border-light pe-3 text-end">
            <span>Gallery</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="galleryText">
            <span className="subTitle">Test Title</span>
            <h2 className="section-heading">Photos And Gallery</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              veritatis <br /> laudantium nulla illum dolorem, sunt deleniti!
            </p>
            <div className="grid-gallery">
              <div className="singleGalleryItems">
                <img src={require('../../utilities/images/gallery/gallery-five.png')} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={gal2} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={require('../../utilities/images/gallery/gallery-six.png')} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={gal1} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={require('../../utilities/images/gallery/gallery-sever.png')} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
              <div className="grid-gallery2">
              <div className="singleGalleryItems">
                <img src={require('../../utilities/images/gallery/gallery-three.png')} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={gal2} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={gal1} alt="" className="w-100" />
              </div>
              <div className="singleGalleryItems">
                <img src={gal2} alt="" className="w-100" />
              </div>
            </div>
              </div>
            </div>
           <div className="text-center mt-3">
           <button className="button1">
              <Link to="/gallery">View All</Link>
            </button>
           </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
