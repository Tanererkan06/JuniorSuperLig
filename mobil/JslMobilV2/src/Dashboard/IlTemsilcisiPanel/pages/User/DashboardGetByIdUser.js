// import io from "socket.io-client";

// import SideBar from '../../components/Sidebar';
// import sidebar_menu from '../../constants/sidebar-menu';
// import '../../App.css';

// import { useEffect, useState } from "react";
// import UserServis from '../../../services/UserService';

// import { useSelector, useDispatch} from 'react-redux';
// import { getByIdUser } from '../../../redux/actions/user';

// const User = io.connect("localhost:8000/user");

// export default function DashboardGetByIdUser() {
//     const dispatch = useDispatch();
//     const [id, setId] = useState(null);

//     const getByIdUserFunc = () => {
//         // User.emit('UserfindOne', { _id });
//         // User.on('outputByIdUser', data => {
//         //     //console.log(data);
//         //     // anArray.push(data);
//         // })  
//         dispatch(getByIdUser({id}));  
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
//                         <button className="buttoncss" onClick={getByIdUserFunc}>Get By ID</button>
//                     </div>
//             </div>
//         </div>
//     )
// }