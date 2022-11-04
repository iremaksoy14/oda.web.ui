import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './SliderImage.css';
import home from '../../../assets/Images/home.jpg';
import YasinSlider from '../YasinSlider/YasinSlider';
export const SliderImage = ({ size ,setOpen}) => {
    let images= [home,home,home,home,home,home];

    const [first,setFirst] = useState(true)
    return (
        <div className='sliderImageFrame'>
            <YasinSlider images={images} size={size} clickOpen={setOpen} autoPlay={true} first={first} setFirst={setFirst}/>
        </div>
    )
}
export default SliderImage;