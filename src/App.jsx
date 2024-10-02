 
import { useState } from 'react';
import './App.css'
import axios from "axios";

function App() {

  const [precios,setPrecios]=useState("")


  const peticiona = () => {
    axios.get(`https://api-reportediario.cre.gob.mx/api/EstacionServicio/Petroliferos?entidadId=13&municipioId=048`)

      .then((res) => {
      	console.log(res.data);
				setPrecios(res.data.results);
    })
  }
 
  return (
    <>
    
      <button onClick={peticiona}> gasolina</button>
    </>
  )
}

export default App
