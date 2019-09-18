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
                <h1>Motions</h1>
            </Banner>
            <div className='pageMargin'>
                <Jobs jobtype='motions'/>
            </div>
            <Footer/>
        </>
)}