import "./App.css";
import NavBar from "./navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Item from "./Components/Cart";

function App() {
  return (
    <div className="App">


      <Router>
      <NavBar />
      
        <Routes>
          <Route  path={"/mens"} />
          <Route  path={"/womens"}/>
          <Route  path={"/kids"} Component={Item}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
