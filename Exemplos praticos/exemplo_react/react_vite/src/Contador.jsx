// import { useState } from "react";


function Contador(props) {

  return (
    <>
      <h1>{props.valor}</h1>
      <button onClick={props.handleClick}> Add +</button>
      
    </>
    )
}

export default Contador