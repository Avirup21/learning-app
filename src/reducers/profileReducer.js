const profileReducer = (state = [], action) => {
    switch(action.type) {
        case 'PROFILE_LIST' : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default profileReducer