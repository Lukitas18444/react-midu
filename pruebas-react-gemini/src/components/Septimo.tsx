import { useEffect, useState } from "react"

interface Props{
    id: number;
    name: string;
}

export const Septimo = () => {
    
    const [busqueda, setBusqueda] = useState<Props | null>(null) 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const respuesta = await fetch(url);
                if(!respuesta.ok){
                    throw new Error ('Fallo al obtener los datos')
                }
                const json = await respuesta.json()
                setBusqueda(json)
            } catch (err) {
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if (loading) return <p>Cargando... ⏳</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
    
  return (
    <div>
      <h3>Datos de la API:</h3>
      <p>ID: {busqueda?.id}</p>
      <p>Título: **{busqueda?.name}**</p>
    </div>
  );
  
  

}
