import { useState } from "react"



export const Primer = () => {
    const [numeroContador, setNumeroContador] = useState(0);

    const handleSuma = () => {
      setNumeroContador(numeroContador+1)
    }
    const handleResta = () => {
      setNumeroContador(numeroContador-1)
    }
    


  return (
    <div className="container-primer">
      <h5>Contador</h5>
      <button onClick={handleResta}>-</button>
      <p>{numeroContador}</p>
      <button  onClick={handleSuma}>+</button>
    </div>
  )
}

