import React from "react";

import "./index.css"
import SimpleProduct from './SimpleProduct/SimpleProduct'
import Questions from "./Question/Questions";
import oda from "../../assets/icons/oda.png"
import star from "../../assets/Images/packages/star.png"
import Packages from './Packages'
import Footer from './Footer/Footer'
import SideNavBar from "../../components/layout/MainSidebar/SideNavBar";
import Sparkles from '../../assets/Images/Sparkles.svg'
function MainPage2() {


  return (
    <>
      <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', width: 128, height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 160 }}>
              <SideNavBar />
            </div>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <Packages />
            </div>
          </div>


          <div className="main_class_container" >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", position: 'relative' }}>
              <div className="f-content">
                <p className="kitab_class">Sehrli kitab</p>
                <hr style={{ bottom: -16, position: 'absolute', right: 6, opacity: 1, backgroundColor: '#F3F360', width: 107.58, height: 3, borderRadius: 12 }}></hr>
              </div>
              <img style={{ marginLeft: 18 }} src={Sparkles} alt="star" width={32} height={32} />
            </div>

          </div>
          <div className="main_class">
            <img className="image_main_class" src={oda} alt="" />
            <div className="main_text" style={{marginLeft:47}}>
              <label className="main_submenu">Daha rahat incələyin deyə hazır olan layihəni kitab şəklində ünvanınıza <br /> çatdırırıq. Kitab sizin  bələdçiniz olacaq və içində sadəcə sizə aid sehirlər var.<br />
                Kitabın özəlliyi sadəcə sizə aid olmasıdır və əmin ola bilərsiniz ki, bu kitab sizə<br />“Ən gözəl ev, mənim evimdir.” cümləsini qurmağa rahat, sərfəli və zövqlü<br />şəkildə imkan yaradacaq.</label>
              <button className="submenu_button">Paket seç</button>
            </div>
          </div>
          
          <SimpleProduct />
          <div className='questionsOutsideFrame'>
            <Questions />
          </div>

          <Footer />
        </div>

      </div>
    </>

  );
}


export default MainPage2;