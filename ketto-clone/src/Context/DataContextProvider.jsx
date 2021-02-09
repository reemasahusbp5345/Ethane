import React, { Component } from "react";
import axios from "axios";

export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
      category: "all",
      isAuth: false,
      users: [],
    };
  }
  componentDidMount() {
    this.fetchData();
    this.selectedCategory("all");
    this.userDetails();
  }
  userDetails = () => {
    axios({
      method: "get",
      url: "https://ketto-clone.herokuapp.com/users",
    }).then((res) =>
      this.setState({
        users: res.data,
      })
    );
  };
  fetchData = () => {
    axios({
      method: "get",
      url: "https://ketto-clone.herokuapp.com/posts",
    }).then((res) =>
      this.setState({
        db: res.data,
      })
    );
  };
  selectedCategory = (val) => {
    this.setState({
      category: val,
    });
  };

  addFundraise = (payload) => {
    // console.log(payload);
    axios({
      method: "post",
      url: "https://ketto-clone.herokuapp.com/posts",
      data: {
        title: payload.title,
        url: payload.url,
        avatar:
          "https://kettocdn.gumlet.io/media/individual/2179000/2179488/image/667cf549c99f56ebdeaf260f85cb4d5fdfd719b4.jpg?dpr=1.0&q=70&w=50",
        banner:
          "https://kettocdn.gumlet.io/media/campaign/209000/209775/image/9dafd47b27dfab682812af17b00093cedea24fac.jpg?w=750&dpr=1.0",
        name: payload.name,
        raised: payload.raised,
        hour: 21,
        support: 157,
        dayLeft: 12,
        category_id: Number(payload.category_id),
        desc: payload.desc,
        more:
          "https://kettocdn.gumlet.io/media/directupload/1000/1052/image/43371009c51a42f4c6220faa248b5e0538feae63.jpg?w=700&dpr=1.0",
      },
    }).then((res) => this.fetchData());
  };
  handleLogin = (mobile) => {
    this.setState({
      isAuth: true,
      mobile: mobile,
    });
  };
  handleLogout = () => {
    this.setState({
      isAuth: false,
      
    });
  };
  render() {
    const { selectedCategory, addFundraise, handleLogin,handleLogout } = this;
    const { db, category, isAuth, mobile, users } = this.state;
    const value = {
      db,
      selectedCategory,
      category,
      addFundraise,
      isAuth,
      handleLogin,
      mobile,
      users,
      handleLogout
    };
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
