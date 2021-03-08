
const Form = ({ type, title, score, director, description, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const { title, score, description, director } = e.target
        const data = {
            title: title.value,
            score: score.value,
            description: description.value,
            director: director.value
        }
        onSubmit(data, e.target)
    }
    const typeCustom = (type === "CREATE") ? "Crear" : "Actualizar"
    return (
        <div>
            <fieldset>
                <h4>{typeCustom} Pelicula</h4>
                <form onSubmit={handleSubmit}>
                    <input required name="title" value={title} placeholder="Titulo" />
                    <input required type="number" name="score" value={score} placeholder="Puntaje" />
                    <input required name="director" value={director} placeholder="Director" />
                    <textarea required name="description" placeholder="Descripcion o sinopsis">{description}</textarea>
                    <button type="submit">{typeCustom} Pelicula</button>
                </form>
            </fieldset>
        </div>
    )
};

export default Form