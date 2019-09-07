import React from 'react'
import {faPlus, faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons'

import ButtonIcon from '../../components/buttonIcon'

import './jobsList.css'


export default props => {
    return(
        !props.loading ?
            props.jobsList.length > 0 ?
            props.jobsList.map(job =>{
                return (
                    <li key={job._id}>
                        <span>{job.project}</span> 
                        <span>
                            <ButtonIcon btnClass='btnSuccess' 
                                label='New' 
                                icon={faPlus}
                                onClick={e => props.createJob()}
                            />
                            <ButtonIcon btnClass='btnPrimary' 
                                label='Edit' 
                                icon={faPen}
                                onClick={e => props.getSelectedJob(job._id)}
                            />
                            <ButtonIcon btnClass='btnDanger' 
                                label='Delete' 
                                icon={faTrashAlt}
                                onClick={e => props.deleteJob(job._id)}
                            />
                        </span>
                    </li>
                )
            })
            :
            (<li>
                <span className='emptyJob'>Empty</span> 
                <span>
                    <ButtonIcon btnClass='btnSuccess' 
                        label='New' 
                        icon={faPlus}
                        onClick={e => props.createJob()}
                    />
                </span>
            </li> )
        : ''
    )
}