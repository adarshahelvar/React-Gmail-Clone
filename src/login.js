import React from 'react';
import { useDispatch } from 'react-redux';
import './css/login.css';
import { signin } from './features/userSlice';
import { auth, provider } from './firebase';

const Login = ()=>{
  const dispatch = useDispatch();

  const login = () => {
  auth.signInWithPopup(provider).then(({user})=>{
    dispatch(signin({
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
    }))
  }).catch(error=>{
    alert(error);
  })
};

  return (
    <div className='loginwrapper'>
        <div className='logoin'>
            <img src='./GmailLogo2.webp' alt='GmailLogo' />
            <button className='gmail_login' onClick={login}>Login With Gmail</button>
        </div>
    </div>
  )
};

export default Login;