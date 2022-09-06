import React from 'react'

export default function Banner1() {
    return (
        <div className="container" style={{marginTop:"10px"}}>
            <div style={{backgroundColor:"gray"}}>
                <img className="d-block w-100"
                    src={require("../assets/img/banner.png")}
                    alt="First slide"  />

            </div>
        </div>
    )
}
