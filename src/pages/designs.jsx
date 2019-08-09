import React from 'react'

import Banner from '../template/banner'
import Footer from '../template/footer'
import Jobs from '../components/jobs'

export default props => (
    <>
        <Banner>
            <h1>Designs</h1>
            <h3>Aqui fica os convite de festa</h3>
        </Banner>
        <div className="pageMargin">
            <Jobs/>
        </div>
        <Footer/>
    </>
)