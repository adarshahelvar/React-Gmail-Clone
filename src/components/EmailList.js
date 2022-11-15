import React from 'react';
import '../css/emailList.css';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';

const EmailList = () => {
  return (
    <div className='emaillist'>
        <EmailListSetting />
        <EmailType />
    </div>
  )
};

export default EmailList;