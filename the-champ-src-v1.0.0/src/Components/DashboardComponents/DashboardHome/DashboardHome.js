import React, {useState } from "react";
import { Container, Modal } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./DashboardHome.css";
const DashboardHome = () => {
  // modal show for notification begin
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  // modal show for notification end

  const { setBannerInfo,setAboutInfo, setSkillInfo, theme, setContactInfo } =
    useAuth();

  //   banner info begin
  const [playerName, setPlayerName] = useState("");
  const [playerParagraph, setPlayerParagraph] = useState("");

  const playerNameField = (e) => {
    setPlayerName(e.target.value);
  };
  const playerParagraphField = (e) => {
    setPlayerParagraph(e.target.value);
  };
  let info = {};
  const addBannerInfo = (e) => {
    e.preventDefault();
    if (playerName.length > 0 && playerParagraph.length > 0) {
      info = {
        name: playerName,
        paragraph: playerParagraph,
      };
      setBannerInfo(info);
      handleShow2();
    } else {
      handleShow();
    }
    console.log(info)
  };

  //   banner info end

  //   about info begin
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [aboutHeight, setAboutHeight] = useState("");
  const [aboutClub, setAbouClub] = useState("");
  const [aboutJersey, setAboutJersey] = useState("");
  const aboutTitleField = (e) => {
    setAboutTitle(e.target.value);
  };
  const aboutTextField = (e) => {
    setAboutText(e.target.value);
  };
  const aboutDate = (e) => {
    setBirthDate(e.target.value);
  };
  const aboutHeightField = (e) => {
    setAboutHeight(e.target.value);
  };
  const aboutClubField = (e) => {
    setAbouClub(e.target.value);
  };
  const aboutJerseyField = (e) => {
    setAboutJersey(e.target.value);
  };

  let aboutInfoObj = {};

  const addAboutInfo = (e) => {
    e.preventDefault();
    if (
      aboutTitle.length > 0 &&
      aboutText.length > 0 &&
      birthdate.length > 0 &&
      aboutHeight.length > 0 &&
      aboutClub.length > 0 &&
      aboutJersey.length > 0
    ) {
      aboutInfoObj = {
        title: aboutTitle,
        paragraph: aboutText,
        date: birthdate,
        height: aboutHeight,
        club: aboutClub,
        jersey: aboutJersey,
      };
      setAboutInfo(aboutInfoObj);
      handleShow2();
    } else {
      handleShow();
    }
  };
  //   about info end

  //   skill section begin
  const [skillTitle, setSkillTitle] = useState("");
  const [skillText, setSkillText] = useState("");
  const [firstSkill, setFirstSkill] = useState("");
  const [secondSkill, setSecondSkill] = useState("");
  const [thirdSkill, setThirdSkill] = useState("");
  const [lastSkill, setLastSkill] = useState("");

  const skillTitleField = (e) => {
    setSkillTitle(e.target.value);
  };
  const skillTextField = (e) => {
    setSkillText(e.target.value);
  };
  const firstSkillField = (e) => {
    setFirstSkill(e.target.value);
  };
  const secondSkillField = (e) => {
    setSecondSkill(e.target.value);
  };
  const thirdSkillField = (e) => {
    setThirdSkill(e.target.value);
  };
  const lastSkillField = (e) => {
    setLastSkill(e.target.value);
  };

  let skillInfoObj = {};

  const addSkillInfo = (e) => {
    e.preventDefault();
    if (
      skillTitle.length > 0 &&
      skillText.length > 0 &&
      firstSkill.length > 0 &&
      secondSkill.length > 0 &&
      thirdSkill.length > 0 &&
      lastSkill.length > 0
    ) {
      skillInfoObj = {
        title: skillTitle,
        paragraph: skillText,
        first: firstSkill,
        second: secondSkill,
        third: thirdSkill,
        last: lastSkill,
      };
      setSkillInfo(skillInfoObj);
      handleShow2();
    } else {
      handleShow();
    }
  };
  //   skill section end

  // contact section begin
  const [contactAddress, setContactAddress] = useState("");
  const [primaryNumber, setPrimaryNumber] = useState("");
  const [secondaryNumber, setSecondaryNumber] = useState("");

  const contactAddressField = (e) => {
    setContactAddress(e.target.value);
  };
  const primaryNumberField = (e) => {
    setPrimaryNumber(e.target.value);
  };
  const secondaryNumberField = (e) => {
    setSecondaryNumber(e.target.value);
  };

  let contactInfoObj = {};

  const addContactInfo = (e) => {
    e.preventDefault();
    if (
      contactAddress.length > 0 &&
      primaryNumber.length > 0 &&
      secondaryNumber.length > 0
    ) {
      contactInfoObj = {
        address: contactAddress,
        primary: primaryNumber,
        secondary: secondaryNumber,
      };
      setContactInfo(contactInfoObj);
      handleShow2();
    } else {
      handleShow();
    }
  };
  // contact section end

  return (
    <div
      className="text-light dashboard-dashboard"
      style={{ background: `${theme ? "black" : "white"}` }}
    >
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
          <div
            className={`sub-heading text-start border-start border-1 ps-3 ${
              theme ? "text-light border-light" : "text-dark border-dark"
            }`}
          >
            <span>Home Page</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row my-5">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div
                className={`${
                  theme ? "dashboard-section-dark" : "dashboard-section-light"
                }`}
              >
                <h4>Banner Section Information</h4>
                <form onSubmit={addBannerInfo}>
                  <div className="mb-3">
                    <label htmlFor="name">Player Name</label>
                    <input
                      placeholder="Player Name"
                      onChange={playerNameField}
                      type="text"
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      name="name"
                      id="name"
                    />
                    </div>
                  <div className="mb-3">
                    <label htmlFor="name">Banner Texts</label>
                    <textarea
                      onChange={playerParagraphField}
                      name=""
                      id=""
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      rows="5"
                    ></textarea>
                  </div>
                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Add Info to Bannner"
                  />
                </form>
              </div>
              <div
                className={`${
                  theme ? "dashboard-section-dark" : "dashboard-section-light"
                }`}
              >
                <h4>Skill Section Information</h4>
                <form onSubmit={addSkillInfo}>
                  <div className="mb-3">
                    <label htmlFor="name">Section Heading</label>
                    <input
                      onChange={skillTitleField}
                      type="text"
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name">Section Texts</label>
                    <textarea
                      onChange={skillTextField}
                      name=""
                      id=""
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">1st Skill</label>
                        <input
                          onChange={firstSkillField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="birth"
                          id="birth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">2nd Skill</label>
                        <input
                          onChange={secondSkillField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="height"
                          id="height"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">3rd Skill</label>
                        <input
                          onChange={thirdSkillField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="club"
                          id="club"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">4th Skill</label>
                        <input
                          onChange={lastSkillField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="jersey"
                          id="jersey"
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

            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <div
                className={`${
                  theme ? "dashboard-section-dark" : "dashboard-section-light"
                }`}
              >
                <h4>About Section Information</h4>
                <form onSubmit={addAboutInfo}>
                  <div className="mb-3">
                    <label htmlFor="name">Section Heading</label>
                    <input
                      onChange={aboutTitleField}
                      type="text"
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name">Section Texts</label>
                    <textarea
                      onChange={aboutTextField}
                      name=""
                      id=""
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">Birth Date And Place</label>
                        <input
                          onChange={aboutDate}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="birth"
                          id="birth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="height">Height & Weight</label>
                        <input
                          onChange={aboutHeightField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="height"
                          id="height"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Club Position">Club Position</label>
                        <input
                          onChange={aboutClubField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="club"
                          id="club"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="jersey number">Jersey Number</label>
                        <input
                          onChange={aboutJerseyField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="jersey"
                          id="jersey"
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

              <div
                className={`${
                  theme ? "dashboard-section-dark" : "dashboard-section-light"
                }`}
              >
                <h4>Contact Section Information</h4>
                <form onSubmit={addContactInfo}>
                  <div className="mb-3">
                    <label htmlFor="name">Contact Address</label>
                    <textarea
                      onChange={contactAddressField}
                      name=""
                      id=""
                      className={`w-100 form-control bg-transparent ${
                        theme ? "text-light" : "text-dark"
                      }`}
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="Birth Date">
                          Primary Contact Number
                        </label>
                        <input
                          onChange={primaryNumberField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="birth"
                          id="birth"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="mb-3">
                        <label htmlFor="height">Email address</label>
                        <input
                          onChange={secondaryNumberField}
                          type="text"
                          className={`w-100 form-control bg-transparent ${
                            theme ? "text-light" : "text-dark"
                          }`}
                          name="height"
                          id="height"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Add Info to Contact"
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

export default DashboardHome;
