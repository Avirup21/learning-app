import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetAccount} from '../actions/userAction'
import {startGetFacultyCourse} from '../actions/facultyAction'

class Faculty extends React.Component{
    constructor(){
        super()
        this.state={
            courseId:'',
            courseName:'',
            courseDept:'',
            description:'',
            waitlist:''  ,
            courseRoom:'',
            flagS:false,
            flagE:false  ,
            courseTeam:''
        }
    }
    componentDidMount(){
        // alert('get user details')
            this.props.dispatch(startGetAccount())
        }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            courseId:this.state.courseId,
            courseName:this.state.courseName,
            courseDept:this.state.courseDept,
            description:this.state.description,
            waitlist:this.state.waitlist,
            courseRoom:this.state.courseRoom,
            courseTeam:this.state.courseTeam,
        }
        console.log(formData)
        if( this.state.courseId == "" || this.state.courseName == "" || this.state.courseDept == "" ||
        this.state.description == "" ||this.state.waitlist == ""||this.state.courseRoom == "" ||this.state.courseTeam == ""  ){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
        }
        this.props.dispatch(startGetFacultyCourse(formData))
        this.setState({
            courseId:'',
            courseName:'',
            courseDept:'',
            description:'',
            waitlist:''  ,
            courseRoom:'',
            courseTeam:''
        })
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    render(){
        // console.log('Customer Component',this.props.userAccnt)
        // console.log('Cust Ls',localStorage)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                  <div align='right'><h5>{this.props.userAccnt.username}</h5> </div>
                 <form align='right'>
                    <Link to={`/coursedetails`}>Course Details</Link>
                </form>
                <Card variant='outlined'>
                <CardContent>
                <form align='center'>
                    <h2>Course Register</h2><br/>
                    <TextField
                    id="standard-username-input"
                    label="CourseId"
                    type="text"
                    name='courseId'
                    value={this.state.courseId}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="CourseName"
                    type="text"
                    name='courseName'
                    value={this.state.courseName}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="CourseDept"
                    type="text"
                    name='courseDept'
                    value={this.state.courseDept}
                    onChange={this.handleChange}
                    /><br/><br/>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        name='description'
                        value={this.state.description}
                        variant="outlined"
                        onChange={this.handleChange}
                        /><br/>
                     <TextField
                    id="standard-username-input"
                    label="CourseRoom"
                    type="text"
                    name='courseRoom'
                    value={this.state.courseRoom}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Waitlist Capacity"
                    type="text"
                    name='waitlist'
                    value={this.state.waitlist}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="CourseTeam"
                    type="text"
                    name='courseTeam'
                    value={this.state.courseTeam}
                    onChange={this.handleChange}
                    /><br/>
                    <br/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                              Create
                       </Button>
                       <SweetAlert 
                    success
                    title="Success Data!"
                    show={this.state.flagS}
                    onConfirm={(response) => this.onRecieveInput(response)}>
                        Created!!!!!!!
                    
                    </SweetAlert>

                    <SweetAlert
                        error
                        title="Error Data!"
                        show={this.state.flagE}
                        onConfirm={(response) => this.onRecieveInput(response)}>
                    Please Enter all the required fields !!! 
                    </SweetAlert>
                    </form>
                </CardContent>
                </Card>
               

                    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        userAccnt:state.userAccnt
    }
}
export default connect(mstp)(Faculty)