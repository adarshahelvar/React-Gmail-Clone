import React from 'react';
import '../css/emailList.css';
import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const EmailListSetting = () => {
  return (
    <div className='Emaillist__settings' >
        <div className='Emaillist__settingsLeft' >
            <IconButton>
                <CheckBoxOutlineBlankIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>

        <div className='Emaillist__settingsRight' >
            <p></p>1-50 of 10,222
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
        </div>

    </div>
  )
};

export default EmailListSetting;