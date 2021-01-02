import React, { Component } from 'react';
import styled from "styled-components";

const Cont=styled.div`
box-shadow: 5px 5px 5px 5px #cfd8dc;
border-radius:5px;
padding:10px;
margin-top:20px;
width:330px;
.cont {
    display:flex;
    flex-direction:row;
}
.cont>div>img{
    width:50px;
    height:50px;
    border-radius:50px;
}
`

class Component1 extends Component {
    render() {
        return (
            <Cont>
                <div className="cont">
                    <div>
                    <img src="https://kettocdn.gumlet.io/media/individual/1720000/1720862/image/3348015ce40c4109f41bcb6afb9d86a6be645059.jpg?w=300&dpr=1.0"/>
                    </div>
                    <div>
                        <p>Campaigner</p>
                        <p>Harjeet Singh</p>
                        <p>Delhi</p>
                    </div>
                </div>
                    <hr/>
                <div className="cont">
                    <div>
                    <img src="https://kettocdn.gumlet.io/media/individual/1720000/1720862/image/3348015ce40c4109f41bcb6afb9d86a6be645059.jpg?w=300&dpr=1.0"/>
                    </div>
                    <div>
                        <p>Campaigner</p>
                        <p>Harjeet Singh</p>
                        <p>Delhi</p>
                    </div>
                </div>
                  
                    
                    
            </Cont>
        );
    }
}

export default Component1;