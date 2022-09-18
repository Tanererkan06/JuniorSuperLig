import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    const [randdom,setRandom] = useState(0)
    const [randdom2,setRandom2] = useState(0)
    function getRndInteger1(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    function getRndInteger2(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
      useEffect(()=>{
        const interval = setInterval(()=>{
            const rand = getRndInteger1(0,70)
            const rand2 = getRndInteger2(0,70)
            setRandom(rand)
            setRandom2(rand2)
            console.log(randdom,randdom2)
        },3000)
        return () => clearInterval(interval);
      },[randdom,randdom2])

    return (
        <div className='error'>
            <div className="errorContent" style={{top:`${randdom}%`,left:`${randdom2}%`}}>
                <img src={require('../../utilities/images/layout/error-navigator.png')} alt="" className='w-100' />
                <div className='bg-primary p-3 text-center homeBtn'>
                    <Link to="/" className="btn text-light">Back To Home</Link>
                </div>
            </div>
            <div className="errorText">
                <img src={require('../../utilities/images/layout/error.PNG')} alt="" className="w-100" />
            </div>
        </div>
    );
};

export default ErrorPage;