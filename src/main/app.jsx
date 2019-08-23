import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Routes from './routes'
import './app.css'

export default props => {
    return(
        <>
        <BrowserRouter onEnter={() => window.scrollTo(0, 0)}>
            <Routes/>
        </BrowserRouter>
        </>
    )
}