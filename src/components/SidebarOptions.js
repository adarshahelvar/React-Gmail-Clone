import React from 'react';
import '../css/sidebaroptins.css';
const SidebarOptions = ({Icon, title, number, isactive}) => {
  return (
    <div className={`sidebarOptions ${isactive && 'SidebarOptions--active'}`}>
        <Icon />
        <h4>{title}</h4>
        <p>{number}</p>
    </div>
  )
};

export default SidebarOptions;