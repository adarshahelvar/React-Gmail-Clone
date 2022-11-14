import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../css/header.css";
const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
          <IconButton>
            <ReorderIcon />
          </IconButton>
          <img src='./GmailLogo.jpg' alt='GmailLogo' />
        </div>

        <div className='header__middle'>
          <div className='search_mail'>
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
            <input type='text' placeholder='search mail' />
            <IconButton>
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </div>
        </div>
    </div>
  )
}

export default Header;