import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
const DashboardAbout = () => {
// modal show for notification begin
const [show, setShow] = useState(false);
const [show2, setShow2] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);
// modal show for notification end


// about page begin  
const { theme,setAboutPageAboutInfo,setAboutPageUpcommingInfo } = useAuth();
const [aboutInfoTitle,setAboutInfoTitle] = useState('')
const [aboutInfoText,setAboutInfoText] = useState('')

const aboutInfoTitleField = e => {
    setAboutInfoTitle(e.target.value)
}
const aboutInfoTextField = e => {
    setAboutInfoText(e.target.value)
}
console.log(aboutInfoTitle,aboutInfoText)
let aboutInfo = {}

const addAboutPageInfo = (e) => {
    e.preventDefault();
    if (aboutInfoTitle.length > 0 && aboutInfoText.length > 0) {
        aboutInfo = {
        title:aboutInfoTitle,
        paragraph:aboutInfoText,
    }
        setAboutPageAboutInfo(aboutInfo)
        handleShow2()
    }else{
        handleShow()
    }
}
// about page end 

// last goal section begin 
const [matchTime,setMatchTime] = useState('')
const [firstTeam,setFirstTeam] = useState('')
const [oppositeTeam,setOppositeTeam] = useState('')

const matchTimeField = e => {
    setMatchTime(e.target.value)
}
const firstTeamField = e => {
    setFirstTeam(e.target.value)
}
const oppositeTeamField = e => {
    setOppositeTeam(e.target.value)
}
let upcommingData = {}

const addUpcommingData = e => {
    e.preventDefault()
    if (matchTime.length > 0 &&  firstTeam.length > 0 &&  oppositeTeam.length > 0) {
    upcommingData = {
        time : matchTime,
        first:firstTeam,
        opposite:oppositeTeam
    }   
    setAboutPageUpcommingInfo(upcommingData)
    handleShow2()
    } else {
        handleShow()
    }

}
// last goal section end

return (
  <div className="text-light dashboard-dashboard" style={{background:`${theme ? 'black' : 'white'}`}}>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-danger fw-light">Alert!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="w-25 mx-auto">
          <img
            src={require("../../../utilities/images/dashboard/modal.gif")}
            className="w-100"
            alt=""
          />
        </div>
        <div>
          <h5 className="text-danger">Please Fill All Field</h5>
        </div>
      </Modal.Body>
    </Modal>
    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title className="text-info fw-light">Successfull!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <div className="w-25 mx-auto">
          <img
            src={require("../../../utilities/images/dashboard/modal2.gif")}
            className="w-100"
            alt=""
          />
        </div>
        <div>
          <h5 className="text-info">Successfully Added Info</h5>
        </div>
      </Modal.Body>
    </Modal>
    <Container>
      <div className="dashboard-home py-5">
        <div className={`sub-heading text-start border-start border-1 ps-3 ${theme ? 'text-light border-light' : 'text-dark border-dark'}`}>
          <span>About Page</span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className={`${theme ? 'dashboard-section-dark' : 'dashboard-section-light'}`}>
              <h4>About Section Information</h4>
              <form onSubmit={addAboutPageInfo}>
                <div className="mb-3">
                  <label >About Title</label>
                  <input
                  onChange={aboutInfoTitleField}
                    placeholder="Player Name"
                    type="text"
                    className={`w-100 form-control bg-transparent ${theme ? 'text-light' : 'text-dark'}`}
                  />
                </div>
                <div className="mb-3">
                  <label>About Texts</label>
                  <textarea onChange={aboutInfoTextField} name="" id="" className={`w-100 form-control bg-transparent ${theme ? 'text-light' : 'text-dark'}`} rows="5"></textarea>
                </div>
                <input
                  className="btn btn-light"
                  type="submit"
                  value="Add Info to About"
                />
              </form>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className={`${theme ? 'dashboard-section-dark' : 'dashboard-section-light'}`}>
                <h4>Upcomming Section Information</h4>
                <form onSubmit={addUpcommingData}>
                  <div className="mb-3">
                    <label htmlFor="name">Game Time</label>
                    <input
                    onChange={matchTimeField}
                      type="text"
                      className={`w-100 form-control bg-transparent ${theme ? 'text-light' : 'text-dark'}`} 
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">First Team Name</label>
                        <input
                        onChange={firstTeamField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${theme ? 'text-light' : 'text-dark'}`} 
                          name="birth"
                          id="birth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                      <label htmlFor="Birth Date">Opposite Team Name</label>
                        <input
                        onChange={oppositeTeamField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${theme ? 'text-light' : 'text-dark'}`} 
                          name="height"
                          id="height"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Add Info to About"
                  />
                </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
};

export default DashboardAbout;