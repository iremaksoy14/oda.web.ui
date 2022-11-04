import React from 'react'
import './index.css'
import ring from '../../../assets/Images/ring.png'
import "./index.css"
import SideNavBar from '../../../components/layout/MainSidebar/SideNavBar'
export default function Bildirisler() {
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
          <label className='centerFrameTopText'>Bildirişlər</label>
          <hr className='textUnderLine' style={{margin:0,marginTop:15,padding:0}}></hr>
        </div>
      </div>
      <div className='card_container' style={{marginTop:47,flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div style={{ display: 'flex', width: 128, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <SideNavBar />
        </div>
        <div className='centerFrame gap-22' style={{ minHeight: 707, paddingTop: 114, paddingLeft: 40, paddingRight: 40 }}>
          <Card title="№0006 Yataq otağı paketi üçün ödəniş uğurla həyata keçirildi." />
          <Card title="Memarınızdan ismarıc var!" />
          <Card title="№0002 Sifarişiniz təslim edildi." />
          <Card title="№0001 Sifarişinizin 3 iş günü ərzində ödənilməsi xahiş olunur." />
          <Card title="№0003 Sifarişiniz ödəniş edilmədiyinə görə ləğv edildi." />
        </div>

      </div>
    </>
  )
}

export const Card = (props) => {
  return (
    <div className='card_list'>
      <div className='first_view'></div>
      <div className='icon_margin_class'><img src={ring} alt="" /></div>
      <div><label className='title_class'>{props.title}</label></div>
    </div>
  )
}
