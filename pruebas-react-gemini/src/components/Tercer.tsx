import { useState } from "react"


export const Tercer = () => {

    const [valorTercer, setValorTercer] = useState(" ")

    const handleKey = (e) => {
        setValorTercer(e.target.value)
    }



  return (
    <div className="container-tercer">
        <input type="text" onChange={handleKey} value={valorTercer}/>
        <p> {valorTercer} </p>
    </div>
  )
}
