// import io from "socket.io-client";

// import SideBar from '../../components/Sidebar';
// import sidebar_menu from '../../constants/sidebar-menu';
// import '../../App.css';
// import '../../Form.css'


// import { useEffect, useState } from "react";
// import UserServis from '../../../services/UserService';

// import { useSelector, useDispatch } from 'react-redux';
// // import { createUser } from '../../src/redux/actions/User';

// import { createUser } from '../../../redux/actions/user';

// // const socket = io.connect("localhost:8000");
// const User = io.connect("localhost:8000/user");

// var maxStack = 10000;
// const num = 0;

// const _UserServis = new UserServis();

// export default function DashboardCreateUser() {
//   const dispatch = useDispatch();

//   const [id, setId] = useState(null);
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");

//   const createUserFunc = () => {
//     //console.log("DASHBAORD User: ", username, email, password, role);
//     dispatch(createUser({ username, email, password, role }));
//   }

//   return (
//     <div className='dashboard-container'>
//       <SideBar menu={sidebar_menu} />

//       <div className='dashboard-body'>
//         <form className="formcss">
//           {/* <label className="labelcss" htmlFor='id'>ID: </label>
//           <input className="inputcss" type="text" placeholder='id' name="id" onChange={(event) => { setId(event.target.value); }} /> */}
//           <div className="col-xs-12" style={{ marginLeft: '-30px' }}>
//             <div className="col-xs-4">
//               <label className="labelcss" htmlFor="username">Username:</label>
//               <input className="inputcss" type="text" placeholder="Username" name="username" onChange={(event) => { setUsername(event.target.value); }} />
//             </div>
//             <div className="col-xs-4">
//               <label className="labelcss" htmlFor="email">Email:</label>
//               <input className="inputcss" type="text" placeholder="Email" name="email" onChange={(event) => { setEmail(event.target.value); }} />
//             </div>
//             <div className="col-xs-4">
//               <label className="labelcss" htmlFor="password">Password:</label>
//               <input className="inputcss" type="password" placeholder="Password" name="password" onChange={(event) => { setPassword(event.target.value); }} />
//             </div>
//           </div>
//           <div className="div2">
//             <div>
//               <label className="labelcss" htmlFor="role">Role:</label>
//               <input className="inputcss" type="text" placeholder="Role" name="role" onChange={(event) => { setRole(event.target.value); }} />
//             </div>
//           </div>
//           </form>
//           <div className="buttondiv" >
//             <button className="buttoncss" onClick={createUserFunc}>Create</button>
//           </div>
//        </div>
//       </div>
//   )
// }