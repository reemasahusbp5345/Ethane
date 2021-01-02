import React, { Component } from 'react';
import styled from "styled-components"

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
    margin-left:-10px;
    
}
.flex{
    display:flex;
     
}
 .flex>p{
     margin:5px;
 }
.img{
    width:40px;
    height:40px;
    border-radius:40px;
    box-shadow: 5px 5px 5px 5px #cfd8dc;
    text-align:center;
    color:#009688;
    line-height:-15px;
}
`

class Component3 extends Component {
    render() {
        return (
            <Wrap>
                 <div className="flex">
                    <img width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4_TVUSugtZTrmI9JWAZ1oKOeH_WfXkfQkg&usqp=CAU"/>
                    <h4>Top Donors</h4>
                    </div> 
                <hr/>
                <div className="cont">
                <div className="flex">
                    <p className="img">JK</p>
                   <p>Joggy k.George</p>
                </div>
                <div className="flex">
                    <p className="img">BA</p>
                   <p>Bhola And Donors</p>
                </div>
                <div style={{color:"#009688"}}>Show More <span><img  width="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX///8AAADi4uKUlJR8fHzv7+99fX3x8fE8PDyWlpb19fXn5+eSkpJ5eXkhISHg4OA3NzcZGRkyMjIoKCgrKysTExMcHBwNDQ1EREQpKSmdnZ0ICAgjIyPV1dW3t7fFGjoIAAACyklEQVR4nO3ZjZbTIBCG4cY1po2rblf3R129/8tUijRNyhCSUBk473MBHKZ8A5Pd3Q4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAobrXLzdYtX19d4NVV2kfm8/pN9Pum+MtfrgVusemaV4+Jl61N6seVZxi97U5SVuiW1VBid03u5XmOWWk2od/q75kL/G8lb8lpttMtx9WzdyLpx48SxXU/vvFok9ZT7F7uywwVaTa0c+WtRenW0nzaLT7yar5Ho3uoZk6bg9qf71qwg5fxF3oY1tL7N98q2Yp0V/g1ke6vT7BXCVKW9nWi920B89B/f+9+EPYyqYBrp9eXYMPCfce6SBuZnWkzvORigJ3uztxOyuDevVMDD4l3nuke3FDz2uC6nl8MhcYDOryEnv/3Wxkiagll7h4mryaj1QUmLAX9fWgI5f4tCSonlFNSYGJetE/qp1kjagln2L0wCzORwpO0Njci+Ko1jTvb7z3SHJQf8YEtVc2yfgESpw/RW2jmp883cwGVe8zMSb34sxXf+CZUNKDzspHI/BMKCtw5QAXeCbUFRgqUezFQA8qLDB03QgDXOCLXtUlM1j41S/8KctQ9EyMySV6BrjSImotmFH1j2p+comTRyMwqqkuMBTU0b9tOqVf9DGivjTK7EFHfjTOA5zmL/oYswOc7i/6GHKJp3/blDWq+QV7MfBMFBFRK/AXuF8VnKAR6EVRIT3oyDeqpKCIWoHpxquoiFrLglpYRK0lJRZ4gkZ8UIvrQSe2xGILjA1qkT3oxJxiwSdozJ9ioZfMYO4UCz9BI3yKRfegEzrFCk7QkEuspEA5qMVfMgN/iVX0oOMLakUnaFx/L1bTg840qFVF1BoHtbKIWpclVhdR61D3CRqHenvQua85otZd7QWaoFbbg87v3BsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBT+ADHDFr3f7BACAAAAAElFTkSuQmCC"/></span></div>
                </div>
            </Wrap>
        );
    }
}

export default Component3;