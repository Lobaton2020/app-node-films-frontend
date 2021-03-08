import { useState } from "react";
import axios from 'axios'
import { API, NAME_KEYS } from './../../config/index'
import { Link, useHistory } from 'react-router-dom'
import Loader from "../../util/Loader";

const setTokenLocal = (token) => {
    localStorage.setItem(NAME_KEYS.token, token)
};
const Login = () => {
    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("")
    const history = useHistory()
    const validateData = (data) => {
        axios.post(API.login, data)
            .then(({ data: { token } }) => {
                setTokenLocal(token)
                history.push("/films")
                setLoader(false)
            })
            .catch(err => {
                setMessage("Usuario o constraseña incorrectos")
                setLoader(false)
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        setMessage('')
        const { email, password } = e.target
        const data = {
            email: email.value,
            password: password.value
        }
        validateData(data)
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Iniciar Sesion </h1>
            <p>{message}</p>
            <Loader status={loader} />
            <input type="email" name="email" placeholder="Ingresa tu email" />
            <input type="password" name="password" placeholder="Ingresa tu contraseña" />
            <button type="primary" >Iniciar Sesion</button>
            <Link to="register" >Registrarme</Link>
        </form>
    )
}




export default Login