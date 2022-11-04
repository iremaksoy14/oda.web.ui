import React, { useState, useEffect } from 'react';
import './YasinSlider.css';
export const YasinSlider = ({ images, size, autoPlay, first, setFirst ,clickEvent}) => {
    const [leftNum, setLeftNum] = useState(0);
    const [colors, setColors] = useState([]);
    const activeColor = 'rgba(0,0,0,0.4)';
    const passiveColor = 'white';
    for (let i = 0; i < images.length; i++) {
        if (i == 0) {
            colors.push(activeColor);
        }
        else {
            colors.push(passiveColor);
        }
    }
    
    const getDots = () => {
        return (
            <div className='ysdotsFrame'>
                {
                    images.map((item, index) => {
                        return (<button
                            className='ysDots'
                            style={{ backgroundColor: colors[index] }}
                            onClick={() => dotClick(index)}></button>)
                    })
                }
            </div>
        )
    }
    const getImageDiv = () => {
        return (
            <div className='ysImageDiv' style={{ left: -leftNum }}>
                {
                    images.map((item) => {
                        return (
                            <img className='ysImages' onClick={clickEvent} style={{ heigth: size.height, width: size.width }} src={item} />
                        )
                    })
                }
            </div>
        )
    }

    const changeLeft = () => {
        setTimeout(() => {
            let index = colors.indexOf(activeColor);
            if (index != images.length - 1) {
                index = index + 1;
                dotClick(index);

            }
            else {
                index = 0;
                dotClick(index);

            }
            changeLeft();
        }, 5000);
    }

    const setAllDefault = () => {
        let newColors = colors;
        newColors.map((item, index) => {
            newColors[index] = passiveColor;
        })
        setColors(newColors);
    }
    const dotClick = (indx) => {
        setAllDefault();
        let newColors = colors;
        newColors[indx] = activeColor;
        let lft = (indx * (size.width));
        setLeftNum(lft);
        setColors(newColors);
    }

    useEffect(() => {
        if (first) {
            if (autoPlay) {
                changeLeft();
            }
            setFirst(false);
        }
    })

    return (
        <>
            <div className='ysSliderContainer' style={{ height: size.height, width: size.width }}>
                {getImageDiv()}
            </div>
            {getDots()}
        </>

    )
}
export default YasinSlider;