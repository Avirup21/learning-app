import axios from 'axios'

//Set courses
export const setCourseList = (faculty) => {
    return { type: 'COURSE_LIST', payload: faculty }
}
// export const setCourseList = (id) => {
//     return {type:'COURSE_LIST',payload:id}
// }

export const setDeleteCourses = (id) => {
    return {type:'DELETE_COURSES',payload:id}
}

// Get particular details of course
export const startGetCourses = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://localhost:3065/api/list',{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const courselist = response.data
                console.log('response of course list',courselist) 
                dispatch(setCourseList(courselist))
            })
    }
}

export const startGetFacultyCourse= (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://localhost:3065/api/faculty`,formData,{
            headers: {
                'Authorization': ` ${token}`
              }
        })
            .then((response) => {
                const faculty_course = response.data
                console.log('Faculty Course',faculty_course) 
                // dispatch(setCustomers(customers))
            })
    }
}

//Get courses
// export const startGetTenants = () => {
    
//     const token = localStorage.getItem("token")
//     console.log(token)
//     return (dispatch) => {
//         axios.get('http://localhost:3055/api/mytenant',{
//             headers: {
//                 'Authorization': `${token}`
//               }
//         })
//             .then((response) => {
//                 const TenantList = response.data
//                 console.log('response of tenants',TenantList) 
//                 dispatch(setTenants(TenantList))
//             })
//     }
// }
//Delete a course
export const startGetDeleteCourse = (id) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.delete(`http://localhost:3065/api/faculty/${id}`,{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const CourseD = response.data
                console.log('delete a course',CourseD) 
                dispatch(setDeleteCourses(CourseD))
            })
    }
}