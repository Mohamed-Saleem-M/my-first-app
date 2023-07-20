import React, { Component } from 'react'
import AddUser from './AddUser'
import ShowUser from './ShowUser';
import { Route, Routes } from "react-router-dom";
import Param from './Param';

export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      userList: [
        {
          id: 1,
          name: "John",
          phone: "2323232323",
        },
        {
          id: 2,
          name: "Jill",
          phone: "6756765678",
        },
        {
          id: 3,
          name: "Mars",
          phone: "3434343434",
        },
        {
          id: 4,
          name: "Jupi",
          phone: "43434343434",
        },
        {
          id: 5,
          name: "Venus",
          phone: "43434343434",
        },
      ],
      name: "",
    };
  }

  addUser = (newUser) => {
    let userList = this.state.userList;
    if (userList.length > 0) {
      //second user id sets as follows
      //newUser.id = userList[1-1].id + 1
      //newUser.id = userList[0].id + 1
      //newUser.id = 1+1
      //newUser.id = 2
      newUser.id = userList[userList.length - 1].id + 1;
      this.setState({ name: newUser.name });
    } else {
      //first user id sets to 1
      newUser.id = 1;
    }

    userList.push(newUser);
    this.setState({ userList: userList });
    console.log(this.state.userList);
  };

  render() {
    return (
      <div>
        <Routes>
          <Route exact path='/' element={
            <ShowUser name={this.state.name} userList={this.state.userList}>
            </ShowUser>
          }>
          </Route>

          <Route exact path='/add' element={
            <AddUser message="Context API" addUserHandler={this.addUser} name={this.state.name}>
            </AddUser>}>
          </Route>

          <Route exact path='/page/:num' element={<Param></Param>}>
          </Route>

        </Routes>
      </div >
      // <AddUser addUserHandler={this.addUser}></AddUser>
      // <ShowUser userList = {this.state.userList}></ShowUser>
    )
  }
}

export default Directory