import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import SweetAlert from 'react-bootstrap-sweetalert'
import {startGetUpdateProfile} from '../actions/profileAction'

class UpdateProfile extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            mobile:'',
            about_me:'',
            country:''  ,
            company:'',
            hometown:'',
            school:'',
            languages:'',
            gender:'',
            flagS:false,
            flagE:false  ,
        }
    }

    onRecieveInput=()=>{
        this.setState({ flagE : false , flagS : false })
        const redirect=()=>{
            this.props.history.push('/profilelist')
        }
        redirect()

    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/profilelist')
        }
        redirect()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('this.props',this.props)
        const id=this.props.match.params.id
        // alert(id)
        console.log('id of submit',id)
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            about_me:this.state.about_me,
            country:this.state.country,
            company:this.state.company,
            hometown:this.state.hometown,
            school:this.state.school,
            languages:this.state.languages,
            gender:this.state.gender,
        }
        console.log(formData)
        if( this.state.name == "" || this.state.email == "" || this.state.mobile == "" ||
        this.state.about_me == "" ||this.state.country == ""||this.state.company == "" ||this.state.hometown == "" ||
        this.state.school == ""||this.state.languages == "" || this.state.gender == ""){

            this.setState({ flagE : true })
        }
        else{

            this.setState({ flagS : true })
            
        }
        this.props.dispatch(startGetUpdateProfile(id,formData))
        this.setState({
            name:'',
            email:'',
            mobile:'',
            about_me:'',
            country:''  ,
            company:'',
            hometown:'',
            school:'',
            languages:'',
            gender:'',
        })
       
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){     
        // console.log('this.props.customers',this.props.customer)
        // console.log('upd customer',this.props)
        return(
            <div>
                <div align='left'>
                 <Button variant='contained' color='primary' onClick={this.handleBack}>Back</Button>
                </div><br/>
                <Card variant='outlined'>
                <CardContent>
                <form align='center'>
                    <h2>Update Your Profile</h2><br/>
                    <TextField
                    id="standard-username-input"
                    label="Name"
                    type="text"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-email-input"
                    label="Email"
                    type="email"
                    name='email'
                    value={this.state.email}
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
                     <TextField
                        id="outlined-multiline-static"
                        label="About Me"
                        multiline
                        rows={4}
                        name='about_me'
                        value={this.state.about_me}
                        variant="outlined"
                        onChange={this.handleChange}
                        /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Country"
                    type="text"
                    name='country'
                    value={this.state.country}
                    onChange={this.handleChange}
                    /><br/>
                   
                     <TextField
                    id="standard-username-input"
                    label="Company"
                    type="text"
                    name='company'
                    value={this.state.company}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Hometown"
                    type="text"
                    name='hometown'
                    value={this.state.hometown}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="School"
                    type="text"
                    name='school'
                    value={this.state.school}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Languages"
                    type="text"
                    name='languages'
                    value={this.state.languages}
                    onChange={this.handleChange}
                    /><br/>
                     <TextField
                    id="standard-username-input"
                    label="Gender"
                    type="text"
                    name='gender'
                    value={this.state.gender}
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
        profile:state.profiles
       
    }
}
export default connect(mstp)(UpdateProfile)