import React, { useState } from "react";
import "./MyForm.css";
import APIService from "../../Components/APIService";

const MyForm = () => {
  const [code_organisme, setTextValue1] = useState("");
  const [code, setTextValue2] = useState("");
  const [nbthemes, setIntValue3] = useState(0);
  const [objet, setTextValue4] = useState("");
  const [datedebut, setDateValue5] = useState("");
  const [datefin, setDateValue6] = useState("");
  const [duree, setIntValue7] = useState(0);
  const [notes, setNotes] = useState("");

  const handleInputChange1 = (event) => {
    setTextValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setTextValue2(event.target.value);
  };

  const handleInputChange3 = (event) => {
    setIntValue3(event.target.value);
  };

  const handleInputChange4 = (event) => {
    setTextValue4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setDateValue5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setDateValue6(event.target.value);
  };
  const handleInputChange7 = (event) => {
    setIntValue7(event.target.value);
  };

  const handleSubmit = (event) => {
    APIService.SetFormation({code,code_organisme,nbthemes,datedebut,datefin,duree,notes,objet}).then((rest)=>alert("formation créée")).catch((e)=>console.log(e));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
    >
     <div>
     <div style={{ marginLeft: "10px" }}>Code organisme</div>
     <input
        type="text"
        value={code_organisme}
        onChange={handleInputChange1}
        placeholder="code organisme."
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
          <div style={{ marginLeft: "10px" }}>Code</div>
          <input
            type="text"
            value={code}
            onChange={handleInputChange2}
            placeholder="code"
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
          <div style={{ marginLeft: "10px" }}>Nombre de participants</div>
          <input
            type="number"
            value={nbthemes}
            onChange={handleInputChange3}
            placeholder="nombre de participant."
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
<div style={{ marginLeft: "10px" }}>Objet</div>
<input
        type="text"
        value={objet}
        onChange={handleInputChange4}
        placeholder="Objet"
        style={{
          width: "calc(100% - 20px)",
          margin: "5px",
          borderRadius: "20px",
          border: "1px solid #3D3B40",
          padding: "8px",
        }}
      /></div>
      

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div style={{ marginLeft: "10px" }}>Date debut</div>
          <input
            type="date"
            value={datedebut}
            onChange={handleInputChange5}
            placeholder="date debut"
            style={{
              width: "calc(100% - 30px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>

        <div>
          <div style={{ marginLeft: "10px" }}>Date fin</div>
          <input
            type="date"
            value={datefin}
            onChange={handleInputChange6}
            placeholder="date fin"
            style={{
              width: "calc(100% - 30px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>

        <div>
          <div style={{ marginLeft: "10px" }}>Exercice</div>
          <input
            type="number"
            value={duree}
            onChange={handleInputChange7}
            placeholder="exercice"
            style={{
              width: "calc(100% - 30px)",
              margin: "5px",
              borderRadius: "20px",
              border: "1px solid #3D3B40",
              padding: "8px",
            }}
          />
        </div>
      </div>
      <div>
     <div style={{ marginLeft: "10px" }}>Notes</div>
     <input
        type="text"
        value={notes}
        onChange={(e)=>setNotes(e.target.value)}
        placeholder="Notes."
        style={{
          width: "calc(100% - 20px)",
          margin: "5px",
          borderRadius: "20px",
          border: "1px solid #3D3B40",
          padding: "8px",
        }}
      />
     </div>
      <div className="buttoncontainer">
        <button className="button" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};
export default MyForm;
