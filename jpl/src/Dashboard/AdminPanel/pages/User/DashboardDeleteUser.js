// import io from "socket.io-client";

// import SideBar from '../../components/Sidebar';
// import sidebar_menu from '../../constants/sidebar-menu';
// import '../../App.css';

// import { useEffect, useState } from "react";
// import UserServis from '../../../services/UserService';

// import { useSelector, useDispatch} from 'react-redux';
// import { deleteUser } from '../../../redux/actions/user';

// const User = io.connect("http://localhost:3001/user");
// export default function DashboardDeleteUser() {
//     const [id, setId] = useState(null);
//     const dispatch = useDispatch();

//     const deleteUserFunc = () => {
//         // User.emit('Userdelete', { _id });
//         console.log("DASHBOARD DELETE: ", id);
//         dispatch(deleteUser({id}));
//     }

//     return (
//         <div className='dashboard-container'>
//             <SideBar menu={sidebar_menu} />


//             <div className='dashboard-body'>
//                 <form className="formcss">
//                     <div className="div2">
//                         <label htmlFor="id" className="labelcss">ID</label>
//                         <input type="text" className="inputcss" placeholder="ID" name="id" onChange={(event) => { setId(event.target.value); }} />
//                     </div>
                    
//                 </form>
//                 <div className="buttondiv" >
//                         <button className="buttoncss" onClick={deleteUserFunc}>Delete</button>
//                     </div>
//             </div>
//         </div>
//     )
// }