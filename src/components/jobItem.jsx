import React from 'react'
import { withRouter } from 'react-router-dom'

import './jobs.css'

const JobItem = props => {

    function handleClick(e){
        e.preventDefault()
        props.history.push(props.link)
    }

    return (
        <>
            <a href='#' onClick={handleClick} className='jobsItem'>
                <img src={props.thumbnail} alt="Logo"/>
                <div className='jobMask'>
                    <p>{props.project}</p>
                </div>
            </a>
        </>
    )
}

export default withRouter(JobItem)