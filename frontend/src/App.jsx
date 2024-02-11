import React from "react";
import  "./Pages/Ajoutparticipant/ajoutparticipant.css";
import Formparticipant from "./Pages/Ajoutparticipant/Formparticipant.jsx";
import Navbar from "./Navbar/Navbar.jsx";


function App() {
  return (
    
    <><div className="container">
      <Navbar/>
    <h2 className="title">Ajouter un participant </h2> 
    <Formparticipant/>
  </div></>
    
  );
}export default App
