const makeHeaderAuth = (token) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

export default makeHeaderAuth