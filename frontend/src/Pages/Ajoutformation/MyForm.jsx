import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [textValue1, setTextValue1] = useState("");
  const [textValue2, setTextValue2] = useState("");
  const [intValue3, setIntValue3] = useState(0);
  const [textValue4, setTextValue4] = useState("");
  const [dateValue5, setDateValue5] = useState("");
  const [dateValue6, setDateValue6] = useState("");
  const [intValue7, setIntValue7] = useState(0);

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
    event.preventDefault();
    console.log("Valeur du champ 1:", textValue1);
    console.log("Valeur du champe 2:", textValue2);
    console.log("Valeur du champ  3:", intValue3);
    console.log("Valeur du champ  4:", textValue4);
    console.log("Valeur du champ  5:", dateValue5);
    console.log("Valeur du champ 6:", dateValue6);
    console.log("Valeur du champ 7:", intValue7);
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column"}}
    >
     <div>
     <div style={{ marginLeft: "10px" }}>Code organisme</div>
     <input
        type="text"
        value={textValue1}
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
            value={textValue2}
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
            value={intValue3}
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
        value={textValue4}
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
            value={dateValue5}
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
            value={dateValue6}
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
            value={intValue7}
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
      <div className="buttoncontainer">
        <button className="button" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};
export default MyForm;
