import { useEffect, useState } from "react"


export const Sexto = () => {

    const [temporizador, setTemporizador] = useState(Number)
    const [parar, setParar] = useState(true)
    useEffect(()=>{
      const intervalo = setInterval(() => {
        setTemporizador(temporizador +1)

      }, 1000)

      return () => {
      clearInterval(intervalo);
      console.log('Temporizador limpiado');
    };


    })

    const handlePausa = () =>{
      setTemporizador( 0);

      setParar(!parar)
    }


  return (
    <div>
      {
        parar ? 'Soy un temporizador: '+ temporizador : 'No soy un temporizador'
      }

      <button onClick={handlePausa}>{parar ? 'Pausa' : 'Play'}</button>
    </div>
  )
}
