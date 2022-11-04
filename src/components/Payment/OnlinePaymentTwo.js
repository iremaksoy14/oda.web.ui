import React from 'react'
import home from '../../assets/Images/House With Garden.png'
import park from '../../assets/Images/National Park.png'
import "./style.css"
import map from '../../assets/Images/Screenshot_12 (6) 1.png'

export default function OnlinePaymentTwo() {

    return (
        <div className='notification_container'>
            <div className='notification_text'><p className='parameter_text' >Köçürmə yolu ilə ödəmə</p></div>
            <div className='payment_container'>
                <div class="container"  >
                    <div class="row" style={{width:1000}}>
                        <div class="col-sm-6" >
                            <div className='textop'>
                                <p className='textOne'>Sifariş qeydiyyata alındı!</p>
                                <p style={{ color:'#929292' }}>Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd edilən ünvana yaxınlaşıb ödəniş etməyiniz xahiş olunur.</p>
                                <img src={map} style={{marginTop: -10 }} className='mapImage' />
                                
                                <div className='wp-containeronly'>
                                    <p className='text-wp'>Whatsapp  dəstək xidməti</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6" >
                            <div class='col-lg-6' >
                                <div className="orderBox">
                                    <div style={{ width: 385, marginLeft: 25, marginTop: 10 }}><p className='text-order'>Sifariş №0001</p></div>
                                    <div className='card_row'>
                                        <div className='card_section'>
                                            <p style={{ margin: 0 }}>Bütün ev</p>
                                            <img src={home} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                                        </div>
                                        <div className='card_section_text'>
                                            <p className='textFont'>250 ₼</p>
                                        </div>
                                    </div>
                                    <div className='card_row'>
                                        <div className='card_section'>
                                            <p style={{ margin: 0 }}>Landşaft</p>
                                            <img src={park} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                                        </div>
                                        <div className='card_section_text'>
                                            <p className='textFont'>250 ₼</p>
                                        </div>
                                    </div>
                                    <div className='card_row'>
                                        <div className='text-bottom '>
                                            <p style={{ margin: 0, marginLeft: -256 }}>Xidmətə Ə.D.V. daxildir.</p>

                                        </div>

                                    </div>
                                    <div className='text-top-bottom'>
                                        Total: 500 AZN
                                    </div>
                                </div>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}