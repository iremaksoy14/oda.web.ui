import React, { useState } from 'react'
import trash from '../../../assets/Images/trash.svg';
import './index.css'
import './Modal/app.css'
import './OrderAbout.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import * as actions from '../../../Store/_redux/CardStore/cardSlice';
import watsapp from '../../../assets/Images/socialmedia/watsapp.png'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideNavBar from '../../layout/MainSidebar/SideNavBar';
import { imageSwitch } from '../../../data/imagesData/imageSwitch';
import ItemList from '../../SharedComponents/ItemList';
import Container from '../Order/Modal/Container/index.js';
// import RegisterModal from './Modal/Container/RegisterModal.js';
export default function OrderAbout() {
  const [selected, setSelect] = useState("Kart ilə");
  const triggerText = 'Tamamla';
  const [acceptState, setAcceptState] = useState(false);
  const [options, setOptions] = useState([
    {
      checked: true,
      text: 'Kart ilə',
    },
    {
      checked: false,
      text: 'Köçürmə',
    },
    {
      checked: false,
      text: 'Nağd'
    }
  ]);
  const dispatch = useDispatch()
  const history = useHistory()
  const totalPrice = useSelector((state) => state.card.totalPrice);
  const cardItems = useSelector((state) => state.card.items);
  const action = actions.Slice;

  const removeItem = (item) => {
    dispatch(action.actions.removeItemFromCard(item));
  }
  const increaseItem = (item) => {
    dispatch(action.actions.increaseItem(item));
  }
  const decreaseItem = (item) => {
    dispatch(action.actions.decreaseItem(item));
  }
  const routePayment = () => {
    if (acceptState) {
      if (selected === "Kart ilə") {
        history.push("/onlinePayment")
      }
      else if (selected === "Köçürmə") {
        history.push("/otherPayment")
      }
      else if (selected === "Nağd") {
        history.push("/cashPayment")
      }
    }
  }
  const onSelected = (selectedItem) => {
    let optionsArr = options;
    for (let i = 0; i < optionsArr.length; i++) {
      optionsArr[i].checked = false;
    }
    let index = optionsArr.map(object => object.text).indexOf(selectedItem.text);
    optionsArr[index].checked = true;
    setSelect(selectedItem.text);
    setOptions(optionsArr);
  }
  const isLastElement = (item) => {
    if (options[options.length - 1].text == item.text) {
      return true;
    }
    else {
      return false;
    }
  }
  return (
    <>
      <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
        <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible', flexDirection: 'column' }}>
          <label className='centerFrameTopText'>Məlumatlar</label>
          <hr className='textUnderLine'></hr>
        </div>
      </div>
      <div className='card_container' style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center' }}>
        <div className='sideNavBarFrame'>
          <SideNavBar />
        </div>
        <div className='centerFrame'>
          <div className='centerFrameHeader'>
            <label className='headerText'>
              Sifariş haqqında
            </label>
          </div>
          <div className='centerFrameContent'>
            <div className='contentLeftFrame'>
              <label className='leftFrameTopText'>
                {cardItems.length} Məhsul
              </label>
              <div className='orderAboutItemsFrame' style={{ paddingRight: 16 }}>
                <ItemList editable={true} />
              </div>
              <div className='totalPriceTextFrame'>
                <label className='totalText'>Total: </label>
                <label className='totalPriceText'>{totalPrice} AZN</label>
              </div>
              <div className='notTextFrame'>
                <label className='descriptionText'>
                  Not:<br />Köçürmə və nəğd ödənişlər paket alındığı
                  gündən etibarən 3 iş günü ərzində tərəfimizə
                  ödənilməlidir. Ödənildiği anda sifarişiniz təsdiq
                  ediləcək.
                </label>
              </div>
            </div>
            <div className='contentRightFrame'>
              <div className='rigthHeaderFrame'>
                <label className='headerText'>
                  Ödəniş növü
                </label>
              </div>
              <div className="selectionFrame">
                {
                  options.map((item) => {
                    return (
                      <div className='selectionRow' style={{ borderWidth: isLastElement(item) ? 0 : 1 }} onClick={() => onSelected(item)}>
                        <input type='radio' className='selectionRadioButton' checked={item.checked} />
                        <span class="checkmark"></span>
                        <label className='selectionText'>{item.text}</label>
                      </div>
                    )
                  })
                }
              </div>
              <label className='acceptText'>Sifarişin təsdiqi</label>
              <div className='checkBoxFrame'>
                <input type='checkbox' className='accpetCheckbox' onClick={() => { setAcceptState(!acceptState) }} checked={acceptState}></input>
                <span class="checkmark"></span>
                <label className='acceptBlueText'>İstifadə razılaşması</label>
              </div>
              <label className='smallText'>Şəxsi məlumatlarınız sifarişinizi işləmək, bu veb saytdakı təcrübənizi dəstəkləmək və məxfilik<br />siyasəti səhifəmizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</label>
            </div>
          </div>
          <div className='contentFooterFrame'>
            <div className='contentLeftFrame' style={{ paddingTop: 0 }}>
              <button className='whatsappButton'>
                <img className="watsapp_image" src={watsapp} alt="" />
                <label className='watsappText'>Whatsapp dəstək xidməti</label>
              </button>
            </div>
            <div className='contentRightFrame'>
              <Container selected={selected} triggerText={triggerText} />
              {/* <RegisterModal selected={selected} triggerText={triggerText} ></RegisterModal> */}
              {/* <button className='acceptButtonOrder' onClick={() => routePayment()}>
                <label className='watsappText'>Tamamla</label>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
