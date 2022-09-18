import { useEffect, useState } from 'react'
import '../../../App.css';
import '../../../Form.css'
import { getAllFikstur } from "../../../../redux-new/actions/fikstur";
import { useSelector, useDispatch } from "react-redux";
import DropdownList from "react-widgets/DropdownList";
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Moment from 'react-moment';
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';
import '../table.css';

function DashboardFiksturTanimlamaEkrani(props) {
  // Değişken tanımlamaları
  const navigate = useHistory();

    const dispatch = useDispatch();
    const fikstur = useSelector(state => state.fikstur);
  
    useEffect(() => {
      dispatch(getAllFikstur());
    }, []);


  return (
    <>
    <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />
          
          <div className='dashboard-body'>
          <h4 className="text-center mb-4 mt-4">Fikstür</h4>
              <div className="table-responsive" style={{ height: "330px", overflowY: "auto", overflowX: "auto" }}>
                <Table striped hover className="bg-light" style={{ fontSize: '12px' }}>
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
                                      <span style={{ width: '25%', marginRight: '15px' }}><Moment format="DD/MM/YYYY h:mm">{item2[0][2]}</Moment></span>
                                      <span style={{ width: '30%' }}>{item2[0][0]}</span>
                                      <span style={{ width: '15%' }}>0 : 0</span>
                                      <span style={{ width: '30%' }}>{item2[0][1]}</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="d-flex justify-content-between">
                                      <span style={{ width: '25%', marginRight: '15px' }}><Moment format="DD/MM/YYYY h:mm">{item2[1][2]}</Moment></span>
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
    </>
    
  )
}

export default DashboardFiksturTanimlamaEkrani