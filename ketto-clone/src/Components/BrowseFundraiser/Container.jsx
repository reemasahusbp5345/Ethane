import React, { Component } from 'react';
import style from "./container.module.css";
import styled from "styled-components"
import Category from './Category';
import Widget from './Widget';

const Wrapper=styled.div`
    .instant-search{
        display:flex;
         
    }
`
class Container extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.row}> 
                    <Wrapper className="instant-search col-lg-12 col-md-12">
                        <div className="col-lg-3 col-md-3 ng-star-inserted"><Category/></div>
                        <div  ><Widget {...this.props}/></div>
                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Container;