const Item = ({ id, title, desciption, score, director, onEdit, onDelete }) => {
    const handleDelete = () => {
        onDelete(id)
    }
    const handleEdit = () => {
        onEdit(id)
    }
    return (
        <tr>
            <td>{title}</td>
            <td>{desciption}</td>
            <td>{score}</td>
            <td>{score}</td>
            <td>{director}</td>
            <td><button onClick={handleEdit}>Editar</button></td>
            <td><button onClick={handleDelete}>Eliminar</button></td>
        </tr>
    )
}

export default Item