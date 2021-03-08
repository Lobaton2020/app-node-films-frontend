import { Redirect, Route } from "react-router-dom"
import { NAME_KEYS } from './../config/index'
import decode from 'jwt-decode'
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    const checkAuth = () => {
        const token = localStorage.getItem(NAME_KEYS.token)
        // const refreshToken = localStorage.getItem(NAME_KEYS.refreshToken)

        // if (!token || !refreshToken) {
        if (!token) {
            return false
        }
        try {
            const { expireAt } = decode(token)
            if (expireAt < new Date().getTime()) {
                return token
            }
        } catch (err) {
            return false
        }
        return false
    };
    const existToken = checkAuth()
    return (
        <Route
            {...rest}
            render={(props) =>
                existToken ?
                    (<Component {...props} token={existToken} />) :
                    (<Redirect to="/login" />)
            }
        />
    );
};

export default PrivateRoute