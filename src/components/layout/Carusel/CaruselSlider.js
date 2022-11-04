import React, { Component, useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../../assets/Images/slide1.png";
import { Button } from 'shards-react';
import "./style.css"
import SideNavBar from '../MainSidebar/SideNavBar';
export default function CaruselSlider() {


  return (
    <>
      <div style={{flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='leftSideBarFrame' style={{ display: 'flex', width: 128, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <SideNavBar />
        </div>
        <div className='courselFrame' style={{paddingTop:87, display: 'flex', flex: 1, flexDirection: 'column', margin: 'auto' }}>
          <Carousel autoPlay={true} infiniteLoop={true}>
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
          </Carousel>
        </div>
      </div>

    </>

  );
}


const SlideItem = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [visibleState,setVisibleState] = useState(true)
  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1282 && window.innerWidth <= 1600) {
        setScreenWidth(window.innerWidth);
      }
      if(window.innerWidth >=1218){
        setVisibleState(true)
      }
      else{
        setVisibleState(false)
      }
    });
  })

  return (
    <div className='sldierItemFrame'>
      <div className='leftSliderFrame'>
        <div style={{ width: 659 }}>
          <label className='titleText'> Ən gözəl ev, sənin evindir! </label>
        </div>
        <div>
          <label className='secondaryText' style={{ textAlign: "left"}}> İstədiyin memarla, istədiyin üslubda evinin
            interyer<br/>dizaynı hazır olsun,  vaxt itirmədən endirim<br/>kuponları ilə alış-verişə başla!</label>
        </div>
        <div className='sliderButtonsFrame'>
          <button className='sliderButtons blueBackground'>Ətraflı məlumat</button>
          <button className='sliderButtons blueBorder'>Əlaqə</button>
        </div>
      </div>
      <img className='sliderImage' style={{ visibility: visibleState ? 'visible':'hidden'}} src={slide1} alt="carusel" />
      <div className='dummyRightDiv'></div>
    </div>
  )

}

