import React, { Component, createElement } from "react";
import "./Header.css";

// using functional component

const Header = function (props) {
    return (
        <div className="header">
            {props.heading} {props.message} {props.name}
        </div>
    )
}


// using class component
/*
class Header extends Component {
    render() {
        return (
            <div className="header">
                {`${this.props.heading} - ${this.props.message}`} 
            </div>
        )
    }
}
*/

export default Header;