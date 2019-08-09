import React from 'react'

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
                <img src={Logo} alt="Facebook" width='40px' height='40px'/>
                <img src={Logo} alt="E-mail" width='40px' height='40px'/>
                <img src={Logo} alt="ZAP" width='40px' height='40px'/>
            </div>
        </div>
    )
}
export default Footer