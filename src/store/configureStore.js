import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/usersReducer'
import facultyReducer from '../reducers/facultyReducer'
import profileReducer from '../reducers/profileReducer'
import studentReducer from '../reducers/studentReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        userAccnt:usersReducers,
        faculties:facultyReducer,
        profiles:profileReducer,
        students:studentReducer,
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
