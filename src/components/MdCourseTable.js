import React from 'react'
import {MDBDataTableV5} from 'mdbreact'
import moment from 'moment'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button'

const MdCourseTable=(props)=>{
    const data={
        columns:[
            {
                label:'Sl No',
                field:'slno',
                // sort:'asc'
            },
            {
                label:'Course Id',
                field:'courseId'
            },
            {
                label:'Course Name',
                field:'courseName'
            },
            {
                label:'Course Dept',
                field:'courseDept'
            },
            {
                label:'Description',
                field:'description'
            },
            {
                label:'Created At',
                field:'created_at'
            },
            // {
            //     label:'View Details',
            //     field:'view_details'
            // },
            {
                label:'Apply Now',
                field:'applynow'
            },
            {
                label:'Delete',
                field:'delete'
            }
        ],
        rows:props.data.map((ele,i)=>{
            return{
                slno:i+1,
                courseId:ele.courseId,
                courseName:ele.courseName,
                courseDept:ele.courseDept,
                description:ele.description,
                created_at:moment(ele.created_at).fromNow(),
                applynow:<Button  variant="contained" color="primary" onClick={function(){
                    props.handleApplyNow(ele._id)
                }}>Apply Now</Button>,
                delete:<Button startIcon={<DeleteIcon />} variant="contained" color="secondary" onClick={function(){
                    props.handleDelete(ele._id)
                }}>Delete</Button>,
                
            }
        })
    }
    return <MDBDataTableV5  searchTop searchBottom={false} data={data}/>
}
export default MdCourseTable