import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo1 from './../../../assets/Images/header/logo.png';
import  * as actions from '../../../Store/_redux/AuthStore/authSlice'
import { Navbar,Button } from "shards-react";
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import DropDownMenu from '../../../views/Profile/DropDownMenu'
import './style.css'
import styled from "styled-components";

const Navigation = styled.header`
  width: 100%;

  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 0;
  height: 140px;
  margin-bottom: 60px;
 

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  .gray {
    color: #ccc;
  }
  a {
    color: #222;
    opacity: 0.55;
    transition: all 0.6s;
    color: #222;
    font-size: 1em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      
font-family: sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */


color: #000000;
    }
    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }
    a {
      font-size: 1em;
      text-decoration: none;
      .active {
        color: #000000;
      }
    }
    a.active {
      color: #000;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 992px) {
   .list_nav{
    font-size:10px !important

   }
  }

  
  @media only screen and (max-width: 768px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 181px;
      display: block;
      padding-top: 20px;
      margin: 0px;
      height:99px
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 50px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

class NavC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  // dispatch=useDispatch()
  //  actionsSlice=actions.Slice
   loginNav ()
  {
   localStorage.removeItem('@authToken')
  //  dispatch(actionsSlice.actions.logOut())
    // history.push("/login")
  
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }
  render() {
    const { isExpanded } = this.state;

    return (
      <Navigation>
        <div className="logo">
          <Link to="/">
          <img src={logo1}/>
            <em>
              
            </em>
          </Link>
        </div>
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <ul className={`list_nav collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink activeClassName="active" to="/">
              <li>Haqqımızda</li>
            </NavLink>
            <NavLink activeClassName="active" to="/about">
              <li>Əlaqə</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>Necə işləyir?</li>
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              <li>Karyera</li>
            </NavLink>
            {
          localStorage.getItem("@authToken") ? (
            <div className="nav-item">


<DropDownMenu/>
</div>
            
          ) : <Nav.Item>
          <Button  size="lg"  style={{borderRadius:25,backgroundColor:"#01577D"}} onClick={this.loginNav} >Daxil ol</Button> 
        </Nav.Item>
        }   
          </ul>
        </nav>
      </Navigation>
    );
  }
}

export default NavC;
