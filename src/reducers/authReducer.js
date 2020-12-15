const authReducer = (state=null, action) => {
    switch(action.type){

        case 'LOGIN_SUCCESS':
            return action.user

        case 'LOGOUT_USER':
            return null

        default: return state
    }
}

export default authReducer