
import React from "react";
import  "./Pages/Ajoutformation/ajoutformation.css";
import MyForm from "./Pages/Ajoutformation/MyForm.jsx";

function App() {
  return (
    <><div className="container">
    <h2 className="title">Ajouter une formation</h2> 
    <MyForm />
  </div></>
    
  );
}export default App

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Ajout_thèmes from './Components/Ajout_thèmes'
import Ajout_partenaire from './Components/Ajout_partenaire'

function App() {

  return (
    <div className='app'>
    <Ajout_thèmes/>
    </div>
  )
}

export default App
*/