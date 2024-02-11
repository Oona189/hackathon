import React from 'react'
import "./ajoutparticipant.css";
import Formparticipant from "./Formparticipant";

function Ajout_Participant() {
  return (
    <div className="container">
    <h1 className="title">Ajouter un participant</h1> 
    <Formparticipant />
  </div>
  )
}

export default Ajout_Participant