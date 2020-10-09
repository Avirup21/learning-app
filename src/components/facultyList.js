import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Col from 'react-bootstrap/Col'
import MdCourseTable from './MdCourseTable'
import {startGetCourses} from '../actions/facultyAction'
import {startGetDeleteCourse} from '../actions/facultyAction'
// import {startGetUpdateCustomer} from '../actions/customerAction'
import Form from 'react-bootstrap/Form'

class CourseList extends React.Component{
    constructor(){
        super()
        this.state={
              courseId:'',
              courseName:'',
              courseDept:'',
              editMode:false,
              search:'',
              description:'',
              id:'',
              newsearch:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetCourses())
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/course')
        }
        redirect()
    }
    handleDelete=(id)=>{
        // this.setState({id})
        // console.log(id)
        this.props.dispatch(startGetDeleteCourse(id))
    }
    // handleProperty=(id)=>{
    //     console.log('id1',this.props.id)
    //     this.props.dispatch(startGetTenantProp(id))
    //     const redirect=()=>{
    //         this.props.history.push('/property')
    //     }
    //     redirect()
    // }
    handleApplyNow=(id)=>{
        console.log('id',id)
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/studentcourse/${id}`)
        }
        redirect()
       
       
    }
    // handleViewdetails=(id)=>{
    //     // console.log(id)
    //     this.props.dispatch(startGetCustomer(id))
       
    //     const redirect=()=>{
    //         this.props.history.push(`/ViewCustomer/${id}`)
    //     }
    //     redirect()
    // }
    render(){     
        // console.log('this.props.faculty',this.props.faculty)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                <div align='center'>
                <h2>List of Courses</h2><br/>
                </div>
                    <MdCourseTable data={this.props.faculty} handleApplyNow={this.handleApplyNow} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        faculty:state.faculties,
        // viewCust : state.viewCust
        // id:state.id,

    }
}
export default connect(mstp)(CourseList)
