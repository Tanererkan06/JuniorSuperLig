import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import SideBarItem from './sidebar-item';
import { useHistory  } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

import './styles.css';

// Sonradan eklenenler

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar ({ menu }) {
    const history = useHistory();
    const location = useLocation();
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
        history.push("/home");
        window.location.reload();
    }

    return(
        <>
            <Navbar collapseOnSelect expand="" bg="dark" variant="dark" style={{fontWeight:"1",color:"blue", height: '100vh', overflow: 'scroll'}}>
                <Container style={{fontWeight:"1",color:"blue"}}>
                    {/* <Navbar.Brand href="">Junior Süper Lig</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="" />
                    <Navbar.Collapse id="">
                    <Nav className="me-auto">
                        {
                            menu.map((item, index) => 
                            (   
                                <Nav.Link key={index} href={item.path}>
                                    {item.title}
                                </Nav.Link>      
                            ))
                        }
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="" onClick={() => logout()}><TbLogout/></Navbar.Toggle>
                </Container>
                
            </Navbar>
        </>
    )
}

export default SideBar;