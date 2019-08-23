import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './maskIcon.css'

export default props => (
    <div className='adminFileContainer'>
        {props.children}
        <div className={`adminFileMask ${'mask-' + props.color}`}>  
                <FontAwesomeIcon icon={props.icon} size='3x'/>
        </div>
    </div>
)