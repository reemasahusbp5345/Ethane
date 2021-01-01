import React, { Component } from "react";
import styled from "styled-components";

import { SearchOutlined } from "@ant-design/icons";


import Card from "../Card/Card";

const WidgetWrapper = styled.div`
margin-top: -690px;
margin-left: 350px;

  input {
    border-radius: 5px;
    border: 1px solid #444;
    padding: 10px;
  }
  input:hover {
    border: 1px solid #01bfbd;
  }
   
`;

const FilterWrap = styled.div`
display:flex;
position:absolute;
margin-top:10px;
flex-wrap: wrap;
margin-left:100px;
.filter-area,.filter-container{
    display:flex;
    margin:10px 0;
    flex-direction:row;
}
color:#444;
select{
    border:1px solid #01bfbd;
    border-radius:20px;
    width:140px;
    padding:5px;
    color:#01bfbd;
}
`;

class Widget extends Component {
    constructor(props){
        super(props);
        this.state={
            category:"all",
        }
    }
  render() {
    return (
      <WidgetWrapper>
        <form className="form-inline d-flex justify-content-center md-form form-sm">
          <input
            type="text"
            className=" mr-3 w-75"
            placeholder="Search for Fundraisers"
          />
          <span>
            <SearchOutlined style={{ fontSize: "25px", color: "#455a64" }} />
          </span>
        </form>
        <FilterWrap className="filter-area ng-star-inserted">
          <span className="filter-container">
            Showing Fundraisers for 
            <select value={this.state.category}  >
              <option value="all" >All Categories</option>
              <option value="education1">Education</option>
              <option value="medical">Medical</option>
              <option value="women">Women & Girls</option>
              <option value="animal">Animal</option>
              <option value="creative">Creative</option>
              <option value="food">Food & Hunger</option>
              <option value="env">Environment</option>
              <option value="children">Children</option>
              <option value="memorial">Memorial</option>
              <option value="community">Community Development</option>
              <option value="others">Others</option>
            </select>
          </span>
          <span className="filter-container">
            Under 
            <select>
              <option >All Types</option>
              <option value="1">Tax Benefit</option>
              <option value="2">Trending</option>
              <option value="3">Urgently Funds Required</option>
              <option value="3">Successfully Funded</option>
            </select>
          </span>
          <span className="filter-container">
            from 
            <select>
              <option  >All Locations</option>
              <option value="1">Mumbai</option>
              <option value="2">Bengaluru</option>
              <option value="3">New Delhi</option>
              <option value="1">Hyderabad</option>
              <option value="2">Chennai</option>
              <option value="3"> Delhi</option>
              <option value="1">Pune</option>
              <option value="2">Kolkata</option>
              <option value="3">Ahmedabad</option>
              <option value="1">Jaipur</option>
              <option value="2">Lucknow</option>
              <option value="3">Gurugram</option>
              <option value="1">Chandigarh</option>
              <option value="2">Noida</option>
              <option value="3">Kochi</option>
              <option value="3">Others</option>
            </select>
          </span>
         
        </FilterWrap>
        <Card {...this.props}/>
      </WidgetWrapper>
    );
  }
}

export default Widget;
