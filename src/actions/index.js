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

export const createTodo = (todo) => {
    return {
        type: 'CREATE_TODO',
        todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
