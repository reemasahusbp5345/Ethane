import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BrowseFundraisers from '../Pages/BrowseFundraisers'
import CardDetails from '../Pages/CardDetails'
import Footer from '../Pages/Footer'
import Home from '../Pages/Home'
import HowitWorks from '../Pages/HowitWorks'
import { Navbar } from '../Pages/Navbar'
import StartFundraisers from '../Pages/StartFundraisers'

export default function Routes(props) {
    return (
        <div>
           <Navbar/> 
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/fundraisers" exact render={(props)=><BrowseFundraisers {...props}/>}/>
               <Route path="/fundraisers/:id" exact render={(props)=><CardDetails {...props}/>}/>
               <Route path="/crowdfunding" exact component={HowitWorks}/>
               <Route path="/new/crowdfunding" exact component={StartFundraisers}/>
           </Switch>
           <Footer/>
        </div>
    )
}
