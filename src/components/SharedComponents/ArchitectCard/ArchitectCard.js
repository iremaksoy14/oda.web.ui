import React, { useState, useEffect } from 'react';
import './ArchitectCard.css'
import archItemImage from '../../../assets/Images/archImage.svg';
import userSvg from '../../../assets/Images/userSvg.svg';
import rightArrow from '../../../assets/Images/rightArrow.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YasinSlider from '../YasinSlider/YasinSlider';

export const ArchitectCard = ({ setOpen }) => {
    const name = "Sevda Aliyeva";
    const description = "Sevda hər bir müştərinin ehtiyaclarını bilməyə və həmin müştəri üçün mükəmməl fərdiləşdirilmiş povest yaratmağa çalışır."
    const buttonText = "Memarı seç";
    const handleClickOpen = () => {
        setOpen(true);
    };
    let size = {
        width: 309,
        height: 193
    }
    let images = [archItemImage, archItemImage, archItemImage, archItemImage, archItemImage, archItemImage];
    const [first, setFirst] = useState(true)

    return (
        <div className='archCardFrame'>
            <div className='archCard'>
                <div className='archImage'>
                    <div style={{ position: 'relative' }}>
                        <YasinSlider images={images} size={size} clickEvent={handleClickOpen} autoPlay={false} first={first} setFirst={setFirst} />
                    </div>
                </div>
                <div className='archMiddleFrame'>
                    <img className='archPhoto' src={userSvg} />
                    <div className='archInfoFrame'>
                        <label className='archNameText'>{name}</label>
                        <label className='archDescriptionText'>{description}</label>
                    </div>
                </div>
                <button type="button" className='archButton'  >
                    {buttonText}
                    <img src={rightArrow} />
                </button>
            </div>
        </div>
    )
}
export default ArchitectCard;