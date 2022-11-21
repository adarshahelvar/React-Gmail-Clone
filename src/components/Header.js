import React from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import "../css/header.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase/compat/app'

const Header = () => {
  const user = useSelector(selectUser);
  console.log("user from Header.js"+ user);
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

        <div className='header__right'>
          <IconButton>
              <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar src={user?.photoURL} onClick= {()=>firebase.auth().signOut() } />
        </div>
    </div>
  )
}

export default Header;