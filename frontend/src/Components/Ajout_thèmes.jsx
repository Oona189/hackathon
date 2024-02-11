import React from 'react'
import "./forms.css"

function Ajout_thèmes() {
    return (
        <div className='form'>
            <h1 className='title'>Ajouter un thème</h1>
            <div className='row_field'>
                <div className='field'>
                    <label className='label'>Domaine</label>
                    <input className='input' placeholder='Domaine' type='text' required />
                </div>
                <div className='field'>
                    <label className='label'>Niveau</label>
                    <input className='input' placeholder='Niveau' type='text' required />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Désignation</label>
                <input className='input' placeholder='Désignation' type='text' required />
            </div>
            <div className='row_field'>
                <div className='field'>
                    <label className='label'>Domaine</label>
                    <input className='input' placeholder='Domaine' type='text' required />
                </div>
                <div className='field'>
                    <label className='label'>Niveau</label>
                    <input className='input' placeholder='Niveau' type='text' required />
                </div>
                <div className='field'>
                    <label className='label'>Niveau</label>
                    <input className='input' placeholder='Niveau' type='text' required />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Public visé</label>
                <input className='input' placeholder='Public visé' type='text' required />
            </div><div className='field'>
                <label className='label'>Description</label>
                <input className='input' placeholder='Description' type='text' required />
            </div>
            <div className='field'>
                <label className='label'>Objectif</label>
                <input className='input' placeholder='Objectif' type='text' required />
            </div>


        </div>
    )
}

export default Ajout_thèmes