const todoReducer = (state=[], action) => {
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return [...action.todos]

        case 'CREATE_TODO':
            return [...state, action.todo]

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)

        case 'EDIT_TODO':
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo)

        default: return state
    }
}

export default todoReducer