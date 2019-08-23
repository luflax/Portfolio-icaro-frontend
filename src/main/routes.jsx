import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Header from '../template/header'
import Reel from '../pages/reel'
import Motions from '../pages/motions'
import Contact from '../pages/contact'
import Ilustrations from '../pages/ilustrations'
import Designs from '../pages/designs'
import JobDetailed from '../pages/jobDetailed'
import Admin from '../pages/admin/admin'

export default props => {
    return(
        <>
            <Header/>
            <Switch>
                <Route path='/' exact component={Reel} />
                <Route path='/motions' exact component={Motions} />
                <Route path='/motions/:id' component={JobDetailed} />
                <Route path='/ilustrations' exact component={Ilustrations} />
                <Route path='/ilustrations/:id' component={JobDetailed} />
                <Route path='/designs' exact component={Designs} />
                <Route path='/designs/:id' component={JobDetailed} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/admin' exact component={Admin} />
                <Redirect path='*' to='/'/>
            </Switch>
        </>
)}