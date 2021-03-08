import { useState } from "react";
import Loader from "../../util/Loader";
import Form from "./Form"

const Edit = ({ token, data }) => {
    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState("")
    const handleSubmit = (props, form) => {
        setLoader(true)
        setMessage("")

    };
    const { title, score, description, director } = data
    return (
        <div>
            <Loader status={loader} />
            <p>{message}</p>
            <Form
                type="UPDATE"
                title={title}
                score={score}
                description={description}
                director={director}
                onSubmit={handleSubmit} />
        </div>
    )
}

export default Edit