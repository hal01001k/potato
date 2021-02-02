import React, {useState} from 'react';
import {SidebarData} from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import './Sidebar.css'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <IconContext.Provider value={{color: '#0000000'}}>
                <div className='sidebar'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </div>
                <div className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className='side-menu-items' onClick={showSidebar}>
                        <li className='side-toggle'>
                            <AiIcons.AiOutlineClose/>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </IconContext.Provider>
        </div>
    );
}

export default Sidebar;
