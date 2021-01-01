import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styled from "styled-components";
import {Link} from "react-router-dom"

const Wrapper=styled.div`
display:grid;
grid-template-columns:33% 33% 33%;
 margin-top:100px;
  height:900px;
 .card{
     border:0px ;
     height:400px;
     border-radius:10px;
     box-shadow:10px 10px  whitesmoke;
     margin:20px;
     text-align:left;
 }
   .avatar{
     width:40px;
     height:40px;
     border-radius:40px;
     margin-right:10px;
 }
 .url{
    border-radius:5px;
 }
 .title{
     color:#222;
     font-weight:500 ;
     font-size:15px;
 }
 .light{
     color:#777;
     font-weight:normal;
 }
 .right{
     position:absolute;
     right:0;
 }
 .notfound{
     margin-left:150px;
     width:600px;
     height:600px;
 }

  
`

class Card extends Component {
    render() {
        const {db,category}=this.context;
        const {url}=this.props.match 
        console.log(this.props)
        const filterItem=db.filter(item=>item.category_id===category || category===0 || category==="all")
        return (
            <Wrapper>
               {filterItem.length>0? filterItem  
               .map(item=><div   key={item.id}><Link to={`${url}/${item.id}`} style={{textDecoration:"none"}}> 
               <div className="card">  
                    <img src={item.url} alt={item.title} className="url"/>
                    <div className="title">{item.title}</div>
                    <div>
                        <img src={item.avatar} className="avatar"/>
                        <span>{item.name}</span>
                    </div>
                    <div> <span className="title"> ₹  {item.raised}</span> <span className="light">raised</span></div>
                    <div className="progress" style={{ height:"7px",backgroundColor:"#80deea" }}>
  <div className="progress-bar bg-info" role="progressbar" style={ { width:"45%" } } aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
                    <div className="light">Last donation {item.hour} hours ago</div>
                    <div>
                        <span>{item.dayLeft}<span className="light"> Days Left</span> </span>
                        <span className="right">{item.support} <span className="light">Supporters</span> </span>
                    </div>
                    </div> </Link></div>):(<div className="notfound"> 
                   <img src="https://ketto.gumlet.io/assets/images/browse-campaign/no-results.png?w=900&dpr=1.0"/>
                   <h2>No results found</h2>
                   <p>Try adjusting your search filters to find what you are looking for.</p>
               </div>)} 
            </Wrapper>
        );
    }
}
Card.contextType=DataContext;
export default Card;