import React from 'react'

import './contact.css'
import Banner from '../template/banner'
import Footer from '../template/footer'

export default props => (
    <>
        <Banner>
            <h1>Need a design mto loco?</h1>
            <h3>Fala cu pai using the form below</h3>
        </Banner>
        <div className="pageMargin">
            <div className="contactMain">
                <div>
                    <h1>Entre em Contato</h1>
                    <p>Entre em contato através do formulário ao lado ou diretamente no email: <strong>pico@pico.com</strong></p>
                </div>
                <form>
                    <label htmlFor="contactEmail">E-Mail:</label>
                    <input className='inputLg' id='contactEmail'
                        type="text" placeholder='example@example.com' />
                    <label htmlFor="contactName">Name:</label>
                    <input className='inputLg' id='contactName' 
                        type="text" placeholder='Johnny Bravo' />
                    <label htmlFor="contactMessage">Message:</label>
                    <textarea id="contactMessage" cols="20" rows="10"
                        placeholder='I need a desaine muito bão!' ></textarea>
                    <input type="submit" value='Send Message'/>
                </form>
            </div>
        </div>
        <Footer/>
    </>
)