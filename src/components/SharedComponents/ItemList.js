import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../Store/_redux/CardStore/cardSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { imageSwitch } from '../../data/imagesData/imageSwitch';
import trash from '../../assets/Images/trash.svg';

export default function ItemList({editable}) {

    const dispatch = useDispatch();
    const action = actions.Slice;
    const cardItems = useSelector((state) => state.card.items);
    const [menuHeight, setMenuHeight] = useState("0px");
    const butunEv = cardItems.filter(item => item.title === 'Bütün ev')[0];
    const selectedPackages = butunEv ? butunEv.selectedItems : [];

    const calculateHeight = () => {
        let itemCount = selectedPackages.length;
        let calculatedHeight = 0;
        calculatedHeight = itemCount * 30;
        calculatedHeight = calculatedHeight + 23;
        return calculatedHeight + "px";
    }
    const showDropDownItems = () => {
        if (menuHeight === "0px") {
            setMenuHeight(calculateHeight());
        }
        else {
            setMenuHeight("0px");
        }
    }
    const removeItem = (item) => {
        dispatch(action.actions.removeItemFromCard(item));
    }
    const increaseItem = (item) => {
        dispatch(action.actions.increaseItem(item));
    }
    const decreaseItem = (item) => {
        dispatch(action.actions.decreaseItem(item));
    }
    return (
        <>
            {cardItems.map((item) => {
                return (
                    <div className='itemRow'>
                        {
                            item.title != 'Bütün ev' ?
                                <div className='itemFrame'>
                                    <label className='itemText'>{item.title}</label>
                                    <img src={imageSwitch(item)}></img>
                                </div> :
                                <div className='itemFrame' >
                                    <label className='itemText'>{item.title}</label>
                                    <img src={imageSwitch(item)}></img>
                                    <div className='expanIconFrame' onClick={() => showDropDownItems()}>
                                        {
                                            menuHeight == '0px' ?
                                                <ExpandMoreIcon /> :
                                                <ExpandLessIcon />
                                        }
                                    </div>
                                    <div className='dropMenu' style={{ height: menuHeight }}>
                                        {
                                            selectedPackages.map((item) => {
                                                return (
                                                    <label className='subItemText'>{item.title}</label>
                                                )
                                            })
                                        }
                                        <div className='dropMenuBottomFrame' onClick={() => showDropDownItems()}>
                                            <KeyboardDoubleArrowUpIcon />
                                        </div>
                                    </div>
                                </div>
                        }
                        {
                            editable ?
                                <>
                                    <div className='counterFrame'>
                                        <div onClick={() => increaseItem(item)} className="icon_round" ><AddIcon /></div>
                                        <div onClick={() => decreaseItem(item)} className="icon_round"><RemoveIcon /></div>
                                    </div>
                                    <div className='countFrame'>
                                        <p className='countText'>{item.amout}</p>
                                    </div>
                                    <div onClick={() => removeItem(item)}><img src={trash}></img></div>
                                </>:
                                null
                        }
                        <div className='priceFrame'>
                            <label className='priceText'>{item.price * item.amout} ₼</label>
                        </div>
                    </div>
                )
            })}
        </>
    );
}