import React from 'react';
import './Preloader.css'
const Preloader = () => {
    return (
        <div className='preloader text-center'>
            <div>
                <div className="preloader-image-container">
                    <img src={require('../../utilities/images/layout/preloader.gif')} alt="" className="w-100" />
                </div>
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Preloader;