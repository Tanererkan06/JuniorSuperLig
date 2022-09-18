import { Container } from "react-bootstrap";
import "../Contact/Contact.css";
import { FaEnvelope } from "react-icons/fa";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getAllFikstur } from "../../redux-new/actions/fikstur";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Fix table head
function tableFixHead(e) {
  const el = e.target,
    sT = el.scrollTop;
  el.querySelectorAll("thead th").forEach(th =>
    th.style.transform = `translateY(${sT}px)`
  );
}
document.querySelectorAll(".tableFixHead").forEach(el =>
  el.addEventListener("scroll", tableFixHead)
);


const About = () => {
  const dispatch = useDispatch();
  const fikstur = useSelector(state => state.fikstur);

  useEffect(() => {
    dispatch(getAllFikstur());
  }, []);

  const { contactInfo } = useAuth();
  const [active, setActive] = useState(false);
  return (
    <div id="contact" className="contact py-5">
      <div>
        {/* <div className="backText">
          <h1>puan durumu</h1>
        </div> */}
        <Container>
          <h4 className="text-center mb-4">Ligler</h4>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <button className="button2 ps-4 pe-4">U9</button>
            <button className="button2 ps-4 pe-4">U10</button>
            <button className="button2 ps-4 pe-4">U11</button>
            <button className="button2 ps-4 pe-4">U12</button>
          </div>
          <div className="row col-12">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xs-12">
              <h4 className="text-center mb-4 mt-4">Puan Durumu</h4>
              <div className="table-responsive tableFixHead" >
                <Table striped hover className="bg-light table-puandurumu" >
                  <thead className="table-puandurumu sticky-header" style={{ borderCollapse: 'collapse' }}>
                    <tr>
                      <th ></th>
                      <th >Takımlar</th>
                      <th >O</th>
                      <th >G</th>
                      <th >B</th>
                      <th >M</th>
                      <th >A</th>
                      <th >Y</th>
                      <th >Av</th>
                      <th >P</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr className="table-success">
                      <td>1</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/1_5.png" alt="" /> Galatasaray</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr className="table-success">
                      <td>2</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/3_1.png" alt="" /> Beşiktaş</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr className="table-success">
                      <td>3</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/F425.png" alt="" />Fenerbahçe</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/139_1.png" alt="" /> Trabzonspor</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/F2223.png" alt="" /> Başakşehir</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/101_1.png" alt="" /> Konyaspor</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/21_1.png" alt="" /> Antalyaspor</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td className="d-flex align-items-center"><img className="me-2" style={{ height: '20px', width: '20px' }} src="https://media03.tr.beinsports.com/img/teams/1/129.png" alt="" /> Sivasspor</td>
                      <td>5</td>
                      <td>0</td>
                      <td>5</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xs-12">
              <h4 className="text-center mb-4 mt-4">Fikstür</h4>
              <div className="table-responsive" style={{ height: "330px", overflowY: "auto", overflowX: "auto" }}>
                <Table striped hover className="bg-light responsive-fikstur">
                  {
                    fikstur.length > 0
                    ? fikstur.map((item, index) => {
                      // console.log("item: ", item.eslesmeler);
                      return (
                        <>
                          {
                            item.eslesmeler.map((item2, index2) => {
                              // console.log("item2: ", item2);
                              return (
<>
                                <thead>
                                  <tr>
                                    <th>{index2+1}. Hafta</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="d-flex justify-content-between">
                                      <span style={{ width: '25%' }}><Moment format="DD/MM/YYYY h:mm">{item2[0][2]}</Moment></span>
                                      <span style={{ width: '30%' }}>{item2[0][0]}</span>
                                      <span style={{ width: '15%' }}>0 : 0</span>
                                      <span style={{ width: '30%' }}>{item2[0][1]}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="d-flex justify-content-between">
                                      <span style={{ width: '25%' }}><Moment format="DD/MM/YYYY h:mm">{item2[1][2]}</Moment></span>
                                      <span style={{ width: '30%' }}>{item2[1][0]}</span>
                                      <span style={{ width: '15%' }}>0 : 0</span>
                                      <span style={{ width: '30%' }}>{item2[1][1]}</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                              ) 
                            })
                          }
                        </>
                      )
                    })
                    : <div>Yükleniyor...</div>
                  }
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
