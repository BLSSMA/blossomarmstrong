import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Intro from "./Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Work from "./pages/Work";
import React from "react";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Footer from "./Footer";
import NavBar from "./NavBar";



const App = () => {
  return (
    <div className="App">
<Router>
     <NavBar />

     <main className="main-content">
       <Routes>
         <Route path="/" element={<Intro />} />
         <Route path="/Work" element={<Work />} />
         <Route path="/Resume" element={<Resume />} />
         <Route path="/Certificates" element={<Certificates />} />
         {/* Define other routes that you need*/}
       </Routes>
     </main>
   </Router>


<Footer />

    </div>
  );
}

export default App;
