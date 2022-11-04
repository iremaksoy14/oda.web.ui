import React, { Component } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import partner1 from "../../../src/assets/Images/partner/partner1.png"
import partner1img from "../../../src/assets/Images/partner/partner1img.png"
import "./style.css"

function Partner() {
    return (
        <div className='partner' style={{paddingLeft:113,paddingRight:52}}>
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
                <SlideButton />
                <SlideButton />
                <SlideButton />
                <SlideButton />
                <SlideButton />
                <SlideButton />
                <SlideButton />
                <SlideButton />

            </Carousel>
        </div>

    );
}


const SlideButton = ({ onClick }) => {

    return (
        <div className='partnerFrame' style={{paddingTop:50}}>
            <div className='partnerBody'>
                <img src={partner1img} alt="" className='partnerImg' />
                <img src={partner1} alt="" className='companyLogo' />
            </div>
        </div>
        // <div style={{height:250,borderStyle:'solid'}}> 
        //     <div className="partnerbtn card" onClick={onClick} style={{display:'flex',flexDirection:'column', borderRadius: 30, color: "black", width: 248,height:130, fontWeight: "600" }}>
        //         <div className='card-body'>
        //             <img src={partner1img} alt="partner" className='partnerImg'/>

        //             <img src={partner1} alt="partner" className='' />
        //         </div>
        //     </div>
        // </div>

    );
}




export default Partner;
