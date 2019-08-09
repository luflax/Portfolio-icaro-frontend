import React from 'react'

import './jobs.css'
import Logo from '../images/logo.png'

export default props => (
    <>
        <a href='#' className='jobsItem'>
            <img src={Logo} alt="Logo"/>
            <div className='jobMask'>
                <p>Canal do youtube vinhetas muito locas</p>
            </div>
        </a>
    </>
)