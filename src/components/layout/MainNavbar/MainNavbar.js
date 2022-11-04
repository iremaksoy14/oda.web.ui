import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { Navbar, Button } from "shards-react";
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import logo from './../../../assets/Images/header/logo.png';
import * as actions from '../../../Store/_redux/AuthStore/authSlice'
import { useHistory } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
import { Container, List } from "semantic-ui-react";
import NavC from "./Nav";
import styled from "styled-components"
import { Header } from "./Header";
import NavbarNew from "./NavBarNew";
const Navigation = styled.header
const MainNavbar = ({ layout, stickyTop }) => {



  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dispatch = useDispatch()
  const history = useHistory();
  const actionsSlice = actions.Slice
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  function loginNav() {
    localStorage.removeItem('@authToken')
    dispatch(actionsSlice.actions.logOut())
    history.push("/login")

  }

  return (

    <NavbarNew />

  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

MainNavbar.defaultProps = {
  stickyTop: true
};

export default MainNavbar;
