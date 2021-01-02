import React, { Component } from "react";
import styled from "styled-components";
import { GlobalOutlined } from "@ant-design/icons";
import { DataContext } from "../../Context/DataContextProvider";
import { Link } from "react-router-dom";

const CardWrap = styled.div`
  max-width: 554px;
  margin: auto;
  box-shadow:5px 5px 5px 5px #cfd8dc;
  background:white ;
  padding:30px;
  border-radius:5px;
  input{
      border:0px;
      border-bottom:1px solid #01bfbd;
      width:500px;
  }
  label{
      color:grey;
  }
  span{
      color:#01bfbd;
  }
  select,textarea{
     width:500px;
     border:1px solid #01bfbd;
     border-radius:5px;
     padding:5px; 
  }
  input[type=submit]{
     background:#01bfbd;
     color:white;
     padding:10px;
     border-radius:5px;
  }
`;

class ModalCard extends Component {
    constructor(props){
        super(props);
        this.state={
            raised:"",
            title:"",
            name:"",
            category_id:0,
            url:"",
            desc:"",
            agree:false
        }
    }
    handleChange=(e)=>{
        const {name,value,type,checked}=e.target;
        const val=type==="checkbox"?checked:type==="file"?URL.createObjectURL(e.target.files[0]):value
        this.setState({
            [name]:val
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const {...payload}=this.state;
        // console.log(payload)
        const {addFundraise}=this.context;
        addFundraise(payload)
        const {history}=this.props
        history.push(`/`)
    }
  render() {
      const {raised,title,name,category_id,url,agree,desc}=this.state
     
    return (
      <CardWrap>
        <h1>Tell Us about your Fundraiser</h1>
        <hr />
        <div>
          <GlobalOutlined style={{ color: "#01bfbd", fontSize: 20 }} />
          Raising funds for Other purpose
        </div>
        <p style={{ color: "#01bfbd" }}>Change Purpose</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>How Much do you want to raise?</label>
            <div>
              <input type="text" name="raised" value={raised} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <label>Fundraiser Title</label>
            <div>
              <input type="text" name="title" value={title} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <label>Whom are you raising funds for?</label>
            <div>
              <input type="text" name="name" value={name} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <label>Please Choose a Cause</label>
            <div>
              <select type="text" name="category_id" value={category_id} onChange={this.handleChange}>
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
            </div>
          </div>
          <div>
              <label> Add fundraiser image/video</label>
              <div>
                  <input style={{border:0}} type="file" name="url" onChange={this.handleChange}/>
              </div>
          </div>
          <div>
              <label> Write a story that does justice to your cause and makes the supporter click the donate button. 
              <ul>
                  Follow these steps:
                  <li>Talk about who you are raising funds for,be it yourself or loved one.</li>
                  <li>Explain Why you are raising funds.</li>
                  <li>Make an appeal to your supporters.</li>
              </ul>
              </label>
              <div>
                  <textarea placeholder="Write description here..."  name="desc" value={desc} onChange={this.handleChange}></textarea>
              </div>
          </div>
          <div>
          <label><input type="checkbox" name="agree" checked={agree} onChange={this.handleChange} style={{width:20}}/> I agree to Ketto's <span>Terms of Use, Privacy Policy and Plans</span>, i acknowledge and confirm that the information provided above is true and correct to the best of my knowledge and belief and I agree to be liable if any of the above information is found to be false or misleading, I hereby give my consent for sharing it with regulatory authorithies or disclosing it as may be required by law.*</label>
          </div>
          <div>
              <input type="submit" value="SUBMIT FOR APPROVAL"/> 
          </div>
        </form>
         
      </CardWrap>
      
    );
  }
}
ModalCard.contextType=DataContext;
export default ModalCard;
