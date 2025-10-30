import { useEffect, useState } from "react"


export const Sexto = () => {

    const [temporizador, setTemporizador] = useState(0)
    const [parar, setParar] = useState(true)
    useEffect(()=>{
      setInterval(() => {
        setTemporizador(temporizador + 1)
      }, 1000)



    })

    const handlePausa = () =>{
      setTemporizador( 0);
      clearTimeout(temporizador);
      clearInterval(temporizador);
      setParar(false)
    }


  return (
    <div>
      {
        parar ? 'Soy un temporizador: '+ temporizador : 'No soy un temporizador'
      }

      <button onClick={handlePausa}>Pausa</button>
    </div>
  )
}
