import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './styles.css';

const SideBarItem = ({ item, active }) => {
    const [hover, setHover] = useState(false);
    const [isSubMenuShow, setIsSubMenuShow] = useState(false);
    return (
        
        <div>
      <div onMouseUp={() => setIsSubMenuShow(!isSubMenuShow)}>
      <Link 
            to={item.path} 
            className={active ? 'sidebar-item-active' : 'sidebar-item'} >
                <img 
                    src={item.icon}
                    alt={`icon-${item.icon}`}
                    className='sidebar-item-icon' />
                <span className='sidebar-item-label'>{item.title}</span>
        </Link>
      </div>
    
      {item.submenu && isSubMenuShow && <SubMenu dropDownItem={item.submenu}>
            </SubMenu>}
      
    </div>
        
    )
}




/* const SideBarItem = ({ item }) => {
  const [isSubMenuShow, setIsSubMenuShow] = useState(false);

  return (
    <div>
      <div onClick={() => setIsSubMenuShow(!isSubMenuShow)}>
        {item.title}
      </div>
      {item.submenu && isSubMenuShow && <SubMenu dropDownItem={item.submenu} />}
    </div>
  );
}; */

const SubMenu = ({ dropDownItem,active }) => {
  return (
    <div className="drop-down">
      <ul>
        {dropDownItem.map((item) => {
          return <li key={item.title}><Link 
            to={item.path} 
            className={active ? 'sidebar-item-active' : 'sidebar-item'} >
                <img 
                    src={item.icon}
                    alt={`icon-${item.icon}`}
                    className='sidebar-item-icon' />
                <span className='sidebar-item-label'>{item.title}</span>
        </Link></li>;
        })}
      </ul>
    </div>
  );
};

export default SideBarItem;
