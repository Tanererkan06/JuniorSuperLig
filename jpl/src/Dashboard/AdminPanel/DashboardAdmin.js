import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import AuthService from "../../services-socket/auth.service";
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import '../App.css'; 


function Dashboard () {
  const currentUser = AuthService.getCurrentUser();

  return(
    
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} /> 
 
        
          
          <div className='dashboard-body'>
            <div className="container">
              <h1>Admin Dashboard</h1>
              <header className="jumbotron">
                <h3>
                  <strong>{currentUser.username}</strong> Profile
                </h3>
              </header>
              {/* <p>
                <strong>Id:</strong> {currentUser.id}
              </p> */}
              <p>
                <strong>Email:</strong> {currentUser.email} 
              </p>
              {/* <strong>Authorities:</strong> */}
              <ul>
                {/* { currentUser.roles } */}
              </ul>
            </div>
          </div>
      </div>
   
  )
}

export default Dashboard;