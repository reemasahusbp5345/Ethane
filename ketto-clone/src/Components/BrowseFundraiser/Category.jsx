import React, { Component } from 'react';
import styled from "styled-components";
import { DataContext } from '../../Context/DataContextProvider';
import {Link} from "react-router-dom"

const CategoryWrapper=styled.div`
background: #f5f5f5;
border-radius: 8px;
padding: 20px;
 
.category-title{
    font-weight: 700;
    line-height: 27px;
    font-size: 17px;
    letter-spacing: 1px;
    color: #444;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
}
.category-list{
    margin-top: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
}
.side-menu,.filter-list{
    padding-left:0;
}
.filter-list{
    list-style:none;
    padding:0 15px;
    margin-bottom:-8px;
}
.side-menu,.filter-item{
    font-size:17px;
}
.side-menu,.selectedFilter{
    font-weight:600px;
}
.filter-item{
    margin-bottom:20px;
    cursor:pointer;
    text-align:left;
    color:#444;
}
.selectedFilter{
    color:#01bfbd;
}
.startFundraiser>button{
    background: #01bfbd;
    box-shadow: 0 1px 1px rgba(0,0,0,.24), 0 0 1px rgba(0,0,0,.12);
    border-radius: 4px;
    height: 35px;
    width: 100%;
    outline: 0;
    border: none;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    cursor: pointer;
}
.startFundraiser>button:hover{
   background-color:#039695;
}
`

class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            category:"all"
        }
    }
    handleChange=(e)=>{
        const {category}=this.state
        this.setState({
            category:e.target.value
        })
        const {selectedCategory}=this.context;
        selectedCategory(category)
    }
    render() {
        const {category}=this.state;
        return (
            <CategoryWrapper>
                 <div className="category-title">CATEGORIES</div>
                 <div className="category-list">
                     <div className="side-menu ">
                         <ul className="filter-list" name="category" value={category} onClick={this.handleChange}>
                             <li className="filter-item selectedFilter" value="all">All Categories</li>
                             <li className="filter-item " value="1">Education</li>
                             <li className="filter-item " value="2">Medical</li>
                             <li className="filter-item " value="3">Women & Girls</li>
                             <li className="filter-item " value="4">Animals</li>
                             <li className="filter-item " value="5">Creative</li>
                             <li className="filter-item " value="6">Food & Hunger</li>
                             <li className="filter-item " value="7">Environment</li>
                             <li className="filter-item " value="8">Children</li>
                             <li className="filter-item " value="9">Memorial</li>
                             <li className="filter-item " value="10">Community Development</li>
                             <li className="filter-item " value="11">Others</li>
                         </ul>
                     </div>
                 </div>
                 <div className="startFundraiser">
                    <button><Link to="/new" style={{textDecoration:"none",color:"white"}}> Start a Fundraiser</Link></button>
                 </div>
            </CategoryWrapper>
        );
    }
}
Category.contextType=DataContext
export default Category;