import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BrowseFundraisers from '../Pages/BrowseFundraisers'
import Home from '../Pages/Home'
import HowitWorks from '../Pages/HowitWorks'
import { Navbar } from '../Pages/Navbar'
import StartFundraisers from '../Pages/StartFundraisers'

export default function Routes() {
    return (
        <div>
           <Navbar/> 
           <Switch>
               <Route path="/" component={Home}/>
               <Route path="/crowdfunding/fundraisers" component={BrowseFundraisers}/>
               <Route path="/crowdfunding" component={HowitWorks}/>
               <Route path="/new/crowdfunding" component={StartFundraisers}/>
           </Switch>
        </div>
    )
}
