import React, { Component } from 'react';
import Form from "../Components/Form";
import Demo from "../Components/Demo"
import Carousel from '../Components/Carousel';
import Features from "../Components/Features";
import FAQ from "../Components/FAQ";
import '../Components/css/App.css'

class HowitWorks extends Component {
    render() {
        return (
            <div className="text-center">
                <Form/>
                <Demo/>
                <Carousel/>
                <Features/>
                <FAQ/>
            </div>
        );
    }
}

export default HowitWorks;