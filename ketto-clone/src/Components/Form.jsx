import React from 'react'
import './css/Form.css'
import {FaWhatsapp} from 'react-icons/fa'
import YouTube from "react-youtube";
import Carousel from 'react-bootstrap/Carousel'
// var getYouTubeID = require("get-youtube-id");

//https://youtu.be/4uu-mKoFR6w
//https://www.youtube.com/watch?v=4uu-mKoFR6w


function Form() {
       const opts = {
        height: "390",
        width: "640",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    
    return(
        <div>
            <div className = "banner m-3 d-block d-md-none d-lg-block">
                <img src = "https://www.ketto.org/new/free-banner-desktop.813f312b1abc4cd9d85d.png" alt= "banner"/>
            </div>
            <div className = "heading">
            <h1>Raising Funds was never this easy. Start a <br/>fundraiser in 5 minutes!</h1> 
            </div>
            <div className = "form-container d-flex container  justify-content-center">
                <div className = "row w-100">
                <div className = " col-md-7 col-sm-12">
                   
                    <div className = "carousel-box"> 
                    <Carousel className = "carousel">
                
                
                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image1.jpg?w=750&dpr=1.3"
                        alt="First slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Tulsi was able to raise Rs.2,71,939 to treat Sharmila's heart disease</h6>                   
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image2.jpg?w=750&dpr=1.3"
                        alt="Second slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Bhoomika was able to raise Rs.39,31,860 in 5 days to fund her liver transplant</h6>                   
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image3.png?w=750&dpr=1.3"
                        alt="Third slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Abrar's family raised Rs.4,60,852 in 3 days for heart surgery </h6>                   
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image4.png?w=750&dpr=1.3"
                        alt="Fourth slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Sharvan mangaed to raise Rs.1,55,72,900 to take care of 200+ injured & abondoned animals  </h6>                   
                        </Carousel.Caption>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image5.jpg?w=750&dpr=1.3"
                        alt="Fifth slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Mallika, a single mother was able to raise Rs.6,00,274 in 3 days to save her baby's life  </h6>                   
                        </Carousel.Caption>
                        
                    </Carousel.Item>

                    <Carousel.Item interval={1000} className = "carousel-item ">
                        <img
                        className="d-block w-100"
                        src="https://ketto.gumlet.io/assets/images/how-it-works/slider-images/image6.png?w=750&dpr=1.3"
                        alt="Sixth slide"
                        />
                        <Carousel.Caption className ="carousel-caption text-left">
                        <h6 >Ravi raised Rs.2,46,42,200 in 21 days to provide meals & medicines to abondoned parents  </h6>                   
                        </Carousel.Caption>
                        
                    </Carousel.Item>
                    </Carousel>

                    

                    

                    </div>  
                    <div className = " metrics d-flex justify-content-center">
                       <div className = "metrics-box"> 
                       <div className = "metrics-box-wrapper">
                       <h3> ₹ 1100 Crs+</h3>
                        <span>RAISED</span>
                       </div>    
                       </div>
                       <div className = "metrics-box"> 
                       <div className = "metrics-box-wrapper">
                       <h3> 55 Lakh+</h3>
                        <span>DONORS</span>
                       </div>    
                       </div>
                       <div className = "metrics-box"> 
                       <div className = "metrics-box-wrapper" id="metrics-box-wrapper">
                       <h3> 2 Lakh+</h3>
                        <span>FUNDRAISERS</span>
                       </div>    
                       </div>
                      
                       
                </div>
                </div>
                <div className = "col-md-5 col-sm-12 form">
                    <div className = "form-howitworks">
                        <div >
                            <img src = "https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=1.3" alt = "" className = "m-2"/>
                            <h4>We know you are in urgent need of funds.</h4>
                            <span>Our personal fundraiser expert is waiting to get you started!</span>
                       </div> 

                <form>
                    <div className = "form-name">
                     
                        <input type="text" className = "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                        <small id="emailHelp" className = "form-text text-muted text-left">Field Required</small>
                    </div>
                    <div >
                        
                        <input type="text" className = "form-control" id="exampleInputPassword1" placeholder="Your Mobile Number"/>
                        <small id="emailHelp" className = "form-text text-muted text-left">Please enter a valid number</small>
                    </div>
                    <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>What will be the funds used for?</option>
                    <option value="1">Cancer Treatment</option>
                    <option value="2">Accident Treatment</option>
                    <option value="3">Liver/Kidney Transplant</option>
                    <option value="3">Heart Operation</option>
                    </select>                                     
                </form> 

                <div className = "form-people">
                    <span className = "people">102 People started fundraiser in last 2 days</span>
                </div>
                <div>
                <div className = "form-btns">
                <button type="button" className="btn btn-outline-primary form-btn-1">GET A CALL</button>
                </div>
                <div>
                <button type = "button" className = "form-btn-2">
                    <div className = "ml-2">
                    <FaWhatsapp/>  
                    </div>
                   <div className = "form-btn2-text text-left">
                   CONNECT ON WHATSAPP
                   </div>       
                </button>
                </div>
             
                </div>

                </div>
                
            </div>
            </div>
            </div>
            
            <div className = "demo">
                <h2>How Crowdfunding Works?</h2>
                <p>Decided to raise funds? Pat yourself on the back. Still have doubts? Watch This!</p>
                
            </div>
            <div >
           
            <YouTube videoId="4uu-mKoFR6w" opts={opts}  width = "100%" className = "demo-video"/>
            </div>

        </div>
    )
}

export default Form