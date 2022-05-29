import React from "react";

const Para = () => {
  let os = [
    {A:"Nokia"},{A:"Samsung"},{A:"Lava"},{A:"Oppo"},{A:"Vivo"}
    
      
];

  return (
    <div>
      <h1>Mobile Operating System</h1>
      {os.map((e) =>{
       return <li>{e.A}</li>
      })}
    </div>
  );
};

export default Para;
