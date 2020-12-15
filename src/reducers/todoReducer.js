const todoReducer = (state=[], action) => {
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return [...action.todos]

        case 'CREATE_TODO':
            return [...state, action.todo]

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)

        default: return state
    }
}

export default todoReducer