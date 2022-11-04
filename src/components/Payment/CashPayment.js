import React from 'react'
import home from '../../assets/Images/House With Garden.png'
import park from '../../assets/Images/National Park.png'
import "./style.css"
import map from '../../assets/Images/Ünvan 2.png'

export default function CashPayment() {

    return (
        <div className='notification_container'>
            <div className='notification_text'><p className='parameter_text'>Nəğd ödəmə</p></div>
            <div className='payment_container'>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6" >
                            <div className='textop'>
                                <p className='textOne'>Sifariş qeydiyyata alındı!</p>
                                <p style={{ color:'#929292' }}>Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd edilən ünvana yaxınlaşıb ödəniş etməyiniz xahiş olunur.</p>
                                <img alt="" src={map} className='mapImage' />
                                <div >
                                        <div class="row">
                                            <div class="col-sm-6" >
                                                <p className='mapBottom'>Ofis çalışma saatları:</p>
                                            </div>
                                            <div class="col-sm-6" >
                                            <p className='map2Bottom'>Həftə içi hər gün 10:00 - 16:00 </p>
                                            </div>
                                        </div>
                                    </div>
                                <div className='wp-container'>
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
                                <div className="col-md-3 bottomText ">
                                    <p></p>
                                    <p style={{ color: ' #515151', fontFamily: 'Inter' }}>+994555555555 </p>
                                    <p style={{ color: ' #515151', fontFamily: 'Inter' }}>+994555555555</p>
                                    <p style={{ color: ' #515151', fontFamily: 'Inter' }}>info@oda.az</p>
                                </div>
                                <div className="col-md-3 ">
                                    <p></p>
                                    <p className="textBot">Bakı, Azərbaycan. Nizami m/s, Caspian Plaza</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}