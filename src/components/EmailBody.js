import React from 'react';
import '../css/emailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';

const EmailBody = ({name, subject, message, time}) => {
// const EmailBody = (props) => {
    // console.log(props);
  return (
    <div className='emailbody' >
        <div className='emailbody__left'>
            <CheckBoxOutlineBlankIcon />
            <StarBorderIcon />
            <LabelIcon />
            <h4>{name}</h4>
        </div>
        <div className='emailbody__middle'>
            <div className='emailbody__middle__msg'>
                <p><b>{subject}</b>{message}</p>
            </div>
        </div>
        <div className='emailbody__right'>
            <p>{time}</p>
        </div>
    </div>
  )
};

export default EmailBody;