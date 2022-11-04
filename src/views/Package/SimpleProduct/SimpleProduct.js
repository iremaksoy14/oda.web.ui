import React, { useState } from 'react'
import img from '../../../assets/Images/home.png'
import './index.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import round from '../../../assets/Images/round.png'
import { StylesContext } from '@material-ui/styles';

export default function SimpleProduct() {
  const [isHover, setIsHover] = useState(false);
  const handleMouseLeave = () => {
    setIsHover(true);

  };


  const style =
  {
    height: 10,
    marginRight: 10,
    border: "2px solid #fff",
    width: 10,
    backgroundColor: isHover ? "#fff" : "#01577D",
    borderColor: "white",
    borderRadius: "50%",
    display: "inline-block",
  }
  return (
    <div style={{ display: "flex",flexDirection:'column' }}>
      <div class="package-parent" style={{ marginLeft: 168, marginTop: 100 }}><p className="numune_class">Layihələrdən nümunələr</p></div>
      <Carousel infiniteLoop={true}>
        <CaruselSlider text="Qonaq otağı layihəsi" />
        <CaruselSlider text="Yataq otağı layihəsi" />
        <CaruselSlider text="Mətbəx layihəsi" />
      </Carousel>
    </div>
  );
}
function CaruselSlider() {
  return (
    <div className='list_container_view'>
      <div className='list_first_container'>
        <div className='list_section'>
          <label className='section_text'>Qonaq otağı layihəsi</label>
          <img className='section_image' src={img} alt="" />
        </div>
        <div className='list_section'>
          <label className='section_text'>Yataq otağı layihəsi</label>
          <img className='section_image' src={img} alt="" />
        </div>
        <div className='list_section'>
          <label className='section_text'>Mətbəx layihəsi </label>
          <img className='section_image' src={img} alt="" />
        </div>
      </div>
    </div>

  )
}