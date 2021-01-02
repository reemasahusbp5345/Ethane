import React, { Component } from "react";
import { DataContext } from "../Context/DataContextProvider";
import styled from "styled-components";
import {
  ShareAltOutlined,
  GlobalOutlined,
  FieldTimeOutlined,
  CommentOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  HeartFilled,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import Component1 from "../Components/NewFundraiser/Component1";
import Component2 from "../Components/NewFundraiser/Component2";
import Component3 from "../Components/NewFundraiser/Component3";

const CardContainer = styled.div`
  background: whitesmoke;
  padding: 20px;
  h2,
  h1 {
    margin-left: 150px;
  }
  .cont {
    display: flex;
  }
  .leaderboard {
    flex: 0.5;
    height: 100%;
    box-shadow: 5px 5px 5px 5px #cfd8dc;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .leaderboard > div > img {
    border-radius: 5px;
    height: 416px;
  }
  .leaderboard > div > .share {
    width: 250px;
    margin-left: 450px;
    margin-top: 20px;
    border: 0px;
    color: #01bfbd;
    height: 50px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 5px #cfd8dc;
  }
  .leaderboard > div > .share:hover {
    background: #01bfbd;
    color: white;
  }
  .right {
    flex: 0.3;
  }
  .icon {
    display: flex;
  }
  .icon > div {
    margin-left: 20px;
    colr: #444;
    font-weight: 500;
    padding: 10px;
  }
  .btn {
    margin: 15px;
  }
  .btn > button {
    margin: 10px;
    width: 180px;
    border: 0px;
    padding: 10px;
    color: white;
    border-radius: 5px;
  }
  .wp {
    background-color: #00c853;
  }
  .fb {
    background-color: #0d47a1;
  }
  .donate {
    background-color: #009688;
  }
`;

const HelpDesk = styled.div`
  margin-left: -90px;
  display: flex;
  flex-direction: column;
  text-align: left;
  div {
    margin-left: 20px;
    font-size: 20px;
    color: #444;
  }
  .btn {
    background-color: #009688;
    color: white;
    padding: 25px;
    width: 300px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
  }
  .spread {
    border: 1px solid #01579b;
    background-color: #01579b;
    color: white;
    padding: 20px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
  }
  span {
    font-size: 15px;
    color: #555;
  }
  .left {
    margin-left: 100px;
  }
  .paymentcard {
    display: flex;
    margin-left: 12px;
    width:300px;
  }
  .paymentcard > div {
    border: 1px solid grey;
    font-size: 10px;
    flex: 1;
    height: 35px;
    margin: -1px;
    border-radius: 3px;
    width: 50px;
  }
`;

class CardDetails extends Component {
   
  render() {
    const { id } = this.props.match.params;
    const { db } = this.context;
    const details = db.find((item) => item.id === Number(id));
    return (
      <CardContainer>
        <h2>{details.title}</h2>
        <div className="cont">
          <div className="leaderboard">
            <div>
              <img src={details.banner} />
            </div>
            <div>
              <button className="share">
                <ShareAltOutlined />
                Share This Fundraiser
              </button>
            </div>
            <div className="icon">
              <div>
                <GlobalOutlined style={{ color: "#01bfbd", fontSize: 20 }} />
                About
              </div>
              <div>
                <FieldTimeOutlined style={{ color: "#01bfbd", fontSize: 20 }} />
                Updates
              </div>
              <div>
                <CommentOutlined style={{ color: "#01bfbd", fontSize: 20 }} />
                Comments
              </div>
            </div>
            <div
              className="progress"
              style={{
                height: "3px",
                margin: "0 30px",
                backgroundColor: "#80deea",
              }}
            >
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "15%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h1>About the Fundraiser</h1>
            <div>
              <p style={{ padding: 20 }}>{details.desc}</p>
            </div>
            <div style={{ marginLeft: "85px" }}>
              <img src={details.more} width="550px" />
              <button className="share" style={{ marginLeft: 150 }}>
                Read More
              </button>
            </div>
            <div className="btn">
              <button className="wp">
                <WhatsAppOutlined />
                Share
              </button>
              <button className="fb">
                <FacebookFilled />
                Share
              </button>
              <button className="donate">Donate Now</button>
            </div>
          </div>
          <HelpDesk className="right">
            <button className="btn">
              <HeartFilled style={{color:"white",fontSize:25}}/>Donate Now
            </button>
            <div className="paymentcard">
              <div>
                <CreditCardOutlined />
                All Credits & Debit Card
              </div>
              <div>
                <GlobalOutlined />
                Net banking
              </div>
              <div>
                {" "}
                <img
                  width="40px"
                  src="https://cdn.iconscout.com/icon/free/png-64/upi-2085056-1747946.png"
                />
                Paytm & UPI
              </div>
              <div>
                <img
                  width="20px"
                  src="https://www.flaticon.com/svg/static/icons/svg/25/25473.svg"
                />
                Direct Bank Transfer
              </div>
            </div>
            <button className="spread">
              <FacebookFilled style={{ color: "white", fontSize: 25 }} />
              Spread the World
            </button>
            <div>₹ {details.raised}</div>
            <div>raised of ₹ 50,00,000 goal</div>
            <div
              className="progress"
              style={{
                height: "8px",
                backgroundColor: "#80deea",
                width: "300px",
              }}
            >
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div>
              <span>{details.support} supporters</span>
              <span className="left">{details.dayLeft} days left</span>
            </div>
            <Component1/>
            <Component2/>
            <Component3/>
          </HelpDesk>
        </div>
      </CardContainer>
    );
  }
}
CardDetails.contextType = DataContext;
export default CardDetails;
