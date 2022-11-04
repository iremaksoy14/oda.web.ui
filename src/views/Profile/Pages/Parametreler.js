import React, { useState, useEffect } from 'react'
import 'react-phone-input-2/lib/style.css'
import './param_style.css'
import { useSelector } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import resim from '../../../assets/Images/profil/profilfoto.png'
import PersonIcon from '@mui/icons-material/Person';
import * as Yup from 'yup';
import SideNavBar from '../../../components/layout/MainSidebar/SideNavBar';

const validationSchema1 = Yup.object().shape({
  fullName: Yup.string().required('Zaruri'),
  email: Yup.string().email('səhv e-mail').required('Email ünvanı dəyişdirilə bilməz'),
  dateOfBirth: Yup.date().required(),
});
const validationSchema2 = Yup.object().shape({
  köhn_password: Yup.string().matches(/^(?=.[a-z])/).required('Hazırki şifrənizi daxil edin'),
  current_password: Yup.string().min(6).matches(/^(?=.[a-z])(?=.[0-9])(?=.{6,})/).required('Zaruri'),
  // current_password:Yup.string().matches(/^(?=.[a-z])(?=.[0-9])/).required('Required'),
  new_password: Yup.string().min(6).matches(/^(?=.[a-z])(?=.[0-9])(?=.{6,})/).required('Zaruri'),
  confirm_new_password: Yup.string().min(6).oneOf([Yup.ref('new_password')], 'iki parol uyğun gəlmir..').required('Zaruri').matches(/^(?=.[a-z])(?=.[0-9])(?=.{6,})/),
});
export default function Parametreler() {
  const [auth, setAuth] = useState({})
  const selector = useSelector((state) => state.auth.loginUser)
  const [phone, setPhone] = useState(selector.phoneNumber)
  useEffect(() => {
    setAuth(selector)
  }, [])
  const initialValues1 = {
    fullName: selector.firstName + " " + selector.lastName,
    email: selector.email,
    dateOfBirth: ""
  }
  const initialValues2 = {
    köhn_password: "",
    new_password: "",
    confirm_new_password: "",
    current_password: "",
  }
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
          <label className='centerFrameTopText'>Parametrlər</label>
          <hr className='textUnderLine' style={{margin:0,marginTop:15,padding:0}}></hr>
        </div>
      </div>
      <div className='malumat_container' style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='sideNavBarFrame'>
          <SideNavBar />
        </div>
        <div className='centerFrame' style={{ paddingBottom: 79 }}>
          <div className='centerFrameHeader'>
            <label className='headerText'>
              İstifadəçi Məlumatlarım
            </label>
          </div>
          <div className='centerFrameContent  gap-34'>
            <div className='frameParts'>
              <div className='imageFrame'>
                <div><img src={resim} style={{ borderRadius: "50%", marginTop: 31 }} alt="" /></div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><p className='text-message'>Shulammite Edheri</p></div>
                <button className='btn-arr'> <PersonIcon style={{ paddingRight: 5, fontSize: 20 }} />Şəkil dəyişdir</button>
              </div>
              <button className='bottomButtons'>
                <label className='bottomButtonText'>Yadda Saxla</label>
              </button>
            </div>
            <div className='frameParts'>
              <div className='partHeaders'>
                <label className='headerTexts'>Məlumatlarım</label>
              </div>
              <div className='partContent'>
                <input className='parametreInputs' placeholder='Ad Soyad'></input>
                <input className='parametreInputs marginT-45' placeholder='Email'></input>
                <label className='inputsInfoText'>Email ünvanı dəyişdirilə bilməz</label>
                <div className='phoneInputFrame'>
                  <PhoneInput
                    disableAreaCodes
                    placeholder="Type your phone here"
                    inputStyle={{
                      width: "100%",
                      height: 48,
                      borderRadius: 5,
                      margin: 0,
                    }}
                    country={'tr'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                    className='inputsInfoText'
                  />
                </div>
                <input className='parametreInputs marginT-16' placeholder='Doğum tarixi'></input>
              </div>
              <button className='bottomButtons'>
                <label className='bottomButtonText'>Yadda Saxla</label>
              </button>
            </div>
            <div className='frameParts'>
              <div className='partHeaders'>
                <label className='headerTexts'>Şifrə yeniləmə</label>
              </div>
              <div className='partContent'>
                <input className='parametreInputs' placeholder='Köhne sifre'></input>
                <label className='inputsInfoText'>Hazırki şifrənizi daxil edin</label>
                <input className='parametreInputs marginT-12' placeholder='Yeni sifre'></input>
                <label className='inputsInfoText'>Şifrəniz 7-15 simvol arasında olmalıdır. İçərisində hərflər və rəqəmlər olmalıdır.</label>
                <input className='parametreInputs marginT-12' placeholder='Yen sifre tekrar'></input>
                <input className='parametreInputs marginT-16' placeholder='Şifre'></input>
              </div>
              <button className='bottomButtons'>
                <label className='bottomButtonText'>Şifrəni yenilə</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
