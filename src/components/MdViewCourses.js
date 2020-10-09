import React from 'react'
import {MDBDataTableV5} from 'mdbreact'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const MdViewCourseTable=(props)=>{
    const data={
        columns:[
            {
                label:'Sl No',
                field:'slno',
                // sort:'asc'
            },
            {
                label:'Course Name',
                field:'courseName'
            },
            {
                label:'Student Name',
                field:'username'
            },
            {
                label:'Phone No',
                field:'mobile'
            },
            {
                label:'Created At',
                field:'created_at'
            }
        ],
        rows:props.data.map((ele,i)=>{
            return{
                slno:i+1,
                courseName:ele.courseName,
                username:ele.username,
                mobile:ele.mobile,
                created_at:moment(ele.created_at).fromNow()
                // applynow:<Button  variant="contained" color="primary" onClick={function(){
                //     props.handleApplyNow(ele._id)
                // }}>Apply Now</Button>,
                // delete:<Button startIcon={<DeleteIcon />} variant="contained" color="secondary" onClick={function(){
                //     props.handleDelete(ele._id)
                // }}>Delete</Button>,
                
            }
        })
    }
    return <MDBDataTableV5  searchTop searchBottom={false} data={data}/>
}
export default MdViewCourseTable