import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from "styled-components";
import { DataContext } from '../Context/DataContextProvider';

const LoginWrap=styled.div`
margin:auto;
box-shadow: 5px 5px 5px 5px #cfd8dc;
max-width:700px;
padding:20px;
h1{
    text-align:center;
}
.cont{
    display:flex;
}
.left,.right{
    flex:0.5;
}
.bar{
    border-right:1px solid grey;
    height:300px;
margin-botton:20px;
}
input{
    border:0;
    border-bottom:1px solid grey;
    width:250px;
    margin-bottom:20px;
}
button{
    border:0px;
    background:#009688;
    color:white;
    width:250px;
    padding:10px;
    border-radius:5px;
}
.google{
    background-color:#4285f4;
    margin-bottom:10px;
    margin-left:25px;
    margin-top:30px;
}
.fb{
    margin-bottom:10px;
    margin-left:25px;
    background-color:#4267B2;
}
`

 

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            mobile:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value 
        })
    }
    handleClick=(e)=>{
        // console.log(this.state.mobile)
        const {handleLogin}=this.context;
        handleLogin(this.state.mobile)
    }
    render() {
        const {mobile}=this.state
        const {isAuth}=this.context;
        return !isAuth? (
            <LoginWrap>
                <h1>Login</h1>
                <div className="cont">
                 <div className="left"> 
                    <input placeholder="Email/mobile Number" name="mobile" value={mobile} onChange={this.handleChange}/>
                    <br/>
                    <button onClick={this.handleClick}>Login</button>
                    <p style={{color:"#009688",textAlign:"center",marginTop:10}}>Login Via Password</p>
                    <p>By continuing you agree to our <span style={{color:"#009688"}}>Terms Of Service and Privacy Policy</span></p>
                    <p>Want to start a fundraiser? <span style={{color:"#009688"}}>Click here</span></p>
                 </div>
                 <div className="bar"></div>
                 <div className="right"> 
                    <button className="google">Sign in With Google</button>
                    <p style={{textAlign:"center"}}>OR</p>
                    <button className="fb">Continue with Facebook</button>
                 </div>
                </div>
            </LoginWrap>
        ):(<Redirect to="/new"/>);
    }
}
Login.contextType=DataContext
export default Login;