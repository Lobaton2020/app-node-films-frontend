import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import Films from './components/films/List'
import PrivateRoute from './util/PrivateRoute'
import NotFound from './components/NotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={something => (<Redirect to="/login" />)} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/films" component={Films} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
