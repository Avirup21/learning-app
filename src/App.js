import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Container from 'react-bootstrap/Container'
import UserReg from './components/userReg'
import UserLogin from './components/userLogin'
import Profile from './components/profileCreate'
import ProfileList from './components/profileList'
import UpdateProfile from './components/updateProfile'
import CourseList from './components/facultyList'
import Faculty from './components/facultyCreate'
import ApplyNow from './components/studentCourse'
import CourseListing from './components/courseList'
import 'bootstrap/dist/css/bootstrap.min.css'


function App(props){
  return(
    <Router>
    <Container className='p-3'>
    <div >
       <Route path='/' component={Home} exact={true}/>
       <Route path='/register' component={UserReg}/>
       <Route path='/login' component={UserLogin} />
       <Route path='/profile' component={Profile}/>
       <Route path='/profilelist' component={ProfileList}/>
       <Route path='/updateprofile/:id' component={UpdateProfile} />
       <Route path='/course' component={Faculty}/>
       <Route path='/coursedetails' component={CourseList}/>
       <Route path='/studentcourse' component={ApplyNow}/>
       <Route path='/viewcourses' component={CourseListing} />
       
    </div>

    </Container>
</Router>
)
}
// const mstp=(state)=>{
//   return {
//     user:state.userAccnt
//   }
// }
// export default connect(mstp)(App)
export default App