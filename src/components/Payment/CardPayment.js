import React from 'react'
import './CardPayment.css'
import CreditCard from './PaymentCard/CreditCard'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import home from '../../assets/Images/House With Garden.png'
import park from '../../assets/Images/National Park.png'
import resim from '../../assets/Images/payment.png'
import watsapp from '../../assets/Images/socialmedia/watsapp.png'
import Checkbox from '@mui/material/Checkbox';
import SideNavBar from '../layout/MainSidebar/SideNavBar';
import { imageSwitch } from '../../data/imagesData/imageSwitch';
import ItemList from '../SharedComponents/ItemList';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CardPayment() {
  const totalPrice = useSelector((state) => state.card.totalPrice);

  const cardItems = useSelector((state) => state.card.items);
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
          <label className='centerFrameTopText'>Kart ilə ödəmə</label>
          <hr className='textUnderLine'></hr>
        </div>
      </div>
      <div className='card_container' style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='sideNavBarFrame'>
          <SideNavBar />
        </div>
        <div style={{ display: 'flex', height: "auto", flex: 1, width: '100%', marginTop: 0, justifyContent: 'center' }}>
          <div className='cardPayment_centerFrame'>
            <div className='cardPayment_leftFrame'>
              <div><CreditCard /></div>
            </div>
            <div className='cardPayment_rightFrame'>
              <div className='cardPayment_orderFrame'>
                <div className='orderFrameHeader'>
                  <label className='headerText'>Sifariş №0001</label>
                </div>
                <div className='orderItemsFrame'>
                  <ItemList editable={false}/>
                </div>
                <div className='kdvFrame'>
                  <label className='kdvText'>Xidmətə Ə.D.V. daxildir.</label>
                </div>
                <div className='totalPriceTextFrame'>
                  <label className='totalText'>Total: </label>
                  <label className='totalPriceText'>{totalPrice} AZN</label>
                </div>
              </div>
              <div className='whatssAppButtonFrame'>
                <button className='whatsappButton'>
                  <img className="watsapp_image" src={watsapp} alt="" />
                  <label className='watsappText'>Whatsapp dəstək xidməti</label>
                </button>
              </div>
            </div>
          </div>
          {/* <div className='card_first' style={{ display: 'flex', flex: 1, height: "auto", marginTop: 0, justifyContent: 'center' }}>
            <div className='insideFrameSpacer'>
              <div className="col-md-6">
                <div><CreditCard /></div>
              </div>
              <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className="order_first1">
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
                  <button className="button_watsapp"> <img src={watsapp} alt="" /><span className='watsapp_module'>Whatsapp  dəstək xidməti</span></button>
                </div>
              </div>
            </div>

          </div>*/}
        </div>
      </div>
    </>

  )
}
