import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Navbarcenter = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex: 0.4;
  .bar {
    border-right: 1px solid #455a64;
    height: 25px;
    margin-right: 5px;
  }
  a,
  div {
    font-size: 16px;
    text-decoration: none;
    color: #455a64;
    padding-right: 8px;
  }
  .dropdown,.dropdown-item{
      cursor:pointer;
  }
`;

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color:transparent;
  padding: 15px;
  top: 0;
  height: 75px;
  display: flex;
  line-height: normal;
`;

const NavbarLeft = styled.div`
  margin-left: 100px;
  flex: 0.1;
  a {
    text-decoration: none;
    color: #e65100;
  }
`;

const NavbarRight = styled.div`
  padding-top: 10px;
  flex: 0.4;
  text-align: right;
  padding-right: 10px;
  display: flex;
  .chat {
    border: 2px solid #64dd17;
    height: 30px;
    width: 80px;
    border-radius: 5px;
    color: #64dd17;
    font-weight: bolder;
    text-align: left;
    margin-left: 100px;
    padding-left: 10px;
  }
  .fundraiser {
    border: 2px solid #01bfbd;
    height: 30px;
    width: 170px;
    border-radius: 5px;
    color: #01bfbd;
    font-weight: bolder;
    text-align: left;
    margin: 0px 20px;
    padding-left: 20px;
  }
  .chat > a {
    color: #64dd17;
    text-decoration: none;
  }
  .fundraiser > a {
    color: #01bfbd;
    text-decoration: none;
  }
  .signin {
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="wrapper">
      <NavbarLeft>
        <Link to="/">
          <img
            src="https://kettocdn.gumlet.io/images/logo-light-bg.svg?w=80&dpr=1.0"
            alt="ketto-logo"
            width="70px"
          />
        </Link>
      </NavbarLeft>
      <Navbarcenter>
        <div>
          <Link to="/crowdfunding/fundraisers">Browse Fundraisers</Link>
        </div>
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Fundraise For
          </div>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <p className="dropdown-item">Medical Treatment</p>
            <p className="dropdown-item">NGO / Charity</p>
            <p className="dropdown-item">Other Cause</p>
          </div>
        </div>
        <div>
          <Link to="/crowdfunding">How It Works</Link>
        </div>
        <div className="bar"></div>
        <div>
          <SearchOutlined style={{ fontSize: "25px", color: "#455a64" }} />
          Search
        </div>
      </Navbarcenter>
      <NavbarRight>
        <div className="chat">
          <a href="https://api.whatsapp.com/send?phone=917700975559">
            <WhatsAppOutlined style={{ fontSize: "20px", color: "#64dd17" }} />
            Chat
          </a>
        </div>
        <div className="fundraiser">
          <Link to="/new/crowdfunding"> Start A Fundraiser</Link>
        </div>
        <div className="signin">Sign In</div>
      </NavbarRight>
    </NavbarWrapper>
  );
};

export { Navbar };
