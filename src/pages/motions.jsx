import React from 'react'

import './motions.css'

import Jobs from '../components/jobs'
import Banner from '../template/banner'
import Footer from '../template/footer'
import PageTitle from '../components/pageTitle'

export default props => {
    return (
        <>
            <Banner>
                <h1>Motion Design</h1>
                <h3>Ó que pica qeu faço ae</h3>
            </Banner>
            <div className='pageMargin'>
                <PageTitle/>
                <Jobs desc='MOTIONS'/>
            </div>
            <Footer/>
        </>
)}