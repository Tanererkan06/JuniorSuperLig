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
            <h1>User Dashboard</h1>
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




































//  import React, {useState, useEffect} from 'react';
// /* import Header from '../../component/Header'
// import Footer from '../../component/Footer' */


// const UserDashboard = () => {

//     const [profile, setProfile] = useState("");
//     const {username, email, role, createdAt} = profile;

//     useEffect(()=>{
//         fetch('/api/getme')
//         .then(res =>{
//             return res.json()
//         })
//         .then(result =>{
//             //console.log(result)
//             setProfile(result.user)
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }, []);
    
//   return (
//     <>

//    {/*  <Header/> */}

//     <div className="container-fluid dashboard_container">
//         <div className="row">
//             <div className="col-sm-4">
//                <div className="card card_dashboard">
//                <div className="card-header">
//                     <b>User Dashboard</b>    
//                 </div>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item"> Name: {username}</li>
//                     <li className="list-group-item"> E-mail: {email}</li>
//                     <li className="list-group-item"> Join at: {new Date(createdAt).toLocaleDateString()}</li>
//                     <li className="list-group-item"> {role===1 ? "Admin" : "Registred User"}</li>
//                 </ul>
//                </div>
//             </div>
//             <div className="col-sm-8">
//                 <h4>other col</h4>
//             </div>
//         </div>
//     </div>
     
       
                
//     </>
//   )
// };

// export default UserDashboard; 
