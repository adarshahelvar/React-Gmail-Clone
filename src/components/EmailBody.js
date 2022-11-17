import React from 'react';
import '../css/emailList.css';
import { useHistory } from 'react-router-dom';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import { useDispatch } from 'react-redux';
import { openMessage } from '../features/mailSlice';

const EmailBody = ({name, subject, message, time, email}) => {
// const EmailBody = (props) => {
    // console.log(props);
const history = useHistory();
    const dispatch = useDispatch();

    const setMail = ()=>{
        dispatch(openMessage({
            name,
            subject, 
            message, 
            time,
            email
        }))

        history.push('/mail')
    };


  return (
    <div className='emailbody' onClick={setMail}>
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