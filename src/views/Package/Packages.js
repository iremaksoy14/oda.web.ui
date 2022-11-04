import React, { useState, useEffect } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import partner1img from "../../assets/Images/partner/partner1img.png"
import bed from '../../assets/Images/packages/bed.png'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./style.css"
import PropTypes from 'prop-types';
import chair from '../../assets/Images/packages/chair.png'
import house from '../../assets/Images/packages/house.png'
import knife from '../../assets/Images/packages/knife.png'
import park from '../../assets/Images/packages/park.png'
import telescope from '../../assets/Images/packages/telescope.png'
import credit from '../../assets/icons/creditcards.svg'
import okey from '../../assets/icons/okey.png'
import * as actions from '../../Store/_redux/CardStore/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { itemsData } from '../../data/fakeData/itemsData';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as productActionCrud from '../../Store/_redux/ProductStore/productActions';
import { imageSwitch } from '../../data/imagesData/imageSwitch';
import ItemList from '../../components/SharedComponents/ItemList';
import shopping from '../../assets/Images/shopping.svg';
import productImg from '../../assets/Images/productImg.svg';
import './Packages.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const action = actions.Slice;
const images = [
    { name: "bed", img: bed },
    { name: "chair", img: chair },
    { name: "house", img: house },
    { name: "knife", img: knife },
    { name: "park", img: park },
    { name: "telescope", img: telescope },
]
const selectedItems = itemsData;

const Packages = () => {
    const itemsData = useSelector((state) => state.product.products);

    const cardItems = useSelector((state) => state.card.items);
    const totalPrice = useSelector((state) => state.card.totalPrice);

    const butunEv = cardItems.filter(item => item.title === 'Bütün ev')[0];
    const selectedPackages = butunEv ? butunEv.selectedItems : [];
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const [open, setOpen] = React.useState(false);
    const [menuHeight, setMenuHeight] = useState("0px");
    const calculateHeight = () => {
        let itemCount = selectedPackages.length;
        let calculatedHeight = 0;
        calculatedHeight = itemCount * 30;
        calculatedHeight = calculatedHeight + 23;
        return calculatedHeight + "px";
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const removeItem = (item) => {
        dispatch(action.actions.removeItemFromCard(item));
    }
    const increaseItem = (item) => {
        dispatch(action.actions.increaseItem(item));
    }
    const decreaseItem = (item) => {
        dispatch(action.actions.decreaseItem(item));
    }
    const checkCardLength = () => {
        if (totalPrice == 0) {
            setOpen(false);
        }
    }
    const showDropDownItems = () => {
        if (menuHeight === "0px") {
            setMenuHeight(calculateHeight());
        }
        else {
            setMenuHeight("0px");
        }
    }
    useEffect(() => {
        checkCardLength();
    });
    return (
        <div className='package_container'>
            <label className='paketlerTopText' style={{ margin: 0, marginLeft: 68, marginTop: 87 }}>Paketlər</label>
            <hr className='textUnderLine' style={{ margin: 0, marginLeft: 68, padding: 0, width: 107 }}></hr>
            <div className='package-parent'>
                {cardItems.length > 0 ? (
                    <div onClick={handleClickOpen} className="basket_parent_class">
                        <img src={shopping}></img>
                        <div className='round_text'><p className='round_count'>{cardItems.length}</p></div>
                        <div className='verticalLine'></div>
                    </div>) : null}
            </div>
            <div className='productContainer'>
                {images.map((item) => {
                    return (<SlideButton index={images.indexOf(item)} name={item.img} />)
                })}
            </div>
            <div className='descriptionTextFrame'>
                <div className="package-parent"><p className='daxil_text'>Bütün paketlərə daxildir 😎</p></div>
                <div className="list_row">
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <ul style={{ width: "100%" }} className="list_ul">
                            <li>2D layihələndirmə</li>
                            <li>3D vizual görüntülər</li>
                            <li>Layihədəki əşyaların prayslisti</li>
                            <li>Əşyaların əldə etməsi üçün dəqiq ünvanlar</li>
                            <li> Total Price </li>
                            <li>Endirim kuponları</li>
                            <li>Moodboard təqdimi </li>
                            <li>Endirim kuponları</li>
                            <li>Memarla daimi əlaqə</li>
                            <li>Sizə özəl sehrli kitab  </li>
                        </ul>
                        <p className='not-text'> not: Otağın ölçüsünün bizim üçün önəmi yoxdur.<br />Səni kvm hesablamaqla bezdirmərik.<br />”Bütün ev” paketinə qeyd edilən qədər<br />otaqlar, mətbəx və sanitar qovşaqlar daxildir.</p>
                        <div style={{ height: 10 }}></div>
                    </div>
                    <div class="list_second">
                        <div class="icon_payment">
                            <div className='payment_container1'>
                                <div class="payment_submenu">
                                    <div style={{ marginRight: 5 }}><img alt="" src={okey} /></div>
                                    <div><p class="custom_text">100 % sənə özəl</p></div>
                                </div>

                                <div><p className='dizayn_class'>Memar sənin xəyalların <br /> əsasında dizaynı hazırlayacaq</p></div>
                            </div>
                            <div className='payment_container1'>
                                <div class="payment_submenu">
                                    <div style={{ marginRight: 5 }}><img src={credit} alt="" /></div>
                                    <div><p className="custom_text">Güvənli ödəniş</p></div>
                                </div>
                                <div><p className='dizayn_class'>3D secure ilə ödə, hətta  <br />seçdiyin paketi hissə-hissə <br /> ödəyə bilərsən.</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="list_second" >
                        <div class="icon_payment">
                            <div className='payment_container1'>
                                <div class="payment_submenu">
                                    <div><img src={okey} alt="" /></div>
                                    <div><p className="custom_text" >Bəyənməsən, dəyiş </p></div>
                                </div>

                                <div><p className='dizayn_class'>Dizaynı bəyənmədin? <br /> Memarın ilə dizayna <br /> bir dəfə dəyişiklik edə <br /> bilərsən.</p></div>
                            </div>
                            <button className='button_class'><span className='neca_class'>Necə işləyir?</span></button>
                        </div>
                    </div>
                </div>
            </div>


            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Mənim səbətim
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className="order_about">

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='outsideFrame'>
                                <div className='cardIconFrame'>
                                    <img src={shopping}></img>
                                    <div className='cardRound_text'><p className='cardRound_count'>{cardItems.length}</p></div>
                                </div>
                                <ItemList editable={true} />
                            </div>
                            <div className='itemRow' style={{ marginTop: 25 }}>
                                <div className='totalTextFrame'>
                                    <label className='total_class'>Total: </label>
                                    <label className='azn_class'>{totalPrice} AZN</label>
                                </div>
                                <button onClick={() => history.push("/orderabout")} className="acceptButton">Siparişi Tamamla</button>

                            </div>
                        </div>

                    </div>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}


const SlideButton = (props, { onClick }) => {
    const itemsData = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    const cardItems = useSelector((state) => state.card.items);
    const butunEv = cardItems.filter(item => item.title === 'Bütün ev')[0];
    const selectedPackages = butunEv ? butunEv.selectedItems : [];
    const packageNames = selectedPackages ? selectedPackages.map(item => item.title) : [];
    const itemIds = cardItems ? cardItems.map(item => item.id) : [];
    const [topValue, setTopValue] = useState("0%");
    const [visibleState, setVisibleState] = useState("hidden");
    const [dummyOpacity, setDummyOpacity] = useState(0)
    const [heightValue, setHeightValue] = useState("0%");

    const calculateHeight = (item) => {
        let itemCount = item.productChildItems.length;
        let calculatedHeight = 0;
        calculatedHeight = itemCount * 45 + itemCount * 20;
        calculatedHeight = calculatedHeight + 60;
        return calculatedHeight + "px";
    }
    const addToCard = (item) => {
        console.log(JSON.stringify(item));
        dispatch(action.actions.addToCard(item));
    }
    const showPanel = (item) => {
        if (item.productChildItems.length != 0) {
            if (topValue === "0%") {
                setTopValue("100%");
                setVisibleState("visible")
                setDummyOpacity(1)
                setHeightValue(calculateHeight(item))
            }
            else {
                bottomPartClickEvent();
            }
        }
        else {
            addToCard(item);
        }
    }

    const bottomPartClickEvent = () => {
        setTopValue('0%');
        setVisibleState('hidden');
        setDummyOpacity(0);
        setHeightValue("0%");
    }
    const addToCardSubItem = (item, subItem) => {
        dispatch(action.actions.addPackage({ item: item, subItem: subItem }));
    }
    const removeCard = (item) => {
        dispatch(action.actions.removeCard(item));
    }
    const removeFromCardSubItem = (item) => {
        dispatch(action.actions.removeFromCardSubItem(item));
    }
    const removeItem = (item) => {
        dispatch(action.actions.removeItemFromCard(item));
    }
    return (
        <div className='slide_container'>
            <div className="productCardFrame" onClick={onClick}>
                <div className='productCard'>
                    <img src={productImg} alt="partner" className='productCardImage' />
                    <div className='carInsideFrame'>
                        <div className='card_row_section'>
                            <div onClick={() => removeCard()} className='card_first_section'>
                                <p style={{ margin: 0 }}>{itemsData[props.index].title}</p>
                                <img src={props.name} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                            </div>
                            {
                                itemIds.includes(itemsData[props.index].id) && itemsData[props.index].productChildItems.length == 0 ?
                                    <button onClick={() => removeItem(itemsData[props.index])} className='card_second_section'>
                                        <RemoveIcon />
                                    </button>
                                    :
                                    <button onClick={() => showPanel(itemsData[props.index])} className='card_second_section'>
                                        <AddIcon />
                                    </button>
                            }
                        </div>
                        <div className='card_section_one'>
                            <p style={{ margin: 0 }}>{itemsData[props.index].price} ₼</p>
                        </div>
                        <div className='kdvFrame' style={{ borderStyle: 'none' }}><p className='card_third_section'>Xidmətə Ə.D.V. daxildir.{props.index}</p></div>
                        <div style={{ height: '10px' }}></div>
                    </div>
                </div>
                {
                    <>
                        <div className='dummyDiv' style={{ opacity: dummyOpacity , zIndex:-1}}></div>
                        <div className="popupPanel" id="popupPanelid" style={{ height: heightValue, visibility: visibleState, borderRadius: 30 }}>
                            {itemsData[props.index].productChildItems.map((item) => {
                                return (
                                    <div className="lineFrame">
                                        <label className='itemName'>
                                            {item.title}
                                        </label>
                                        <div className="middleItem">
                                            {item.price}{" "}₼
                                        </div>
                                        {
                                            packageNames.includes(item.title) ?
                                                <button onClick={() => removeFromCardSubItem(item)} className="addingButton">
                                                    <RemoveIcon />
                                                </button>
                                                :
                                                <button onClick={() => addToCardSubItem(itemsData[props.index], item)} className="addingButton">
                                                    <AddIcon />
                                                </button>
                                        }

                                    </div>
                                );
                            })}
                            <div onClick={() => bottomPartClickEvent()} className='bottomFramee'>
                                <div>
                                    <ArrowUpwardIcon />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}
export default Packages;