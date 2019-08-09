import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Header from '../template/header'
import Reel from '../pages/reel'
import Motions from '../pages/motions'
import Contact from '../pages/contact'
import Ilustrations from '../pages/ilustrations'
import Designs from '../pages/designs'

export default props => {
    return(
        <>
            <Header/>
            <Switch>
                <Route path='/' exact component={Reel} />
                <Route path='/motions' component={Motions} />
                <Route path='/ilustrations' component={Ilustrations} />
                <Route path='/designs' component={Designs} />
                <Route path='/contact' component={Contact} />
                <Redirect path='*' to='/home'/>
            </Switch>
        </>
)}