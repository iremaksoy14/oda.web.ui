import React from 'react';
import './RedirectArchitech.css'
import mimarYonlendirme from '../../assets/Images/mimarYonlendirme.svg';
export const RedirectArchitech = () => {
    const pageText = "Sifarişiniz təsdiq edildi! Memarlara yönləndirilirsiniz...";
    return (
        <>
            <img className='yonlendirmeSvg' src={mimarYonlendirme} />
            <div className='yonlendirmeLabelFrame'>
                <label className='yonlendirmeLabel'>{pageText}</label>
            </div>
        </>
    )
}
export default RedirectArchitech;