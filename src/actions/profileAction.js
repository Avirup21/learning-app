
import axios from 'axios'

export const setProfileList = (profile) => {
    return { type: 'PROFILE_LIST', payload: profile }
}

export const startGetProfile= (formData) => {
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.post(`http://localhost:3065/api/profile`,formData,{
            headers: {
                'Authorization': ` ${token}`
              }
        })
            .then((response) => {
                const profile = response.data
                console.log('Profile Create',profile) 
                // dispatch(setCustomers(customers))
            })
    }
}
export const startGetProfileList = () => {
    
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.get('http://localhost:3065/api/myprofile',{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const profilelist = response.data
                console.log('response of profile list',profilelist) 
                dispatch(setProfileList(profilelist))
            })
    }
}

export const startGetUpdateProfile = (id,formData) => {
    console.log('id',id)
    const token = localStorage.getItem("token")
    console.log(token)
    return (dispatch) => {
        axios.put(`http://localhost:3065/api/profile/${id}`,formData,{
            headers: {
                'Authorization': `${token}`
              }
        })
            .then((response) => {
                const profileupdate = response.data
                console.log('update profile',profileupdate) 
            })
    }
}