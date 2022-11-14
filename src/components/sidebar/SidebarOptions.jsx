import React from 'react';
import "./Sidebar.css";

const SidebarOptions = ({ text, Icon, active }) => {
    return (
        <div className='sidebar-options'>
            <Icon className="sidebar-options-icon" />
            <h2 className='sidebar-options-text'>{text}</h2>
        </div>
    )
}

export default SidebarOptions;