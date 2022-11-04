import React from 'react'
import './index.css'
import map from '../../assets/Images/map.png'
import phone from '../../assets/Images/phone.png'
import './PaymentCash.css'
import { useSelector } from 'react-redux'
import watsapp from '../../assets/Images/socialmedia/watsapp.png'
import mail from '../../assets/Images/mailBoxImage.svg';
import location from '../../assets/Images/locationImage.svg';
import SideNavBar from '../layout/MainSidebar/SideNavBar';
import ItemList from '../SharedComponents/ItemList';

export default function PaymentCash() {
  const totalPrice = useSelector((state) => state.card.totalPrice);
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
          <label className='centerFrameTopText'>Nəğd ödəmə</label>
          <hr className='textUnderLine'></hr>
        </div>
      </div>
      <div className='card_container' style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='sideNavBarFrame'>
          <SideNavBar />
        </div>
        <div className='cardPayment_centerFrame' style={{ flexDirection: 'column' }}>
          <div style={{ display: 'flex', margin: 0, padding: 0, justifyContent: 'space-between', width: '100%', flexDirection: 'row' }}>
            <div className='otherPayment_leftFrame'>
              <label className='headerBoldText'>Sifariş qeydiyyata alındı!</label>
              <label className='headerThinText'>Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd rekvizitə ödəniş etməyiniz xahiş olunur.</label>
              <div className='orderFicheFrame'>
                <img className='orderFiche' src={map} />
              </div>
              <div className='calismaSaatleriFrame'>
                <label className='blueBoldText'>
                  Ofis çalışma saatları:
                </label>
                <label className='calismaSaatleriText'>
                  Həftə içi hər gün 10:00 - 16:00
                </label>
              </div>
              <div className='orderFicheWhatsappFrame'>
                <button className='whatsappButton'>
                  <img className="watsapp_image" src={watsapp} alt="" />
                  <label className='watsappText'>Whatsapp dəstək xidməti</label>
                </button>
              </div>
            </div>
            <div className='cardPayment_rightFrame'>
              <div className='cardPayment_orderFrame'>
                <div className='orderFrameHeader'>
                  <label className='headerText'>Sifariş №0001</label>
                </div>
                <div className='orderItemsFrame'>
                  <ItemList editable={false} />
                </div>
                <div className='kdvFrame'>
                  <label className='kdvText'>Xidmətə Ə.D.V. daxildir.</label>
                </div>
                <div className='totalPriceTextFrame' style={{marginBottom:10}}>
                  <label className='totalText'>Total: </label>
                  <label className='totalPriceText'>{totalPrice} AZN</label>
                </div>
              </div>
              <div className='bottomInfoFrame'>
                <div className='bottomInfoLeftFrame'>

                </div>
              </div>
              <div className='paymentCash_bottomFrame'>
                <div className='bottomInfoLeftFrame'>
                  <div className='infoLine'>
                    <img style={{ height: 16, width: 16 }} src={phone} alt="" />
                    <p className='infoText'>+994555555555</p>
                  </div>
                  <div className='infoLine'>
                    <img style={{ height: 16, width: 16 }} src={phone} alt="" />
                    <p className='infoText'>+994555555555</p>
                  </div>
                  <div className='infoLine'>
                    <img style={{ height: 16, width: 16 }} src={mail} alt="" />
                    <p className='infoText'>info@oda.az</p>
                  </div>
                </div>
                <div className='bottomInfoRightFrame'>
                  <div className='infoLine'>
                    <img style={{ height: 16, width: 16 }} src={location} alt="" />
                    <p className='infoText'>Bakı, Azərbaycan. Nizami <br /> m/s, Caspian Plaza</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* <div className='card_first_tw' style={{ width: '100%' }}>
          <div className='insideFrameSpacer'>
            <div className="card_column_sec">
              <div><strong className='rder_text'>Sifariş qeydiyyata alındı!</strong></div>
              <div><p className="rder_text_scnd">Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd edilən ünvana<br />yaxınlaşıb ödəniş etməyiniz xahiş olunur.</p></div>
              <div><img className='image_map' src={map} alt="" /></div>
              <div><p className='blue_text'>Ofis çalışma saatları:  <span className='text_three'>  Həftə içi hər gün 10:00 - 16:00 </span></p></div>
              <div> <div className="order_second_cash">
                <button className="button_watsapp"> <img src={watsapp} alt="" /><span className='watsapp_module'>Whatsapp  dəstək xidməti</span></button>

              </div></div>
            </div>
            <div className="order_column_sec">

              <div className="order_first">
                <div className='order_div'><p className='order_text'>Sifariş №0001</p></div>
                <div>
                  {cardItems.map((item) => {
                    return (
                      <div className='card_row'>
                        <div className='card_section'>
                          <p style={{ margin: 0 }}>{item.title}</p>
                          <img src={park} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                        </div>


                        <div className='card_section_text'>
                          <p className='textFont'>{item.price * item.amout} ₼</p>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <div className='text_order'><p>Xidmətə Ə.D.V. daxildir.</p>
                </div>
                <div className='hr_class1'></div>
                <div className='total_text'><span className='total_class'>Total: </span><p className='azn_class'>{totalPrice} AZN</p></div>


              </div>
              <div className='order_last'>
                <div className='order_child1'>
                  <div className='order_child_icn'>
                    <img style={{ margin: 10 }} src={phone} alt="" />
                    <p className='text_cash'>+994555555555</p>
                  </div>
                  <div className='order_child_icn'>
                    <img style={{ margin: 10 }} src={phone} alt="" />
                    <p className='text_cash'>+994555555555</p>
                  </div>
                  <div className='order_child_icn'>
                    <img style={{ margin: 10 }} src={email} alt="" />
                    <p className='text_cash'>info@oda.az</p>
                  </div>

                </div>
                <div className='order_child2'>
                  <div className='order_child_icn'>
                    <img style={{ margin: 10 }} src={navigation} alt="" />
                    <p className='text_cash'>Bakı, Azərbaycan. Nizami <br /> m/s, Caspian Plaza</p>
                  </div>
                </div>

              </div>


            </div>
          </div>

        </div> */}
      </div>
    </>

  )
}
