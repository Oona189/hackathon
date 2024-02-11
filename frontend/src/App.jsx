import React from "react";
import  "./Pages/Ajoutparticipant/ajoutparticipant.css";
import Ajouformation from "./Pages/Ajoutformation/Ajout_Formation.jsx";
import Ajout_formateur from "./Pages/AjoutFormateur/Ajout_formateur.jsx";
import Ajout_thèmes from "./Pages/AjoutThème/Ajout_thèmes.jsx";
import Ajoutparticipant from "./Pages/Ajoutparticipant/Ajout_Participant.jsx";
import Ajout_partenaire from "./Pages/AjoutPartenaire/Ajout_partenaire.jsx";
import NavBar from "./Navbar/Navbar.jsx";
import Formations from './Pages/Formations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <>
    <Router>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Formations/>}/>
        <Route path="/ajouterformation" element={<Ajouformation/>}/>
        <Route path="/ajouterformateur" element={<Ajout_formateur/>}/>
        <Route path="/ajoutertheme" element={<Ajout_thèmes/>}/>
        <Route path="/ajouterparticipant" element={<Ajoutparticipant/>}/>
        <Route path="/ajouterpartenaire" element={<Ajout_partenaire/>}/>
      </Routes>
    </Router>
    </>
    
  );
} export default App
