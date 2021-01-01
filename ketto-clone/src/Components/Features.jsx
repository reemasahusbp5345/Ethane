import React from 'react'
import "./css/Features.css"
import {FaCcApplePay} from 'react-icons/fa'
import {FcCustomerSupport} from 'react-icons/fc'
import {MdWeb} from 'react-icons/md'
import {GrUserExpert} from 'react-icons/gr'
import {FcAdvertising} from 'react-icons/fc'
import {BsPeople} from 'react-icons/bs'
import {BiDonateHeart} from 'react-icons/bi'
import {FaTools} from 'react-icons/fa'

function Features() {
    return(
        <div className = "container"> 
           <h2> We provide everything you need</h2>

           <div className = "row  content">
               <div className = "col-md-3" >
               <div className = "content-box">
                   <div className = "content-icons">
                   <FaCcApplePay style = {{width:"55px", height:"50px"}}/ >
                  
                   </div>
                   <div className = "desc">
                       <div className = "title">Payout</div>
                       <div>This is your money, you can withdraw it at any point during the course of your fundraiser</div>
                   </div>
               </div>
               </div>

               <div className = "col-md-3 offset-md-1" >

                <div className = "content-box">
                    <div className = "content-icons">
                    <MdWeb style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">Personalized Web App</div>
                        <div>Get instant updates on your fundraiser's progress via instant alerts, email and track everything realtime on Ketto's web app</div>
                    </div>

                </div>
                </div>

                <div className = "col-md-3 offset-md-1" >
                <div className = "content-box">
                    <div className = "content-icons">
                    <FcCustomerSupport style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">24/7 support</div>
                        <div>We offer you 24*7 assistance via call, WhatsApp, Email, SMS and our Instant Chatting Interface</div>
                    </div>

                </div>
                </div>

                <div className = "col-12 break"></div>

                <div className = "col-md-3" >
               <div className = "content-box">
                   <div className = "content-icons">
                   <FaCcApplePay style = {{width:"55px", height:"50px"}}/ >
                   </div>
                   <div className = "desc">
                       <div className = "title">International payment </div>
                       <div>We accept donations in multiple currencies from anywhere in the world</div>
                   </div>
               </div>
               </div>

               <div className = "col-md-3 offset-md-1" >

                <div className = "content-box">
                    <div className = "content-icons">
                    <GrUserExpert style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">Dedicated Fundraiser expert</div>
                        <div>A dedicated fundraiser expert guides you through your fundraising</div>
                    </div>

                </div>
                </div>

                <div className = "col-md-3 offset-md-1" >
                <div className = "content-box">
                    <div className = "content-icons">
                    <FcAdvertising style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">Advertising support</div>
                        <div>We provide marketing and promotional support for your fundraiser</div>
                    </div>

                </div>
                </div>

                <div className = "col-12 break"></div>

                <div className = "col-md-3" >
               <div className = "content-box">
                   <div className = "content-icons">
                   <BsPeople style = {{width:"55px", height:"50px"}}/ >
                   </div>
                   <div className = "desc">
                       <div className = "title">Multiple people - Same Fundraiser</div>
                       <div>Multiple people manage and fundraise for your cause</div>
                   </div>
               </div>
               </div>

               <div className = "col-md-3 offset-md-1" >

                <div className = "content-box">
                    <div className = "content-icons">
                    <BiDonateHeart style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">Keep the raised amount</div>
                        <div>You will receive all the raised amount after the transactional, processing fee.</div>
                    </div>

                </div>
                </div>

                <div className = "col-md-3 offset-md-1" >
                <div className = "content-box">
                    <div className = "content-icons">
                    <FaTools style = {{width:"55px", height:"50px"}}/ >
                    </div>
                    <div className = "desc">
                        <div className = "title">Fundraising Marketing tool</div>
                        <div>A highly intelligent marketing tool, which provides all insights on your fundraiser</div>
                    </div>

                </div>
                </div>




                
                <div className = "start-btn">
                <button className = "buttons-btn1">START A FUNDRAISER FOR FREE</button>
                </div>
                 
                  
               


                
            

           </div>
        </div>
    )
}
export default Features