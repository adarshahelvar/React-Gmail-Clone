import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import EmailDetail from "./components/EmailDetail";

function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen);
  console.log(isMessageOpen);
  
  return (
    <Router>
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
    </Router>
  );
}

export default App;

