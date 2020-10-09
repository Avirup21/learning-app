const facultyReducer = (state = [], action) => {
    switch(action.type) {
        case 'COURSE_LIST' : {
            return [...action.payload]
        }
        case 'DELETE_COURSES':{
            return state.filter(ele=>ele._id!=action.payload._id)
        }
        default: {
            return [...state]
        }
    }
}
export default facultyReducer