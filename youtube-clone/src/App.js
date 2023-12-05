import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Sidebar/>
        
      </div>
    </div>
  );
}

export default App;
