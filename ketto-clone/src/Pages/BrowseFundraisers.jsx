 import React, { Component } from 'react';
import Banner from '../Components/BrowseFundraiser/Banner';
import Container from '../Components/BrowseFundraiser/Container';
 
 class BrowseFundraisers extends Component {
     render() {
         return (
             <div >
               <Banner/>
               <Container {...this.props}/>
             </div>
         );
     }
 }
 
 export default BrowseFundraisers;