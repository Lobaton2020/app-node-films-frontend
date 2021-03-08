const Empty = ({ name }) => {
    let name_custom = name ? name : "datos"
    return (<p>No hay {name_custom} por mostrar</p>)
}

export default Empty