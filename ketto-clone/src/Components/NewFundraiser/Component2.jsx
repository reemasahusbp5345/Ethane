import React, { Component } from 'react';
import styled from "styled-components";

const Wrap=styled.div`
box-shadow: 5px 5px 5px 5px #cfd8dc;
width:330px;
margin:20px;
border-radius:5px;
padding:10px;
h2{
    margin-left:-1px;
}
.cont{
    display:flex;
    flex-direction:column;
   
}
.flex{
    display:flex;
   
}
 
`

class Component2 extends Component {
    render() {
        return (
            <Wrap>
                <div className="flex">
                    <img width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4_TVUSugtZTrmI9JWAZ1oKOeH_WfXkfQkg&usqp=CAU"/>
                    <h4>Fundraising Team</h4>
                    </div> 
                <hr/>
                <div className="cont">
                <div className="flex">
                    <img width="40px" src="data:image/png;base64,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"/>  
                   <p style={{color:"#009688"}}>Start a Supporting Fundraiser </p>
                </div>
                <div className="flex">
                    <img width="40px" src="data:image/png;base64,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"/>  
                   <p>Wildlife Welfare Association</p>
                </div>
                
                </div>
            </Wrap>
        );
    }
}

export default Component2;