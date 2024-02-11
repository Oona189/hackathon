import React, { useState } from 'react'
import './form2.css'
import APIService from '../../Components/APIService';

function Ajout_partenaire() {
  const [sigle, setSigle] = useState("");
  const [categorie, setCategorie] = useState("");
  const [denomination, setDenomination] = useState("");
  const [adresse, setAdresse] = useState("");
  const [pays, setPays] = useState("");
  const [tel, setTlp] = useState("");
  const [fax, setFax] = useState("");
  const [mail, setEmail] = useState("");
  const [url, setURL] = useState("");
  const [notes, setNotes] = useState("");




  const handleSubmit = (event) => {
    APIService.SetPartenaire({sigle,denomination,categorie,adresse,pays,tel,fax,mail,url,notes}).then((rest)=>alert("Partenaire créé")).catch(Error => console.log(Error));
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Ajouter un partenaire</h1>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Sigle</label>
          <input className='input' placeholder='Sigle' type='text' value={sigle} required onChange={(event) => setSigle(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Catégorie</label>
          <input className='input' placeholder='Catégorie' type='text' value={categorie} required onChange={(event) => setCategorie(event.target.value)} />
        </div>
      </div>
      <div className='field'>
              <label className='label'>Dénomination</label>
              <input className='input' placeholder='Dénomination' type='text' value={denomination} required onChange={(event) => setDenomination(event.target.value)} />
          </div>
          <div className='row_field'>
        <div className='field'>
          <label className='label'>Adresse</label>
          <input className='input' placeholder='Sigle' type='text' value={adresse} required onChange={(event) => setAdresse(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Pays</label>
          <input className='input' placeholder='Pays' type='text' value={pays} required onChange={(event) => setPays(event.target.value)} />
        </div>
      </div>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Téléphone</label>
          <input className='input' placeholder='Téléphone' type='tel' value={tel} required onChange={(event) => setTlp(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>Fax</label>
          <input className='input' placeholder='Fax' type='tel' value={fax} required onChange={(event) => setFax(event.target.value)} />
        </div>
      </div>
      <div className='row_field'>
        <div className='field'>
          <label className='label'>Email</label>
          <input className='input' placeholder='Email' type='email' value={mail} required onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className='field'>
          <label className='label'>URL</label>
          <input className='input' placeholder='URL' type='text' value={url} required onChange={(event) => setURL(event.target.value)} />
        </div>
      </div>
      <div className='field'>
              <label className='label'>Notes</label>
              <input className='input' placeholder='Notes' type='text' value={notes} onChange={(event) => setNotes(event.target.value)} />
          </div>
          <div className="buttoncontainer">
              <button className='button'>Terminer</button>
              </div>

    </form>
  )
}

export default Ajout_partenaire