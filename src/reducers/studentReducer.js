const studentReducer = (state = [], action) => {
    switch(action.type) {
        case 'VIEW_TENANTS' : {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default studentReducer