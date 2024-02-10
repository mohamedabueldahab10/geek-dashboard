import './App.css';
import Body from './Body/Body';
import Navbar from './Nav/Navbar';
import Tabs from './Tabs/Tabs';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Tabs />
     <div className="bodyContainer">
      <Body />
     </div>
    </div>
  );
}

export default App;
