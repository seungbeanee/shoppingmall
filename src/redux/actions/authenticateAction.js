function login (id, password) {
    return (dispatch, getState) => {
        dispatch({type:"LOGIN_SUCCESS",payload: {id, password}})
    }
}

function logout (id) {
    return (dispatch, getState) => {
        dispatch({type:"LOGOUT_SUCCESS",payload: {id}})
    }
}

export const authenticateAction = { login, logout };