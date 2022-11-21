import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { selectUser, signin, signout } from "./features/userSlice";
import EmailDetail from "./components/EmailDetail";
import Login from "./login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {

  const dispatch = useDispatch();

  const isMessageOpen = useSelector(selectsendMessageIsOpen);
  // console.log(isMessageOpen);
  const user= useSelector(selectUser);
  // console.log(user);

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        }))
      }
      else{
          dispatch(signout())
      }
    })
  },[]);

  return (
    <Router>
      {
        user && (
          <div className="App">
        <Header />
        <div className="app__body">         {/* css in index.css*/}
          <Sidebar />
          <Switch>
              <Route exact path="/">
                <EmailList />
              </Route>
              <Route path="/mail">
                <EmailDetail />
              </Route>
          </Switch>
        </div>
        { isMessageOpen && <Compose />}
      </div>
        ) } : {(
          <Login />
        )
      }
      
    </Router>
  );
}

export default App;

