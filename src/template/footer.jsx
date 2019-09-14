import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import Logo from '../images/logo.png'
import './footer.css'

const Footer = props => {
    return(
        <div className='footer'>
            <div className='divLogo'>
                <img src={Logo} alt="Pico"/>
            </div>
            <div className='divCenter'>
                <p>Icaro Silva Gabriel</p>
                <p>2019 - Todos os direitos reservados</p>
            </div>
            <div className='divIcons'>
                <FontAwesomeIcon icon={faFacebookSquare} size='2x'/>
                <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
                <FontAwesomeIcon icon={faEnvelope} size='2x'/>
            </div>
        </div>
    )
}
export default Footer