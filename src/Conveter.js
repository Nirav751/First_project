import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import "./App.css";

const Converter = () => {
  const myStyle = {
    width: "60%"
  };

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");


  const mili=()=>{
    value= {value}*1000;
  }

  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <div className='container mt-4'>
        <h2>Converter Numeric Value</h2>
        <div className="form-floating mb-3">
          <input 
            type="number" 
            style={myStyle} 
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            className="form-control"
            placeholder="Enter value in meters"
          />
        </div>

        <button 
          type="button" 
          className="btn btn-primary me-2" 
          onClick={() => setResult(`${value} meters = ${value * 1000} millimeters`)}>
          Convert to Millimeter
        </button>

        <button 
          type="button" 
          className="btn btn-primary me-2" 
          onClick={() => setResult(`${value} meters = ${value * 100} centimeters`)}>
          Convert to Centimeter
        </button>

        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={() => setResult(`${value} meters`)}>
          Convert to Meter
        </button>

        {result && <div className="mt-3 alert alert-success">{result}</div>}
      </div>
    </div>
  );
};

export default Converter;
