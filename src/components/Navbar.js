import React, { Component } from "react";
import { MdTravelExplore } from "react-icons/md";
import "./NavbarStyles.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a href="/" className="logo">
            <h1>
              <MdTravelExplore className="icon" /> Travel.
            </h1>
          </a>

          <div>
            <ul
              id="navBar"
              className={this.state.clicked ? "#navBar active" : "#navBar"}
            >
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            {this.state.clicked ? <AiFillCloseCircle /> : <TbGridDots />}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
