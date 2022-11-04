import React from 'react'
import './OtherPayment.css'
import table from '../../assets/Images/table.png'
import OtherTable from './Table/OtherTable'
import { useSelector } from 'react-redux'
import watsapp from '../../assets/Images/socialmedia/watsapp.png'
import SideNavBar from '../layout/MainSidebar/SideNavBar';
import ItemList from '../SharedComponents/ItemList';

export default function OtherPayment() {
  const totalPrice = useSelector((state) => state.card.totalPrice);
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
          <label className='centerFrameTopText'>Köçürmə yolu ilə ödəmə</label>
          <hr className='textUnderLine'></hr>
        </div>
      </div>
      <div className='card_container' style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='sideNavBarFrame'>
          <SideNavBar />
        </div>
        <div className='cardPayment_centerFrame'>
          <div className='otherPayment_leftFrame'>
            <label className='headerBoldText'>Sifariş qeydiyyata alındı!</label>
            <label className='headerThinText'>Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd rekvizitə ödəniş etməyiniz xahiş olunur.</label>
            <div className='orderFicheFrame'>
              <OtherTable/>
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
              <div className='totalPriceTextFrame'>
                <label className='totalText'>Total: </label>
                <label className='totalPriceText'>{totalPrice} AZN</label>
              </div>
            </div>
          </div>
        </div>
        {/* <div style={{ display: 'flex', height: "auto", flex: 1, width: '100%', marginTop: 0, justifyContent: 'center' }}>
          <div className='card_first' style={{ display: 'flex', flex: 1, height: "auto", marginTop: 0, justifyContent: 'center' }}>
            <div className='insideFrameSpacer'>
              <div className="col-md-6">
                <div className="card_column_sec" style={{ marginTop: 42 }}>
                  <div><strong className='rder_text'>Sifariş qeydiyyata alındı!</strong></div>
                  <div><p className="rder_text_scnd">Sifarişin təsdiqi üçün 3 iş günü ərzində aşağıda qeyd edilən ünvana<br />yaxınlaşıb ödəniş etməyiniz xahiş olunur.</p></div>
                  <div style={{ marginTop: 20 }}><img className='image_map' src={table} alt="" /></div>
                  <div style={{ marginTop: 31 }}><div className="order_second_cash">
                    <button className="button_watsapp"> <img src={watsapp} alt="" /><span className='watsapp_module'>Whatsapp  dəstək xidməti</span></button>

                  </div></div>
                </div>
              </div>
              <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="order_first1" style={{ marginLeft: 80 }}>
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
                <div className="order_second">
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>

  )
}
