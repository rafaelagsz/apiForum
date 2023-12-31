import axios from "axios"
import useEffect from "react"

function Card({i, title, content}){

    const pegarNoticias=()=>{
        axios.get('http://localhost:8000/news')
        .then(response => props.setNews(response.data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        pegarNoticias()
    }, [])

    const novasNoticias = props.news.map( (iten) =>{
        return(
            <div key={item.id}>
                <h2>
                    {item.titulo}
                </h2>

                <p>
                    {item.content}
                </p>
            </div>
        )
    })

    return(
        <>
        {novasNoticias}
        </>
    )
}

export default Card