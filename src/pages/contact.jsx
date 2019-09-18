import React, {useState} from 'react'
import {api} from '../main/api'

import './contact.css'
import Banner from '../template/banner'
import Footer from '../template/footer'

export default props => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    async function handleEmailSubmit(e){
        e.preventDefault()
        const response = await api.post(`${api.defaults.baseURL}/email`, {email, name, message})
        console.log(response.data)
    }
    return (
        <>
            <Banner>
                <h1>Contact</h1>
            </Banner>
            <div className="pageMargin">
                <div className="contactMain">
                    <div>
                        <h1>Entre em Contato</h1>
                        <p>Entre em contato através do formulário ao lado ou diretamente no email: <strong>pico@pico.com</strong></p>
                    </div>
                    <form onSubmit={e => handleEmailSubmit(e)} >
                        <label htmlFor="contactEmail">E-Mail:</label>
                        <input className='inputLg' id='contactEmail'
                            type="text" placeholder='example@example.com'
                            value={email} onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="contactName">Name:</label>
                        <input className='inputLg' id='contactName' 
                            type="text" placeholder='Johnny Bravo' 
                            value={name} onChange={e => setName(e.target.value)}/>
                        <label htmlFor="contactMessage">Message:</label>
                        <textarea id="contactMessage" cols="20" rows="10"
                            placeholder='I need a desaine muito bão!' 
                            value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <input type="submit" value='Send Message'/>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
        )
}