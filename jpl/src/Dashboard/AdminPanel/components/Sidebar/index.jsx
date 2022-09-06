import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import SideBarItem from './sidebar-item';
import { useNavigate } from "react-router-dom";
import './styles.css';
import logo from '../../../../assets/img/logo-junior.png'
import LogoutIcon from '../../../assets/icons/logout.svg';

import './styles.css';

function SideBar ({ menu }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    const logout = () => {
        localStorage.removeItem('user');
        navigate("/");
    }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                    <img style={{marginLeft: "55px"}}
                        src={logo}
                        alt="logo" />
                </div>

                <div className='sidebar-container' >
                    <div className='sidebar-items' >
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label' onClick={() => logout()}>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;