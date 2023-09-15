import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const saveUserInfoLocalStorage = (token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        const credencials = {email, password}

        axios.post('http://localhost:8000/login', credencials, {
            header:{
                'Content-Type' : 'application/json',
            },
        }).then(response =>{
            alert(response.data.message)
            saveUserInfoLocalStorage(response.data.token)
            navigate('/home')
        }).catch(error => console.log(error))
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Entrar</button>
        </form>
        </>
    )
}
export default Login