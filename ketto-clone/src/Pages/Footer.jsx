import React from "react";
import styled from "styled-components";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  YoutubeFilled,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Footers = styled.div`
  background: #2b5958;
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
  }
  
  `;
  
  const Wrapper = styled.div`
  padding-top:50px;
  position: relative;
  width: 100%;
  margin-top: 100%;
  color: white;
align-items:left;
justify-content:left;
img{
    padding-bottom:15px;
     
}
a{
    text-decoration:none;
    color:white;
}
  .share-icons {
    color: #fff;
    padding-top: 20px;
    border-top: 2px solid whitesmoke;
  }
  .share-icons > a {
    color: white;
    padding: 5px;
  }
  .followers {
    margin-bottom: 47px;
    margin-top: 20px;
  }
  .ng-star-inserted {
    list-style-type: none;
    margin-bottom: 8px;
     
  }
  ul.ng-start-inserted {
    margin-bottom: 1rem;
  }
  .container-fluid{
      width:100%;
      padding-right:15px;
      padding-left:15px;
      margin-right:auto;
      margin-left:auto;
  }
  .row{
      display:flex;
      flex-wrap:wrap;
      margin:0px -15px;
  }
  .col{
      flex-basis:0;
      flex-grow:1;
      max-width:100%;
  }
  h4{
      font-size:20px;
      text-align:left;
  }
    
`;

const CopyRight = styled.div`
  .copywrite-section {
    margin-bottom: -41px;
    line-height: 30px;
  }
  .copyright{
      color:white;
      text-align:center;
      padding:15px;
      justify-content:center;
      font-size:14px;
      line-height:20px;
  }
  .row{
      flex-wrap:wrap;
      margin-right:-15px;
      margin-left:-15px;
  }
   a{
      text-decoration:none;
      color:white;
  }
  .payment-methods{
      padding:15px;
  }
  .offset-lg-6{
      margin-left:50%;
  }
  .payment-methods-holder{
      border-bottom:2px solid white;
      justify-content:flex-end;
  }
`;

const Footer = (props) => {
  return (
    <Footers className="d-none d-sm-none d-lg-block">
      <div className="container footer-wrapper">
        <Wrapper className="row">
          <div className="col-md-3 col-lg-3 col-12 col-sm-7">
            <img
              src="https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.0"
              alt="ketto-logo"
              width="80px"
            />
            <div className="share-icons">
              <a href="https://www.facebook.com/ketto.org">
                <FacebookFilled />
              </a>
              <a href="https://twitter.com/ketto">
                <TwitterOutlined />
              </a>
              <a href="https://www.linkedin.com/company/ketto-online-ventures-private-limited">
                <LinkedinFilled />
              </a>
              <a href="https://www.youtube.com/user/Kettodotorg">
                <YoutubeFilled />
              </a>
              <a href="https://www.instagram.com/kettoindia/">
                <InstagramOutlined />
              </a>
              <a href="https://api.whatsapp.com/send?phone=917700975559">
                <WhatsAppOutlined />
              </a>
            </div>
            <div className="followers">
              <h2 className="mb-0">1.5M +</h2>
              <span>Followers</span>
            </div>
            <div className="reach-out">
              For any queries, reach out to us at Email :
              <br />
              <span>info@ketto.org</span>
            </div>
          </div>
          <div className="col-md-9 col-lg-9">
              <div className="container-fluid">

            <div className="row">
              <div className="col">
                <ul className="ng-star-inserted">
                  <li className="ng-star-inserted">
                    <h4>Fundraisers</h4>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://amazonwings.ketto.org/">Crowdfunding for Amazon Wing</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Crowdfunding for Education</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Milkar for covid 19</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Coronavirus Relief Fund</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                {" "}
                <ul className="ng-star-inserted">
                  <li className="ng-star-inserted">
                    <h4>Causes</h4>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Medical crowdfunding</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Animal Fundraisers</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Fundraising for Child</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Creative Relief Fund</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                {" "}
                <ul className="ng-star-inserted">
                  <li className="ng-star-inserted">
                    <h4>How It Works</h4>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">NGOs</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Corporates</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a>Browse fundraisers</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">What is crowdfunding</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                {" "}
                <ul className="ng-star-inserted">
                  <li className="ng-star-inserted">
                    <h4>About us</h4>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Team ketto</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Press Club</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Our Partners</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Careers</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Ketto Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                {" "}
                <ul className="ng-star-inserted">
                  <li className="ng-star-inserted">
                    <h4>Support</h4>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Help Center</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Fundraising Tips</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Fundraiser Video</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Plans & Pricing</a>
                  </li>
                  <li className="ng-star-inserted">
                    <a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
              </div>
          </div>
        </Wrapper>
      </div>

      <CopyRight className="copywrite-section d-none d-sm-block">
        <div className="container">
          <div className="row payment-methods-holder">
            <div className="offset-lg-6 payment-methods">
              <img
                src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.0"
                alt="card"
              />
            </div>
          </div>
          <div className="row copyright">
              Copyright &#169; 2020 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
              <span><a href="https://support.ketto.org/hc/en-us/articles/360021156273-Privacy-Policy"> &nbsp;Privacy Policy&nbsp;</a><span>|</span></span>
              <span><a href="https://support.ketto.org/hc/en-us/articles/360020926294-AML-Policy"> &nbsp;AML Policy&nbsp;</a><span>|</span></span>
              <span><a href="https://www.ketto.org/support/use-of-cookies.php"> &nbsp;Use of Cookies&nbsp;</a></span>
          </div>
        </div>
      </CopyRight>
    </Footers>
  );
};

export default Footer;
