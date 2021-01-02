import React, { Component } from "react";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import Card from "../Card/Card";
import { DataContext } from "../../Context/DataContextProvider";

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
            category:0,
        }
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
      const {selectedCategory}=this.context;
      selectedCategory(this.state.category)
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
          <span onClick={this.handleClick}>
            <SearchOutlined style={{ fontSize: "25px", color: "#455a64" }} />
          </span>
        </form>
        <FilterWrap className="filter-area ng-star-inserted">
          <span className="filter-container">
            Showing Fundraisers for 
            <select name="category"  value={this.state.category} onChange={this.handleChange} >
              <option value="0" >All Categories</option>
              <option value="1">Education</option>
              <option value="2">Medical</option>
              <option value="3">Women & Girls</option>
              <option value="4">Animal</option>
              <option value="5">Creative</option>
              <option value="6">Food & Hunger</option>
              <option value="7">Environment</option>
              <option value="8">Children</option>
              <option value="9">Memorial</option>
              <option value="10">Community Development</option>
              <option value="11">Others</option>
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
Widget.contextType=DataContext
export default Widget;
