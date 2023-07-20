import React, { Component, createElement } from "react";
import Header from "./Header";
import "./ShowUser.css";
import { Link } from "react-router-dom";

/*
let users = [
  {
    id: 1,
    name: "John",
    phone: "9787977876"
  },
  {
    id: 2,
    name: "Jack",
    phone: "8976892341"
  },
  {
    id: 3,
    name: "Mani",
    phone: "9787977432"
  },
  {
    id: 4,
    name: "Mohan",
    phone: "8976834521"
  }
]
*/

//class component
class ShowUser extends Component {
  constructor() {
    super();
    this.state = {
      userListToShow: [],
    };
    console.log("This Call is from Constructor")
  }

  componentDidMount() {
    let newUser = {
      id: 1,
      name: "Prakash",
      phone: "7896786541",
    };
    let userList = this.state.userListToShow;
    userList.push(newUser);
    this.setState({ userListToShow: userList });
    console.log("This Call is from Component Did Mount")
  }

  componentDidUpdate() {
    console.log("The call is from Component Did Update");
  }

  componentWillUnmount() {
    console.log("The call is from Component Will Unmount");
  }
  // delete() {
  //   alert("Delete Button Clicked !!!");
  // }
  render() {
    console.log("This Call is from Render Method")
    return (
      <div>
        <Header
          heading="Welcome to GuviB46 - MERN Stack"
          name={this.props.name}>
        </Header>
        {/* <Timer course="MERN"></Timer> */}
        <div className="component-body-container">
          <Link to='/add'>
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone Number</span>
          </div>

          {
            this.props.userList.map(user => {
              return (
                <div key={user.id} className="grid-container">
                  <span className="grid-item">{user.name}</span>
                  <span className="grid-item">{user.phone}</span>
                  <span className="grid-item">
                    <button className="custom-btn delete-btn" onClick={this.delete}>Delete</button>
                  </span>
                </div>
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default ShowUser;
