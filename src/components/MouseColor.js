import React, { useState, useEffect } from 'react';

function MouseColor() {

  const [color, setColor] = useState("red"); 

  useEffect(()=>{
      function onMouseMove(evento){
        if(evento.clientX < window.innerWidth / 2){
          setColor("red");
        }else{
          setColor("blue");
        }
      }

      window.addEventListener("mousemove", onMouseMove);

       return () => {
        
         window.removeEventListener("mousemove", onMouseMove);
       };

  }, []);

    return (
        <div style={{height: "100px", width: "100vw", background: color}}></div>
      );
  }

export default MouseColor;