import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../../Components/Card/Card"

function Home(props){

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
        <>
        <button onClick={handleLogout}>Sair</button>
        Home

        <Card news={props.news} setNews={props.setNews}/>
        </>
    )
}

export default Home