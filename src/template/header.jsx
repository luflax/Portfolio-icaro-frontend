import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './header.css'

import HeaderButton from './headerButton'
import Logo from '../images/logo.png'


const Header = props => {
    const [verticalPosition, setVerticalPosition] = useState(0)
    const [actualPage, setActualPage] = useState('')
    const [isMenuCompacted, setIsMenuCompacted] = useState(true)

    function handleScroll() {
        setVerticalPosition(window.pageYOffset)
    }

    function handleButtonClick(event, path){
        event.preventDefault()
        props.history.push(path)
    }

    function handleCompactButton(event) {
        if(isMenuCompacted) {
            setVerticalPosition(1)
            setIsMenuCompacted(false)
        } else{
            setVerticalPosition(0)
            setIsMenuCompacted(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        setActualPage(props.location.pathname)
        //console.log(props)
    })
    
    let headerClasses = `header ${verticalPosition === 0 ? 'affix' : ''}`
    return (
        actualPage != '/admin' ?
        <nav className={headerClasses}>
            <div className="logo-with-menu">
                <a href="#">
                    <img src={Logo} alt="Logo" width='80px' height='60px'/>
                </a>
                <ul className={isMenuCompacted ? 'compacted' : ''}>
                    <HeaderButton label='REEL' path='/' active={actualPage} 
                        onClick={e => handleButtonClick(e, '')}/>
                    <HeaderButton label='MOTIONS' path='/motions' active={actualPage} 
                        onClick={e => handleButtonClick(e, '/motions')}/>
                    <HeaderButton label='ILUSTRATIONS' path='/ilustrations' active={actualPage} 
                        onClick={e => handleButtonClick(e, '/ilustrations')}/>
                    <HeaderButton label='DESIGNS' path='/designs' active={actualPage} 
                        onClick={e => handleButtonClick(e, '/designs')}/>
                    <HeaderButton label='CONTACT' path='/contact' active={actualPage} 
                        onClick={e => handleButtonClick(e, '/contact')}/>
                    <HeaderButton label='ADMIN' path='/admin' active={actualPage} 
                        onClick={e => handleButtonClick(e, '/admin')}/>
                </ul>
            </div>
            <button className='compactBtn' onClick={handleCompactButton}>
                <FontAwesomeIcon icon={faBars} size='lg'/>
            </button>
        </nav>
        : 
        <></>
)}

export default withRouter(Header)