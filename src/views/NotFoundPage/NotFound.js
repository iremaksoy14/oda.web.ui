import React from 'react'
import './style.css'
import notfound from '../../assets/Images/notfound-error.png'
import error from '../../assets/Images/error-404.png'
import { useHistory } from "react-router-dom";
export default function NotFound() {
  const history = useHistory()
  return (
    <div className='error-container'>
      <div className='image-error'>
        <img className='notfound_image' src={notfound} alt="" />
      </div>
      <div className='text-error'>
        <div><p className='error-message'>Pis olma...</p></div>
        <div><button onClick={() => history.push("/")} className='error-button'>Əsas səhifəyə geri dön</button></div>
        <div><p className='text-message'>Bağışla, bu səhifə hələ hazır deyil. Məsləhətimiz əsasə səhifəyə dönməkdir.</p></div>
        <div>
          <img src={error} className="error_image" alt="" />
        </div>
      </div>
    </div>
  )
}
