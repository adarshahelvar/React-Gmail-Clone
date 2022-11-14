import React from 'react';
import '../css/sidebar.css';
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon />} className='compose__btn' >Compose</Button>
    </div>
  )
};

export default Sidebar;