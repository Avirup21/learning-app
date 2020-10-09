import axios from 'axios'

export const setCourseList = (id) => {
    return {type:'VIEW_TENANTS',payload:id}
}

export const startGetCourseList = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://localhost:3065/api/view',{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const CourseList = response.data
                console.log('response of courselist',CourseList) 
                dispatch(setCourseList(CourseList))
            })
    }
}

export const startApplyCourse= (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://localhost:3065/api/student`,formData,{
            headers: {
                'Authorization': ` ${token}`
              }
        })
            .then((response) => {
                const student_course = response.data
                console.log('Student Course',student_course) 
                // dispatch(setCustomers(customers))
            })
    }
}
