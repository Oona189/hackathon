import React, { useState } from "react";
import "./Formparticipant.css";
import APIService from '../../components/APIService';
const Formparticipant = () => {
  const [code_organisme, setTextValue1] = useState("");
  const [id, setTextValue2] = useState("");
  const [nom, setTextValue3] = useState("");
  const [prenom, setTextValue4] = useState("");
  const [sexe, setTextValue5] = useState("");
  const [dateNaissance, setDateValue6] = useState("");
  const [adresse, setTextValue7] = useState("");
  const [tel, setTextValue8] = useState("");
  const [mail, setTextValue9] = useState("");


  
  const handleInputChange1 = (event) => {
    setTextValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setTextValue2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setTextValue3(event.target.value);
  };

  const handleInputChange4 = (event) => {
    setTextValue4(event.target.value);
  };
 
  const handleInputChange5 = (event) => {
    setTextValue5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setDateValue6(event.target.value);
  };
  const handleInputChange7 = (event) => {
    setTextValue7(event.target.value);
  };
  const handleInputChange8 = (event) => {
    setTextValue8(event.target.value);
  };
  const handleInputChange9 = (event) => {
    setTextValue9(event.target.value);
  };
 

  const handleSubmit = (event) => {
    APIService.SetApprenant({code_organisme,nom,prenom,sexe,tel,mail,adresse,dateNaissance,id}).then((rest)=>alert("partenaire créé")).catch(Error => console.log(Error));
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
      
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Code Organisme</div>
          <input
            type="text"
            value={code_organisme}
            onChange={handleInputChange1}
            placeholder="Code Organisme"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>


        <div>


          
          <div style={{ marginLeft: "10px" }}>Matricule</div>
          <input
            type="text"
            value={id}
            onChange={handleInputChange2}
            placeholder="Matricule"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>
      </div>



      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Nom</div>
          <input
            type="text"
            value={nom}
            onChange={handleInputChange3}
            placeholder="Nom"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>


        <div>


          
          <div style={{ marginLeft: "10px" }}>Prenom</div>
          <input
            type="text"
            value={prenom}
            onChange={handleInputChange4}
            placeholder="prenom"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Sexe</div>
          <input
            type="text"
            value={sexe}
            onChange={handleInputChange5}
            placeholder="Sexe"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>


        <div>


          
          <div style={{ marginLeft: "10px" }}>Date de naissance</div>
          <input
            type="date"
            value={dateNaissance}
            onChange={handleInputChange6}
            placeholder="Date de naissance"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>
      </div>
     
      <div>
          <div style={{ marginLeft: "10px" }}>Adresse</div>
          <input
            type="text"
            value={adresse}
            onChange={handleInputChange7}
            placeholder="Adresse"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Téléphone</div>
          <input
            type="text"
            value={tel}
            onChange={handleInputChange8}
            placeholder="Téléphone"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>


        <div>


          
          <div style={{ marginLeft: "10px" }}>Email</div>
          <input
            type="text"
            value={mail}
            onChange={handleInputChange9}
            placeholder="Email"
            style={{
              width: "calc(100% - 20px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>
      </div>

      <div className="buttoncontainer">
        <button className="button" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};
export default Formparticipant;
