import React from 'react';
import '../css/sidebar.css';
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Button startIcon={<AddIcon />} className='compose__btn' >Compose</Button>

        <SidebarOptions Icon={InboxIcon} title="Inbox" number="224" isactive={true} />
        <SidebarOptions Icon={StarRateIcon} title={"Starred"} number="500" />
        <SidebarOptions Icon={WatchLaterIcon} title={"Snoozed"} number="300" />
        <SidebarOptions Icon={LabelImportantIcon} title={"Important"} number="452" />
        <SidebarOptions Icon={SendIcon} title={"Sent"} number="254" />
        <SidebarOptions Icon={DraftsIcon} title={"Drafts"} number="224" />
        <SidebarOptions Icon={LabelIcon} title={"Category"} number="224" />
        <SidebarOptions Icon={DeleteIcon} title={"[Map]/Trash"} number="224" />
        <SidebarOptions Icon={FindInPageIcon} title={"Documents"} number="224" />
        <SidebarOptions Icon={ExpandMoreIcon} title={"More"} number="224" />
        <hr />
        <h3 className='sidebaroptions__heading'>Meet</h3>
        <SidebarOptions Icon={VideocamIcon} title={"New meeting"} />
        <SidebarOptions Icon={KeyboardIcon} title={"New meeting"} />
    </div>
  )
};

export default Sidebar;