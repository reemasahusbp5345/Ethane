import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BrowseFundraisers from '../Pages/BrowseFundraisers'
import Footer from '../Pages/Footer'
import Home from '../Pages/Home'
import HowitWorks from '../Pages/HowitWorks'
import { Navbar } from '../Pages/Navbar'
import StartFundraisers from '../Pages/StartFundraisers'

export default function Routes() {
    return (
        <div>
           <Navbar/> 
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/crowdfunding/fundraisers" exact component={BrowseFundraisers}/>
               <Route path="/crowdfunding" exact component={HowitWorks}/>
               <Route path="/new/crowdfunding" exact component={StartFundraisers}/>
           </Switch>
           <Footer/>
        </div>
    )
}
