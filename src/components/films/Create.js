import axios from "axios";
import { useState } from "react";
import { API } from "../../config";
import Loader from "../../util/Loader";
import makeHeaderAuth from "../../util/makeHeaderAuth";
import Form from "./Form"

const Create = ({ token, reloadFilms }) => {
    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("")
    const handleSubmit = (props, form) => {
        setLoader(true)
        setMessage("")
        axios.post(API.films, props, makeHeaderAuth(token))
            .then(({ data: { message } }) => {
                form.reset()
                reloadFilms()
                setLoader(false)
                setMessage("Bravo!! Has almacenado una pelucula")
            })
            .catch(({ response }) => {
                setLoader(false)
                setMessage("Error al agregar la pelicula")
            })
    };
    return (
        <div>
            <Loader status={loader} />
            <p>{message}</p>
            <Form type="CREATE" onSubmit={handleSubmit} />
        </div>
    )
}

export default Create