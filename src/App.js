import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SaludoMundo from './components/SaludoMundo';
import MouseColor from './components/MouseColor';

function App() {
  const user = {
    nombre: "tulio barcena",
    edad: 38,
    color: "rojo"
  };

  const grados = {
    secundaria: "liberada",
     preparatoria : "liberada",
    licenciatura: "liberada"
  };

  const saludarFn = (nombre, edad) => {
    console.log("hola " + nombre + " tines " + edad + " años");
    console.log(`hola ${nombre} tienes ${edad} años`);
  };

  const [stateCar, setSateCar] = useState(false);
  const [contar, setContar] = useState(0);
  const [mostrar, setMostrar] = useState(true);
  
  
  useEffect(()=>{
     console.log(`clicks ${contar} `);
     document.title = `clicks ${contar} `;
  }, [contar]);


  const encenderApagar = () => {
    //setSateCar(!stateCar); si usar directamente el stateCar el de abajo es para usar el valor actual del setStateCar por si se necesita pasar a un componente externo
    setSateCar(prevValue => !prevValue);
    setContar(contar + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SaludoMundo userInfo={user} gradosInfo={grados} saludarFn={saludarFn} />
        <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Clicks: ${contar}</h4>
        <button onClick={encenderApagar}  >Encender / Apagar</button>
        <button onClick={()=> setMostrar(false)}>Dejar de mostrar</button>
        {mostrar ? <MouseColor/> : null}
      </header>
    </div>
  );
}

export default App;
