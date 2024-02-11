import React, { useState } from "react";
import "./Formparticipant.css";

const Formparticipant = () => {
  const [textValue1, setTextValue1] = useState("");
  const [textValue2, setTextValue2] = useState("");
  const [textValue3, setTextValue3] = useState("");
  const [textValue4, setTextValue4] = useState("");
  const [textValue5, setTextValue5] = useState("");
  const [dateValue6, setDateValue6] = useState("");
  const [textValue7, setTextValue7] = useState("");
  const [textValue8, setTextValue8] = useState("");
  const [textValue9, setTextValue9] = useState("");


  
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
    event.preventDefault();
    console.log("Valeur du champ 1:", textValue1);
    console.log("Valeur du champe 2:", textValue2);
    console.log("Valeur du champ  3:", textValue3);
    console.log("Valeur du champ  4:", textValue4);
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Code Organisme</div>
          <input
            type="text"
            value={textValue1}
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
            value={textValue2}
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
            value={textValue3}
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
            value={textValue4}
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
            value={textValue5}
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
            value={dateValue6}
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
            value={textValue7}
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
            value={textValue8}
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
            value={textValue9}
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
