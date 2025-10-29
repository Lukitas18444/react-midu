import { useEffect } from "react"

export const Cuarto = () => {

    useEffect(() => {
        document.title = "soy el cuarto ejercicio"
        
        return () => {
            document.title = "React.app"
        }

    },[])

  return (
    <div>el titulo ha cambiado</div>
  )
}
