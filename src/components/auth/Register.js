import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { API } from '../../config'
import Loader from '../../util/Loader'
const Register = () => {

    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("")
    const [errors, setErrors] = useState([])

    const registerUser = (data) => {
        axios.post(API.register, data)
            .then(({ status, token, message }) => {
                setMessage("Perfecto ya estas registrado!!")
                setLoader(false)
            })
            .catch(({ response }) => {
                const { data } = response
                setErrors(data.errors)
                setMessage("Error al registrar tu usuario, Lo sentimos")
                setLoader(false)
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        setLoader(true)
        setMessage('')
        const { username, email, password } = e.target
        const data = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        registerUser(data)
    };
    return (
        <form onSubmit={handleSubmit}>
            <p>{message}</p>
            <Loader status={loader} />
            {errors.length > 0 ? (
                <ul>
                    {errors.map(({ msg }) => (
                        <li>{msg}</li>
                    ))}
                </ul>
            ) : (null)
            }
            <input type="text" name="username" placeholder="Ingrese su usuario" />
            <input type="text" name="email" placeholder="Ingrese su Correo" />
            <input type="password" name="password" placeholder="Ingrese su Contraseña" />
            <button type="submit"> Registrarme</button>
            <Link to="/login">Iniciar Sesion</Link>
        </form>
    )
}

export default Register