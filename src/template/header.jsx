import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import './header.css'

import HeaderButton from './headerButton'
import Logo from '../images/logo.png'


const Header = props => {
    const [verticalPosition, setVerticalPosition] = useState(0)
    const [actualPage, setActualPage] = useState('')

    function handleScroll() {
        setVerticalPosition(window.pageYOffset)
    }

    function handleButtonClick(event, path){
        event.preventDefault()
        props.history.push(path)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setActualPage(props.location.pathname)
        //console.log(props)
    })

    let headerClasses = `header ${verticalPosition === 0 ? 'affix' : ''}`
    return (
    <nav className={headerClasses}>
        <a href="#">
            <img src={Logo} alt="Logo" width='80px' height='60px'/>
        </a>
        <ul>
            <HeaderButton label='REEL' path='/' active={actualPage} 
                onClick={e => handleButtonClick(e, '')}/>
            <HeaderButton label='MOTIONS' path='/motions' active={actualPage} 
                onClick={e => handleButtonClick(e, 'motions')}/>
            <HeaderButton label='ILUSTRATIONS' path='/ilustrations' active={actualPage} 
                onClick={e => handleButtonClick(e, 'ilustrations')}/>
            <HeaderButton label='DESIGNS' path='/designs' active={actualPage} 
                onClick={e => handleButtonClick(e, 'designs')}/>
            <HeaderButton label='CONTACT' path='/contact' active={actualPage} 
                onClick={e => handleButtonClick(e, 'contact')}/>
        </ul>
    </nav>
)}

export default withRouter(Header)