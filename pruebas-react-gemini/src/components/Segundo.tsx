import { useState } from "react"


export const Segundo = () => {

    const [valorSegundo, setValorSegundo] = useState<boolean>(false)

    const handleClick = () => {
        setValorSegundo(!valorSegundo)    
    }

  return (
    <div className="container-segundo">
        <button onClick={handleClick} >
        { valorSegundo ? 'Ocultar' : 'Mostrar' } Mensaje
        </button>
        {valorSegundo && <p>Hola soy un mensaje </p>}
    </div>
  )
}
