// import io from "socket.io-client";

// import SideBar from '../../components/Sidebar';
// import sidebar_menu from '../../constants/sidebar-menu';
// import '../../App.css';

// import { useEffect, useState } from "react";
// import UserServis from '../../../services/UserService';

// import { useSelector, useDispatch} from 'react-redux';
// import { getAllPublishedUser } from '../../../redux/actions/user';

// import Button from 'react-bootstrap/Button';
// import '../table.css';

// const User = io.connect("localhost:8000/user");

// export default function DashboardGetAllPublishedUser() {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllPublishedUser());
//     } , []);

//     return (
//         <div className='dashboard-container'>
//             <SideBar menu={sidebar_menu} />

//             <div className='dashboard-body'>
//                 <div className="d-grip gap-2" style={{ display: 'flex', marginTop: '10px', marginBottom: '-10px', width: '97%', justifyContent: 'flex-end'}}>
//                     <Button variant="success">Ekle</Button>
//                     <Button variant="secondary">Published Olanları Getir</Button>
//                     <Button variant="danger">Tümünü sil</Button>
//                 </div>
//                 <div className="display-table">
//                     <div className="width-95">
//                         <table id="table">
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th>Password</th>
//                                 <th>Role</th>
//                                 <th>Düzenle</th>
//                                 <th>Sil</th>
//                             </tr>
//                             <tr>
//                                 <td>1</td>
//                                 <td>emrecanbalgun</td>
//                                 <td>example@example.com</td>
//                                 <td>**********</td>
//                                 <td>Gozcu</td>
//                                 <td><Button variant="primary">Düzenle</Button></td>
//                                 <td><Button variant="danger">Sil</Button></td>
//                             </tr>
//                             <tr>
//                                 <td>2</td>
//                                 <td>emrecanbalgun</td>
//                                 <td>example@example.com</td>
//                                 <td>**********</td>
//                                 <td>Admin</td>
//                                 <td><Button variant="primary">Düzenle</Button></td>
//                                 <td><Button variant="danger">Sil</Button></td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }