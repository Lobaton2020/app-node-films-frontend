import { Redirect } from "react-router-dom";
import { NAME_KEYS } from "../../config";

const Logout = () => {
    localStorage.removeItem(NAME_KEYS.token)
    return (<Redirect to="login" />)
};

export default Logout