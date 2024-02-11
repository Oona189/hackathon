import React from "react";
import  "./Pages/Ajoutparticipant/ajoutparticipant.css";
import Formparticipant from "./Pages/Ajoutparticipant/Formparticipant.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Formations from './Pages/Formations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Formations/>}/>
        <Route path="/form" element={<Formparticipant/>}/>
      </Routes>
    </Router>
    </>
    
  );
}export default App
