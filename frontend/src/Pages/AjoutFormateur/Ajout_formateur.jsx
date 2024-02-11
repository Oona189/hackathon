import React, { useState } from 'react'
import './forms.css'

function Ajout_formateur() {
  const [email, setEmail] = useState("");
  const [tlp, setTlp] = useState("");
  const [adresse, setAdresse] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [civilite, setCivilite] = useState("");
  const [diplome, setDiplome] = useState("");
  const [statut, setStatut] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Ajouter un formateur</h1>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Nom</label>
          <input className='input' placeholder='Nom' type='text' value={nom} required onChange={(event) => setNom(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Prénom</label>
          <input className='input' placeholder='Prénom' type='text' value={prenom} required onChange={(event) => setPrenom(event.target.value)} />
        </div>
      </div>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Civilité</label>
          <input className='input' placeholder='Civilité' type='text' value={civilite} required onChange={(event) => setCivilite(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Sexe</label>
          <input className='input' placeholder='Sexe' type='text' value={sexe} required onChange={(event) => setSexe(event.target.value)} />
        </div>
      </div>
      <div className='field'>
          <label className='label'>Adresse</label>
          <input className='input' placeholder='Adresse' type='text' value={adresse} required onChange={(event) => setAdresse(event.target.value)} />
        </div>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Téléphone</label>
          <input className='input' placeholder='Téléphone' type='tel' value={tlp} required onChange={(event) => setTlp(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Email</label>
          <input className='input' placeholder='Email' type='tel' value={email} required onChange={(event) => setEmail(event.target.value)} />
        </div>
      </div>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Diplôme</label>
          <input className='input' placeholder='Diplôme' type='text' value={diplome} required onChange={(event) => setDiplome(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Statut</label>
          <input className='input' placeholder='Statut' type='text' value={statut} required onChange={(event) => setStatut(event.target.value)} />
        </div>
      </div>
          <div className="buttoncontainer">
              <button className='button'>Terminer</button>
              </div>

    </form>
  )
}

export default Ajout_formateur