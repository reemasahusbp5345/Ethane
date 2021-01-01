import React from 'react'
import './css/Carousel.css'
import  Swiper from 'swiper';
import SwiperSlide from 'swiper'
import pagination from 'swiper'
import navigation from 'swiper'
import 'swiper/swiper-bundle.css';


class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 40,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
          });
        
    
    }
    render() {
        return(
            
   
        <div className = "carousel-box">
            <div className = "carousel-container">
                <h2>Most Promising Platform To Raise Funds</h2>
                <p>Millions of people succesfully raised funds on Ketto for their cause. Hear what some of our successful campaigners have to say.</p>
            </div>

            <div>
                <div class="swiper-container">
                <div class="swiper-wrapper">
                <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>

                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>


                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>
                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>
                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>
                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>

                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>

                    <div class="swiper-slide">
                   <div className = "wrapper">
                       <div className = "top">
                       <div className = "photo">
                          <img src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt = "image" width="55px"/>
                        </div>
                        <div className = "description">
                            <h3>Manish Vyas</h3>
                            <span>campaigner</span>
                            <h5>Raised <span>Rs.5,66,598</span> for child education</h5>
                        </div>

                       </div>
                       <div className = "down">
                           <h6>Testimonial:</h6>
                           <p>The support from ketto was excellent. We received guidance throughout the process from setting up  the process from setting  up the fundraiser, documentation, social medica
                               supoort and getting more coverage for our cause. Glad to have partnered with Ketto for this!
                           </p>
                       </div>

                   </div>

                    </div>



                    

                    


               
                </div>

               
               
                <div class="swiper-pagination"></div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            </div>




            

        </div>
    )
}
        }

  
export default Carousel