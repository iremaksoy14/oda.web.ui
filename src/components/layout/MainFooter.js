import React from "react";
import { Container, Row } from "shards-react";
import logo from "../../assets/Images/odaMiniLogo.png"
import "./style.css"
import phoneImage from '../../assets/Images/phoneImage.svg'
import mailBoxImage from '../../assets/Images/mailBoxImage.svg'
import locationImage from '../../assets/Images/locationImage.svg'

const MainFooter = (props) => (
  <footer className="main-footer d-flex bg-white">
    <div className='footerInsideDiv' style={{ marginTop: 116,flexDirection:'column' }}>
      <div className='footerColumnsFrame'>
        <div className='footerColumns'>
          <img style={{ width: 128, height: 62 }} src={logo} alt="logo" />
          <div className="companyNameDiv" style={{ marginTop: 9 }}>
            <label className="companyText">O</label>
            <label className="companyText" style={{ fontWeight: '300' }}>online</label>
            <label className="companyText" style={{ marginLeft: 5 }}>D</label>
            <label className="companyText" style={{ fontWeight: '300' }}>esigners</label>
            <label className="companyText" style={{ marginLeft: 5 }}>A</label>
            <label className="companyText" style={{ fontWeight: '300' }}>zerbaijan</label>
          </div>
          <label className="companyText" style={{ marginTop: 15 }}>Azərbaycanın ilk rəqəmsal<br />memarlıq platforması.</label>
          <label className='footerThinText'>Bütün hüquqları qorunur. - ODA 2022</label>
        </div>
        <div className='footerColumns' style={{ marginLeft: 133 }}>
          <label className="destekFrameBoldText">Müştəriyə dəstək</label>
          <label className="destekFrameThinText" style={{ marginTop: 26 }}>Tez-tez Verilən Suallar (FAQ)</label>
          <label className="destekFrameThinText" style={{ marginTop: 18 }}>İstifadə Razılaşması</label>
          <label className="destekFrameThinText" style={{ marginTop: 18 }}>Ödəniş</label>
        </div>
        <div className='footerColumns' style={{ marginLeft: 112 }}>
          <label className="alakaText">Əlaqə</label>
          <div className="f-r" style={{ marginTop: 34 }}>
            <img src={phoneImage} />
            <label className="phoneNumbersText">+994555555555</label>
          </div>
          <div className="f-r" style={{ marginTop: 20 }}>
            <img src={phoneImage} />
            <label className="phoneNumbersText">+994555555555</label>
          </div>
          <div className="f-r" style={{ marginTop: 20 }}>
            <img src={mailBoxImage} />
            <label className="phoneNumbersText">info@oda.az</label>
          </div>
        </div>
        <div className='footerColumns' style={{ marginLeft: 69 }}>
          <div className="f-r" style={{ marginTop: 36 }}>
            <img src={locationImage} />
            <label className="footerAddressText">Bakı, Azərbaycan. Nizami<br />m/s, Caspian Plaza</label>
          </div>
        </div>
      </div>
      <div className="footerLastFrame" style={{marginTop:101,marginBottom:54}}>
        <label className="footerLastText" style={{marginLeft:390}}>Gizlilik Siyasəti</label>
        <label className="footerLastText" style={{marginLeft:40}}>Xidmət şərtləri</label>
        <label className="footerLastText" style={{marginLeft:40}}>Saytın xəritəsi</label>
        
      </div>
    </div>
  </footer>
);



export default MainFooter;
