import React, { useState } from 'react'
import "./forms.css"
import APIService from '../../Components/APIService';

function Ajout_thèmes() {
    const [domaine, setDomaine] = useState("");
    const [niveau, setNiveau] = useState("");
    const [designation, setDesignation] = useState("");
    const [dureejour, setJour] = useState(0);
    const [heureparjour, setHeure] = useState(0);
    const [dureeheure, setHeure_jour] = useState(0);
    const [publicvise, setPublic] = useState("");
    const [description, setDescription] = useState("");
    const [objectif, setObjectif] = useState("");

    const handleSubmit = (event) => {
        APIService.SetTheme({niveau,description,designation,dureeheure,dureejour,heureparjour,publicvise,objectif}).then((rest)=>alert(`thème créé`)).catch(Error => console.log(Error));
    };
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h1 className='title'>Ajouter un thème</h1>
            <div className='row_field sm:flex-row'>
                <div className='field'><label className='label'>Domaine :</label></div>
                <div className='field'><input id="domaine" className='input' placeholder='Domaine' type='text' value={domaine} required onChange={(event) => {setDomaine(event.target.value);}} /></div>
                <div className='field'><label className='label'>Niveau :</label></div>
                <div className='field'><input id="niveau" className='input' placeholder='Niveau' type='text' value={niveau} required onChange={(event) => setNiveau(event.target.value)} /></div>
                <div className='field'><label className='label'>Désignation :</label></div>
                <div className='field'><input id="designation" className='input' placeholder='Désignation' type='text' value={designation} required onChange={(event) => setDesignation(event.target.value)} /></div>
            </div >
            <div className='field'>
                <label className='label'>Public visé :</label>
                <input className='input' id="publicvise" placeholder='Public visé' type='text' value={publicvise} required onChange={(event) => setPublic(event.target.value)} />
            </div><div className='field'>
                <label className='label'>Description :</label>
                <input className='input' id="description" placeholder='Description' type='text' value={description} required onChange={(event) => setDescription(event.target.value)} />
            </div>
            
            <div className='row_field'>
            <div className='field'><label className='label'>Durée :</label></div>
                <div className='field'><input id="dureejour" className='input' placeholder='jours' type='number' value={dureejour} required onChange={(event) => setJour(event.target.value)} /></div>
                <div className='field'><label className='label'>jours</label></div>
                <div className='field'><input id="heureparjour"className='input' placeholder='heurs par jour' type='number' value={heureparjour} required onChange={(event) => setHeure_jour(event.target.value)} /></div>
                <div className='field'><label className='label'>heures par jour</label></div>
                <div className='field'><input id="dureeheure"className='input' placeholder='heure au total' type='number' value={dureeheure} required onChange={(event) => setHeure(event.target.value)} /></div>
                <div className='field'><label className='label'>heures au total</label></div>
            </div>

            <div className='field'>
                <label className='label'>Objectif :</label>
                <input className='input' id="objectif" placeholder='Objectif' type='text' required value={objectif} onChange={(event) => setObjectif(event.target.value)} />
            </div>
            <div className="buttoncontainer">
                <button className='button'>Terminer</button>
            </div>

        </form >
    )
}

export default Ajout_thèmes