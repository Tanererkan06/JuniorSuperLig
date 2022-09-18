import React from 'react';
import './Preloader.css'
const Preloader = () => {
    return (
        <div className='preloader text-center'>
            <div>
                <div className="preloader-image-container">
                    <img src={require('../../utilities/images/layout/loading2.gif')} alt="" className="w-100" />
                </div>
                <p className="h5">Yükleniyor...</p>
            </div>
        </div>
    );
};

export default Preloader;