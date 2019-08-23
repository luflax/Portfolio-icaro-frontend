import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './buttonIcon.css'

export default props => {
    
    return(
        <button className={props.btnClass} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon} className='margin5'/>
            <span className='margin5'>{props.label}</span>
        </button>
    )
}