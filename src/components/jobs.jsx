import React, {useEffect, useState} from 'react'

import './jobs.css'
import JobItem from './jobItem'
import api from '../main/api'

export default props => {

    const [jobList, setJobList] = useState([])

    async function getJobs(){
        const response = await api.get(`/${props.jobtype}`)
        setJobList(response.data)
    }
    
    useEffect(() => {
        getJobs()
    }, [])

    return (
        <>
            <div className='flexContainer'>
                {
                    jobList.length > 0 ?
                    jobList.map((job, index) => <JobItem key={index}
                        thumbnail={api.defaults.baseURL + job.thumbnail} 
                        project={job.project} 
                        link={`/${props.jobtype}/${job._id}`}
                        />)
                    :
                    ( <h1>Nenhum job inserido</h1> )
                }
            </div>
        </>
    )
}
