import React, { Component } from 'react';
import ModalCard from '../Components/NewFundraiser/ModalCard';

class StartFundraisers extends Component {
    render() {
        return (
            <div style={{background:"rgba(0,0,0,.7)",padding:30}}>
               <ModalCard {...this.props}/> 
            </div>
        );
    }
}

export default StartFundraisers;