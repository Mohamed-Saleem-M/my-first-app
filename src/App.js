import React, { Component, createElement } from "react";
import Header from "./Header";
import "./App.css";
import Timer from "./Timer";

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
class App extends Component {
  constructor() {
    super();
    this.state = {
      userListToShow: [],
    };
    console.log("This Call is from Constructor")
  }

  componentDidMount() {
    let newUser = {
      id: "1",
      name: "Prakash",
      phone: "7896786541"
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
        <Header heading="Welcome to GuviB46 - MERN Stack"></Header>
        {/* <Timer course="MERN"></Timer> */}
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone Number</span>
          </div>

          {
            this.state.userListToShow.map((user) => {
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

          {/* <div className="grid-container">
            <span className="grid-item"></span><br />
            <span className="grid-item"></span>
          </div>

          <div className="grid-container">
            <span className="grid-item"></span><br />
            <span className="grid-item"></span>
          </div> */}
        </div>
      </div>
    );
  }
}

//functional component
/*
function App() {
          let moduleName = "Guvi B46 First React App"
        return (
        <div>
          <div className="header">Guvi B46 - Phone Directory</div>
          <button>Add</button>
          <div>
            <span>Name</span><br />
            <span>Phone Number</span>
          </div>
        </div>
    // *****************************************************
    // React.createElement("div", {id: "module", className: "header" },
        //   React.createElement("p", null, "ReactJS"))
        //   *******************************************
        );
}
        */

export default App;
