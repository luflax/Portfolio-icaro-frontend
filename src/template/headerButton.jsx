import React from 'react'
import './header.css'

export default props => {
    let buttonClasses = 'headerButton' 
    buttonClasses += props.active == props.path ? ' active' : ''
    return (
        <li>
            <a href={props.path} className={buttonClasses} onClick={props.onClick}>
            {props.label}</a>
        </li>
    )
}