import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'
import Col from 'react-bootstrap/Col'
import MdProfileTable from './MdProfileTable'
import {startGetProfileList} from '../actions/profileAction'
// import {startGetDeleteCourse} from '../actions/facultyAction'
// import {startGetUpdateCustomer} from '../actions/customerAction'
import Form from 'react-bootstrap/Form'

class ProfileList extends React.Component{
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
            id:''
        }
    }
    componentDidMount(){
        this.props.dispatch(startGetProfileList())
    }
    handleBack=()=>{
        const redirect=()=>{
            this.props.history.push('/profile')
        }
        redirect()
    }
    handleDelete=(id)=>{
        // this.setState({id})
        // console.log(id)
        // this.props.dispatch(startGetDeleteCourse(id))
    }
    // handleProperty=(id)=>{
    //     console.log('id1',this.props.id)
    //     this.props.dispatch(startGetTenantProp(id))
    //     const redirect=()=>{
    //         this.props.history.push('/property')
    //     }
    //     redirect()
    // }
    handleUpdate=(id)=>{
        console.log('id',id)
        this.setState({id})
       
        const redirect=()=>{
            this.props.history.push(`/updateprofile/${id}`)
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
                <h2>Profile List</h2><br/>
                </div>
                    <MdProfileTable data={this.props.profile} handleUpdate={this.handleUpdate} />
            </div>
        )
    }
}
const mstp=(state)=>{
    return{
        profile:state.profiles

    }
}
export default connect(mstp)(ProfileList)
