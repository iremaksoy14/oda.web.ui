import React from 'react'
import cup from '../../../assets/Images/footer-packages/cup.png'
import diagram from '../../../assets/Images/footer-packages/diagram.png'
import lock from '../../../assets/Images/footer-packages/lock.png'

import './style.css'
export default function Footer() {
    return (
        <div className="footer_container">
            <div className='footer_row'>
                <div><img src={lock} alt="" /></div>
                <div className='footer_column'>
                    <label className='footerBoldText' style={{ margin: 0 }}>Məxfilik və güvənlik</label>
                    <label className='footerThinText'>Ödəmələri 3D secure<br />ilə güvənli şəkildə ödəyin.</label>
                </div>
            </div>
            <div className='footer_row'>
                <div><img src={diagram} alt="" /></div>
                <div className='footer_column'>
                    <label className='footerBoldText' style={{ margin: 0 }}>Reytinqli memarlar</label>
                    <label className='footerThinText'>Memarınızı özünüz seçərək iş<br/>keyfiyyətinə tam əmin olun.</label>
                </div>
            </div>
            <div className='footer_row'>
                <div><img src={cup} alt="" /></div>
                <div className='footer_column'>
                    <label className='footerBoldText' style={{ margin: 0 }}>Dizaynınızın jurnalı</label>
                    <label className='footerThinText'>Memarın sizə özəl cızdığı bütün<br/>sənədləri<br/>qapınıza təslim edirik.</label>
                </div>
            </div>
        </div>
    )
}