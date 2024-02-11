import React from "react";
import  "./Pages/Ajoutparticipant/ajoutparticipant.css";
import Formparticipant from "./Pages/Ajoutparticipant/Formparticipant.jsx";
import Ajouformation from "./Pages/Ajoutformation/ajoutformation.jsx";
import Ajout_formateur from "./Pages/AjoutFormateur/Ajout_formateur.jsx";
import Ajout_thèmes from "./Pages/AjoutThème/Ajout_thèmes.jsx";
import Ajoutparticipant from "./Pages/Ajoutparticipant/ajoutparticipant.jsx";
import Ajout_partenaire from "./Pages/AjoutPartenaire/Ajout_partenaire.jsx";


import NavBar from "./Navbar/NavBar.jsx";
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
