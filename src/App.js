import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Intro from "./Intro";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <div className="containerNavBar">
        <NavBar />
        </div>
      <div className="container">
       <Intro />
       </div>
    </div>
  );
}

export default App;
