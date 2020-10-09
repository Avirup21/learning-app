import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Button from '@material-ui/core/Button'
import {startApplyCourse} from '../actions/studentAction'
// import {startGetProperty} from '../actions/propertyAction'
// import {startGetTenants} from '../actions/tenantAction'

const divStyle = {
   
      marginRight: '-696px',
       
    };


class ApplyCourse extends React.Component{
    constructor(){
        super()
        this.state={
            userId:'',
            facultyId:'',
            courseName:'',
            username:'',
            mobile:''  
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
     }
     
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            facultyId:this.state.facultyId,
            username:this.state.username,
            courseName:this.state.courseName,
            mobile:this.state.mobile
        }
        console.log(formData)
        this.props.dispatch(startApplyCourse(formData))
        this.setState({
            facultyId:'',
            username:'',
            courseName:'',
            mobile:''
        })
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/')
        }
        redirect()
    }
    render(){
        const faculties= Object.keys(this.props.faculty).length!=0 &&
            this.props.faculty.map((ele)=>{
                return( 
                    <option value={ele._id} >{ele.courseName}</option>
                )
            })  
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div>
                  <div align='right'><h5>{this.props.userAccnt.username}</h5> </div>
                
                <Card variant='outlined'>
                <CardContent>
                <form align='center'>
                    <h2>Register Your Course</h2><br/>
                    <div className="row" style={{ marginTop: 20,marginRight:-90 }}>
                    <div className="col-sm-4"  >
                             <div className="form-group " align='center'>
                    <label className="required" style={divStyle}>Course Name</label>
                         <select name="facultyId" style={divStyle} onChange={this.handleChange}  className="form-control" >
                            <option value=''>Select</option>
                            {faculties}
                         </select>
                         </div>
                         </div>
                        </div>
                      <TextField
                    id="standard-username-input"
                    label="Username"
                    type="text"
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Course Name"
                    type="text"
                    name='courseName'
                    value={this.state.courseName}
                    onChange={this.handleChange}
                    /><br/>
                    <TextField
                    id="standard-mobile-input"
                    label="Mobile"
                    type="number"
                    name='mobile'
                    value={this.state.mobile}
                    onChange={this.handleChange}
                    /><br/><br/>
                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                              Create
                       </Button>
                    </form>
                </CardContent>
                </Card>
               

                    
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        faculty:state.faculties,
        userAccnt:state.userAccnt
        // propertiesAccnt:state.properties
    }
}
export default connect(mstp)(ApplyCourse)