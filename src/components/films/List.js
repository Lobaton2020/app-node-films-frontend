import { useEffect, useState } from 'react'
import Item from './Item'
import { API } from './../../config/index'
import axios from 'axios'
import makeHeaderAuth from '../../util/makeHeaderAuth'
import Loader from '../../util/Loader'
import Empty from '../../util/Empty'
import Create from './Create'
import { Link } from 'react-router-dom'
import Edit from './Edit'
const List = ({ token }) => {
    const [films, setFilms] = useState([])
    const [loader, setLoader] = useState(false)
    const [edit, setEdit] = useState({})
    const [message, setMessage] = useState("")
    const loadFilms = () => {
        setLoader(true)
        axios.get(API.films, makeHeaderAuth(token))
            .then(({ data: { data } }) => {
                setFilms(data)
                setLoader(false)
            })
            .catch(({ response }) => {
                setLoader(false)
            })
    };

    useEffect(() => {
        loadFilms()
    }, [])
    const handleEdit = (id) => {
        setLoader(true)
        axios.get(`${API.films}/${id}`, makeHeaderAuth(token))
            .then(({ data: { data } }) => {
                setEdit(data)
                setLoader(false)
            })
            .catch(({ response }) => {
                setLoader(false)
            })
    }
    const handleDelete = (id) => {
        setLoader(true)
        setMessage("")
        if (!window.confirm("Estas seguro?")) return
        axios.delete(`${API.films}/${id}`, makeHeaderAuth(token))
            .then(({ data: { data } }) => {
                loadFilms()
                setMessage("Has eliminado una Pelicula!!")
                setLoader(false)
            })
            .catch(({ response }) => {
                setMessage("Oops se ha presentado un error!!")
                setLoader(false)
            })
    }
    return (
        <div>
            {Object.keys(edit).length ?
                (<Edit
                    token={token} data={edit} />) :
                (<Create token={token} reloadFilms={loadFilms} />)}

            <Loader status={loader} />
            <p>{message}</p>
            {films.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Puntaje</th>
                            <th>Director</th>
                        </tr>
                    </thead>
                    <tbody>
                        {films.map(({ id, title, desciption, score, director }) => (
                            <Item
                                key={id}
                                id={id}
                                title={title}
                                desciption={desciption}
                                score={score}
                                director={director}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <Empty />
            )}
            <Link to="/logout">Cerrar Sesion</Link>
        </div>
    )
}

export default List