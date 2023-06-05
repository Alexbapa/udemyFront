import React from "react";

function SaludoMundo(props) {
   const {userInfo, saludarFn} = props;
   const {nombre = "Anonimo"} = userInfo;
   const {edad = "sin dato"} = userInfo;


    return( 
     <button onClick={()=> {saludarFn(nombre, edad)}}>saludar</button>
    );
  }

export default SaludoMundo;