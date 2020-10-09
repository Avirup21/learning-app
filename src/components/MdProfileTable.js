import React from 'react'
import {MDBDataTableV5} from 'mdbreact'
import moment from 'moment'
import Button from '@material-ui/core/Button'

const MdProfileTable=(props)=>{
    const data={
        columns:[
            {
                label:'Sl No',
                field:'slno',
                // sort:'asc'
            },
            {
                label:'Name',
                field:'name'
            },
            {
                label:'Email',
                field:'email'
            },
            {
                label:'Mobile',
                field:'mobile'
            },
            {
                label:'About Me',
                field:'about_me'
            },
            {
                label:'Country',
                field:'country'
            },
            {
                label:'Company',
                field:'company'
            },
            {
                label:'School',
                field:'school'
            },
            {
                label:'Hometown',
                field:'hometown'
            },
            {
                label:'Languages',
                field:'languages'
            },
            {
                label:'Gender',
                field:'gender'
            },
            {
                label:'Update',
                field:'update'
            }
        ],
        rows:props.data.map((ele,i)=>{
            return{
                slno:i+1,
                name:ele.name,
                email:ele.email,
                mobile:ele.mobile,
                about_me:ele.about_me,
                country:ele.country,
                company:ele.company,
                country:ele.country,
                school:ele.school,
                languages:ele.languages,
                hometown:ele.hometown,
                gender:ele.gender,
                created_at:moment(ele.created_at).fromNow(),
                update:<Button  variant="contained" color="primary" onClick={function(){
                    props.handleUpdate(ele._id)
                }}>Update</Button>
                
            }
        })
    }
    return <MDBDataTableV5  searchTop searchBottom={false} data={data}/>
}
export default MdProfileTable