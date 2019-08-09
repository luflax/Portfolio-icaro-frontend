import React from 'react'

import './ilustrations.css'
import Banner from '../template/banner'
import Footer from '../template/footer'
import Jobs from '../components/jobs'

export default props => (
    <>
        <Banner>
            <h1>Ilustrations</h1>
            <h3>Rabisco pra carai, pó fala</h3>
        </Banner>
        <div className="pageMargin">
            <Jobs desc='ILUSTRATIONS'/>
        </div>
        <Footer/>
    </>
)