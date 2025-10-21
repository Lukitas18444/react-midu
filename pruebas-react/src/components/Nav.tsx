import { useEffect, useState } from "react"



export const Nav = () => {
    const navButton = () =>{
        const [estadoNav, setEstadoNav] = useState('-');
        const [estadoNavVerif, setEstadoNavVerif] = useState(false)


        

        return estadoNav
    }
    const handleClick = () =>{
            alert("funciona")
        }


  return (
    <div className="nav">
         <button onClick={handleClick}>soy un boton</button>
        <div> {navButton()}</div>
    </div>
  )
}
