// import io from "socket.io-client";

// import SideBar from '../../components/Sidebar';
// import sidebar_menu from '../../constants/sidebar-menu';
// import '../../App.css';

// import { useEffect, useState } from "react";
// import UserServis from '../../../services/UserService';

// import { useSelector, useDispatch} from 'react-redux';
// import { deleteAllUser } from '../../../redux/actions/user';

// const User = io.connect("localhost:8000/user");

// export default function DashboardDeleteAllUser() {
//     const dispatch = useDispatch();
    
//     const deleteAllUserFunc = () => {
//         // User.emit('UserdeleteAll');
//         //console.log("DASHBOARD DELETE ALL: ");
//         // dispatch(deleteUser({}));
//         dispatch(deleteAllUser());
//     }

//     return (
//         <div className='dashboard-container'>
//             <SideBar menu={sidebar_menu} />

//             <div className='dashboard-body'>
//                 {/* <form className="formcss">
                    
//                 </form> */}
//                 <div className="buttondiv">
//                         <button className="buttoncss" onClick={deleteAllUserFunc}>Delete All</button>
//                     </div>
//             </div></div>
//     )
// }