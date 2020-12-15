export const loginSuccess = ({ user, todos }) => {
    return {
        type: 'LOGIN_SUCCESS',
        user,
        todos
    }
}

export const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}
