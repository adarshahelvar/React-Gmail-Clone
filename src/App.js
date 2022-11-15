import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">         {/* css in index.css*/}
        <Sidebar />
        <EmailList />
      </div>
    </div>
  );
}

export default App;

