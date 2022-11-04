import React, { useEffect } from "react";
import BeginStart from "../components/BeginStart/BeginStart";
import CaruselSlider from "../components/layout/Carusel/CaruselSlider";
import Package from "../components/Packages/Package";
import Partner from "../components/Partner/Partner";
import "../index.css"
import './EmptyPage.css'
import about from "../assets/Images/about/about.png"
import { Button } from "shards-react";
import Ourjobs from "../components/Ourjobs/Ourjobs";
import { useDispatch } from "react-redux";
import * as productActionCrud from '../Store/_redux/ProductStore/productActions';
import Footer from "./Package/Footer/Footer";
function EmptyPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActionCrud.getProducts());
  });
  const buyukturText = ">"
  return (
    <>
      <div style={{ padding: "0%", width: "100%" }}>
        <CaruselSlider />
        <Package />
        <BeginStart />
        <div style={{ backgroundColor: "#01577D", height: 72 }}>
          <p className="partnet" style={{ marginLeft: 20 }}>Bizim partnyorlar <span role="img" aria-label='grinning-face'>😍</span></p>
        </div>
        <div style={{ marginBottom: 195 }}>
          <div style={{paddingRight:117,marginBottom:34, marginTop:45,display:'flex',width: '100%', flexDriction: 'row', justifyContent: 'flex-end',alignItems:'center' }}>
            <label className='dataCoxText'>
              Daha çox
            </label>
            <label style={{marginLeft:15}}>
              {buyukturText} 
            </label>
          </div>
          <Partner />
        </div>
        <div style={{ backgroundColor: "#01577D", widht: "100%" }}>
          <div className="row" style={{ marginTop: 100, width: "100%", padding: 0 }}>

            <div className="col-md-6 about_first_section">
              <img src={about} alt="about" className="about-img"></img>
            </div>
            <div className="col-md-6 about-text">
              <div style={{ display: "flex", flexDirection: "row", }}>
                <div style={{ flexDirection: "column", position: 'relative' }}>
                  <p style={{ margin: 0 }}>Haqqımızda</p>
                  <hr style={{ bottom: -16, position: 'absolute', right: 0, opacity: 1, backgroundColor: '#F3F360', width: 83.98, height: 3, borderRadius: 12 }}></hr>
                </div>

                {/* <p style={{ fontSize: 32, borderRadius: 12, textDecoration: "underline", textDecorationColor: "#F3F360" }}>ızda</p> */}
              </div>

              <label className="bigThinText">Azərbaycanın ilk rəqəmsal <br /> memarlıq platforması.</label>
              <div className="longTextFrame">
                <label className="hakkimizdaLongText">Təmir etmək istədiyiniz, “ən gözəl ev, mənim evimdir.” demək istədiyiniz evinizə, sizin<br />istədiyiniz üslublarla interyer dizaynı hazırlayırıq. Layihədə yerləşən bütün mebelləri<br />realda əldə edə biləcək şəkildə dizayn edərək  sizə özəl kuponlarla həmin mebelləri dəqiq<br />ünvan və endirimli qiymətlərlə təmin etmənizə yardımcı oluruq. Sizləri bütün əşyaların<br />şəffaf qiymətləri ilə tam sərbəst alış-veriş etməyinizi təmin edirik. Bütün layihələrdə<br />memarınız ilə daima ünsiyyətdə olaraq, dizayn nəzarətinə malik olursunuz.<br />
                  Nəticələnən dizaynı  kitab formatında sizin ünvanınıza çatdırırıq.</label>
              </div>

              <button className="about_button_text" style={{ marginTop: 25 }} >Daha ətraflı</button>
            </div>


          </div>
        </div>
        <Ourjobs />
        <div style={{ marginTop: 116.5 }}>
          <Footer></Footer>
        </div>
      </div>
    </>

  );
}


export default EmptyPage;
