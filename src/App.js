import Compose from "./components/Compose";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';

function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen);
  console.log(isMessageOpen);
  
  return (
    <div className="App">
      <Header />
      <div className="app__body">         {/* css in index.css*/}
        <Sidebar />
        <EmailList />
      </div>
      { isMessageOpen && <Compose />}
    </div>
  );
}

export default App;

