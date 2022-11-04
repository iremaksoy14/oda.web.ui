import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { IoIosArrowForward } from "react-icons/io";
import bed from '../../assets/Images/packages/bed.png'
import shower from '../../assets/Images/packages/shower.png'
import knife from '../../assets/Images/packages/knife.png'
import map from '../../assets/Images/packages/park.png'
import { useHistory } from 'react-router-dom';
import "./style.css"

function Package() {

    const history = useHistory()
    return (
        <>
            <div style={{ paddingLeft: 114, paddingRight: 126 }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <p style={{ fontSize: 24, fontWeight: "700" }}>Paketlər</p>
                    <p onClick={() => history.push("/packages")} className='more' style={{ fontSize: 14, fontWeight: "400", color: "#7E7D7A", cursor: "pointer" }}>Daha çox <IoIosArrowForward /></p>
                </div>
            </div>
            <div style={{ paddingLeft: 114, paddingRight: 22 }}>
                <div className='packageItemContainer'>
                    <Carousel
                        plugins={[
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4
                                }
                            },
                        ]}
                    >

                        <SlideButton title="Yataq otağı" img={bed} />
                        <SlideButton title="Sanitar qovşaq" img={shower} />
                        <SlideButton title="Mətbəx" img={knife} />
                        <SlideButton title="Landşaft" img={map} />
                        <SlideButton title="Yataq otağı" img={bed} />
                        <SlideButton title="Sanitar qovşaq" img={shower} />
                        <SlideButton title="Mətbəx" img={knife} />
                        <SlideButton title="Landşaft" img={map} />

                    </Carousel>
                </div>
            </div>
        </>



    );
}


const SlideButton = (props, { onClick }) => {

    return (
        <>
            <div style={{ height: 55 }}>
                <button className="itembtn btn item_packages" onClick={onClick}>
                    {props.title}  <span role="img" aria-label='grinning-face'><img src={props.img} alt="" /></span>
                </button>
            </div>
        </>

    );
}





export default Package;
