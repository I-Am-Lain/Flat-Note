const todoReducer = (state=[], action) => {
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return [...action.todos]

        default: return state
    }
}

export default todoReducer