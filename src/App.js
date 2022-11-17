import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import { selectUser } from "./features/userSlice";
import EmailDetail from "./components/EmailDetail";
import Login from "./login";

function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen);
  console.log(isMessageOpen);
  const user= useSelector(selectUser);
  console.log(user);

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

