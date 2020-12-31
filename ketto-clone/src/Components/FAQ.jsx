import React from 'react'
import './css/FAQ.css'
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import {Accordion, Card, Button } from 'react-bootstrap'
class FAQ extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            accordionStatus : false
        }
    }
    accordianToggle = () => {
        this.setState({
            accordianStatus : !this.state.accordianStatus
        })
    }

    render() {
        const {accordianStatus} = this.state
        return(
            <div className = "container faq-component">
                <div className = "accordin-comp">
                <Accordion defaultActiveKey="0" className = "accordion-component">
                    <Card>
                        <div className = "accordianBox">

                        <Accordion.Toggle as={Card.Header} eventKey="0" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>How do I raise funds?
                        </div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div>                       
                        </Accordion.Toggle>                           
                        </div>                     
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                            <ol>
                            To Start a Fundraiser, follow the three steps:
                            </ol>                      
                           <p>1.Sign up on Ketto</p>
                            <p>2.Fill up the form</p>
                            <p>3.Hit Submit</p>                                                
                            </div>
                    
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
    
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>Can I raise funds for a friend as well?</div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div> 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Yes, you can also raise funds for a friend, a loved one or anyone in need during life's crucial moments</Card.Body>
                        </Accordion.Collapse>
                    </Card> 
    
    
                     <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>Does the raised amount reach the individual directly?</div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div> 
                       
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>With Ketto, the money you collect goes directly to the bank account associated with your fundraising page. Raising money for yourself or anyone has never been easier.</Card.Body>
                        </Accordion.Collapse>
                    </Card>  
    
    
                    
                     <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>Is it safe? </div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div> 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>Your Ketto fundraiser features the very best in secure payment encryption technology. Not only are your donors online payments safe, your money is stored securely until you're ready to request a withdrawal via electronic bank transfer.</Card.Body>
                        </Accordion.Collapse>
                    </Card> 
    
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>What if I don't reach my goal? </div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div> 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>No problem. You will still receive the raised amount after the transactional processing fee.
                        To know more about transactional processing fee, visit: www.ketto.org/support/plans-and-pricing</Card.Body>
                        </Accordion.Collapse>
                    </Card> 
    
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5" className = "accordion-box" onClick = {this.accordianToggle}>
                        <div>I have more questions, who do I write to?</div>
                        <div>
                        {accordianStatus?  <RiArrowDownSLine className = "accordianIcon"/> : <RiArrowUpSLine className = "accordianIcon"/>}
                        </div> 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>You can write to info@ketto.org Know someone who needs funds for medical treatment urgently? Help them out by sharing this information with them.</Card.Body>
                        </Accordion.Collapse>
                    </Card> 
    
    
                    </Accordion> 
    
                    
               
    
                </div>
            </div>
        )
    }

    }
    

export default FAQ