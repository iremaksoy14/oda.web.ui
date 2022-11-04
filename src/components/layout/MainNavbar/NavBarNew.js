import React, { useState } from "react";

import Nav from 'react-bootstrap/Nav';
import resim from './../../../assets/Images/oda.png';
import DropDownMenu from '../../../views/Profile/DropDownMenu'
import * as actions from '../../../Store/_redux/AuthStore/authSlice'
import { Button } from "shards-react";
// import profilfoto from '../../assets/Images/profil/profilfoto.png'
import profilfoto from '../../../assets/Images/profil/profilfoto.png';
import useremoji from '../../../assets/Images/useremoji.svg';
import { useHistory } from "react-router-dom";
import down from '../../../assets/Images/down.svg';
import greenAddIcon from '../../../assets/Images/greenAddIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
const menuItems = [
  {
    title: "Haqqımızda",
    url: "/hakkimizda",
    cName: "nav-links"
  },
  {
    title: "Əlaqə ",
    url: "#",
    cName: "nav-links"
  },
  {
    title: "Necə işləyir?",
    url: "/Howworks",
    cName: "nav-links"
  },
  {
    title: "Karyera",
    url: "#",
    cName: "nav-links"
  },
];
const NavbarNew = () => {
  // navigation.navigate("MainScreen")
  const [dropdownHeight, setDropdownHeight] = useState('0px');
  const auth = useSelector((state) => state.auth)
  const [active, setActive] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory();
  const actionsSlice = actions.Slice
  const loginNav = () => {
    localStorage.removeItem('@authToken')
    dispatch(actionsSlice.actions.logOut())
    history.push("/login")
  }
  const handleClick = () => {
    setActive(!active);
  };
  const dropdownOperation = () => {
    if (dropdownHeight == '0px') {
      setDropdownHeight('294px');
    }
    else {
      setDropdownHeight('0px');
    }
  }
  const navigatePage = (path) => {
    dropdownOperation();
    history.push("/" + path);
  }
  const logOut =()=>{
    dropdownOperation();
    localStorage.removeItem('@authToken');
    dispatch(actionsSlice.actions.logOut());
    history.push("/");
  }
  return (
    <nav style={{ display: "flex", position: 'relative', paddingLeft: 128, marginTop: 40, paddingRight: 30 }}>
      <div className="img_text">
        <img onClick={() => history.push("/")} src={resim} alt="resim" className="image_class" /><p className="oda_text">Online Designers Azerbaijan</p>
      </div>
      <div className="menu-icon icn_new" onClick={handleClick}>
        <i style={{ color: "black" }} className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active deneme" : "nav-menu deneme"}>
        {menuItems.map((item, index) => {
          return (
            <li className="li_menu" key={index}>
              {index === 3 ? (
                <a className='navbarText' href={item.url}>
                  {item.title}
                </a>
              ) : (<a className='navbarText' href={item.url} >
                {item.title}
              </a>)}
            </li>
          );
        })}
        {
          localStorage.getItem("@authToken") ? (
            <div className="userFrame" onClick={() => dropdownOperation()}>
              <label className="userNameText">{auth.firstName + " " + auth.lastName}</label>
              <img style={{ borderRadius: "50%", marginRight: 5, width: 40, height: 40 }} src={profilfoto} alt="" />
              <img src={down}></img>
            </div>
          ) : <div style={{ width: 132 }}>
            <button size="lg" className="daxil_logintext_button" onClick={loginNav} >Daxil ol</button>
          </div>
        }
      </ul>
      <div className='userDropdown' style={{ height: dropdownHeight }}>
        <div className='dropdownHeaderFrame'>
          <img style={{width:62.73, height:42}} src={useremoji}></img>
          <label className="dropdownText" style={{fontWeight:'600'}}>Hesab</label>
        </div>
        <div className='dropdownContentFrame'>
          <label className="dropdownText" style={{ color: '#2E343C' }} onClick={()=>navigatePage("paramterler")}>Paramterlər</label>
          <label className="dropdownText" style={{ color: '#2E343C' }} onClick={()=>navigatePage("bildirisler")}>Bildirişlər</label>
          <div className="directionRowLine">
            <label className="dropdownText" style={{ color: '#5DA9EF' }} onClick={()=>navigatePage('chat')}>Mesajlaşma</label>
          </div>
          <label className="dropdownText" style={{ color: '#2E343C' }} onClick={()=>navigatePage("dashboard")}>Dashboard</label>
        </div>
        <div className='dropdownBottomFrame'>
          <label className="dropdownText" style={{ margin: 0, color: '#2E343C', marginTop: 20 }} onClick={()=>logOut()}>Çıxış</label>
        </div>
      </div>
    </nav>
  );
};
export default NavbarNew;
