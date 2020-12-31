import React, { Component } from 'react';
import axios from "axios";

export const DataContext=React.createContext()

class DataContextProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            db:[],
            category:"all"
        }
    }
    componentDidMount(){
        this.fetchData()
        this.selectedCategory("all")
    }
    fetchData=()=>{
        axios({
            method:"get",
            url:"http://localhost:3008/posts",
        })
        .then(res=>this.setState({
            db:res.data
        }))
    }
    selectedCategory=(val)=>{
        this.setState({
            category:val
        })
    }
    render() {
        const {selectedCategory}=this
        const {db,category}=this.state;
        const value={db,selectedCategory,category}
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export default DataContextProvider;