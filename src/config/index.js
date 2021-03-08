const HOST_API = "https://node-films-api.herokuapp.com/api/";

const API = {
    login: `${HOST_API}users/login`,
    register: `${HOST_API}users/register`,
    films: `${HOST_API}films`
}
const NAME_KEYS = {
    token: "TOKEN_APP",
    refreshToken: "REFRESH_TOKEN_APP"
}

export { API, NAME_KEYS, HOST_API }