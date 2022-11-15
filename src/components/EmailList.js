import React from 'react';
import '../css/emailList.css';
import EmailBody from './EmailBody';
import EmailListSetting from './EmailListSetting';
import EmailType from './EmailType';

const EmailList = () => {
  return (
    <div className='emaillist'>
        <EmailListSetting />
        <EmailType />
        <EmailBody name='Name' subject='This is Subject' message='Gmail Clone Under Construction...!Gmail Clone Under Construction...!Gmail Clone Under Construction...!Gmail Clone Under Construction...!Gmail Clone Under Construction...!Gmail Clone Under Construction...!Gmail Clone Under Construction...!' time='3:30 PM'/>
    </div>
  )
};

export default EmailList;