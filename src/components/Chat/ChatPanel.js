
import React, { useRef, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import "./style.css"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Picker from 'emoji-picker-react';
import { useEffect } from 'react';
import { uniqueId } from 'lodash';
import chatImg from "../../assets/Images/Chat/chat.png"
import { Badge } from 'shards-react';
import { HubConnection } from './HubClient';
import SideNavBar from '../layout/MainSidebar/SideNavBar';
import { imageSwitch } from '../../data/imagesData/imageSwitch';
import circleArrow from '../../assets/Images/circleArrow.svg';
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const data = [
    { id: 1, title: "Yataq otağı", status: "İcradadır" },
    { id: 2, title: "Qonaq otağı", status: "Təsdiqləndi" },
    { id: 3, title: "Qonaq otağı", status: "Təsdiqləndi" },
]


function ChatPanel(props) {

    const websocket = HubConnection()
    const msgRef = useRef(null);
    const [arrowIndex, setArrowIndex] = useState(0)
    const [chat, setChat] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [emoji, OpenEmoji] = useState(false);


    const onEmojiClick = (event, emojiObject) => {
        setInputValue(state => state + emojiObject.emoji)
    };

    const handleClickArrow = (event) => {
        setArrowIndex(parseInt(event.currentTarget.id))
    }

    const getOrder = (id) => {
        var order = data.find(f => f.id === id)
        return order.orderTitle
    }

    const handleChat = (msg) => {
        setChat(state => [...state, msg])
        if (msgRef.current !== null)
            msgRef.current.scrollTo({ top: msgRef.current.offsetHeight + (uniqueId() * 100), behavior: 'smooth', });
    }

    const sendMessage = (msg) => {
        eventEmitter.emit("chat", {
            client: false,
            text: inputValue,
            id: uniqueId(),
            orderId: 1
        })
        setInputValue('')
        OpenEmoji(false)

    }

    const testClientMsg = () => {
        setTimeout(() => {
            eventEmitter.emit("chat", {
                client: true,
                text: "Müşteri deneme mesajı.." + uniqueId(),
                id: uniqueId(),
                orderId: 1
            })

            testClientMsg()
        }, 5000);

    }


    const setOpenEmoji = () => {
        OpenEmoji(!emoji)
    }
    useEffect(() => {
        eventEmitter.addListener("chat", msg => handleChat(msg))
        testClientMsg()
        return () => {
            eventEmitter.removeAllListeners()
        }
    }, [])


    return (
        <>
            <div className='notification_text' style={{ width: '100%', margin: 'auto', paddingRight: 30, paddingLeft: 128, borderStyle: 'none' }}>
                <div className='centerFrame' style={{ width: 'auto', marginTop: 66, borderStyle: 'none', overflow: 'visible' }}>
                    <label className='centerFrameTopText'>Mesajlar</label>
                    <hr className='textUnderLine' style={{ margin: 0, marginTop: 15, padding: 0 }}></hr>
                </div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex', paddingRight: 30, alignItems: 'center', marginTop: 66 }}>
                <div className='sideNavBarFrame'>
                    <SideNavBar />
                </div>
                <div className='centerFrame' style={{ flexDirection: 'row', borderStyle: 'none', justifyContent: 'space-between' }}>
                    <div className='order-status'>
                        <p className='title-msg'>Sifarişlərin statusu</p>
                        <ListGroup as="div">
                            {data.map(item =>
                                <>
                                    <ListGroup.Item as="li"
                                        key={item.id}
                                        onClick={handleClickArrow}
                                        id={item.id}
                                        className="d-flex align-items-start a-items">
                                        <span className='chatProductItem'>
                                            <label>{item.title}</label>
                                            <img src={imageSwitch(item)} />
                                        </span>
                                        <span className='statusChatText' style={{ marginLeft: 13, width: 100 }}>{item.status}</span>
                                        {item.id !== arrowIndex ? <img className='arrowCircleIcon' src={circleArrow} /> :
                                            <img className='arrowCircleIcon' style={{ borderRadius: '50%', backgroundColor: '#F3F360' }} src={circleArrow} />}
                                        
                                    </ListGroup.Item>
                                    <hr className='line-gray'></hr>
                                </>
                            )}

                        </ListGroup>
                    </div>
                    {arrowIndex > 0 ?
                        <div>
                            <div className='chat-panel' ref={msgRef}>
                                <div className='stickyPanel'>
                                    <div className='panelTop'>
                                        <div className='mimar'>
                                            <p className='mimar-state'>
                                                <AccountCircleRoundedIcon />
                                            </p>
                                            <div className='mimar-text'>
                                                <p>Memar, Ceyhun Ataxanov</p>
                                                <p>Online </p>
                                            </div>
                                        </div>
                                        <hr className='line' style={{ marignBottom: 10 }} />
                                    </div>
                                </div>
                                <div className='chat-content' >
                                    {chat.map(item =>
                                        <div className={item.client ? "chat-left-text" : "chat-right-text"} >
                                            <p>{getOrder(item.orderId)}{item.text}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='send-panel'>
                                <AttachFileRoundedIcon style={{ rotate: "220deg" }} />
                                <input
                                    value={inputValue}
                                    onChange={e => setInputValue(e.currentTarget.value)}
                                    onKeyDown={k => k.key === 'Enter' ? sendMessage() : null}
                                    className='form-control'
                                    placeholder='mesaj yaz...'></input>
                                <SendRoundedIcon onClick={sendMessage} />
                                <p onClick={setOpenEmoji} role="img" aria-label='img' style={{ cursor: "pointer" }}>🙂</p>
                            </div>
                            {emoji ? <Picker onEmojiClick={onEmojiClick} /> : null}
                        </div> :
                        <div className='chat-panel chat-info-panel resize-info-panel '>
                            <img src={chatImg} alt="chat" />
                            <p className='chatinfo'>Mesajlara getmək üçün sifarişlərdən birini seçin.</p>
                        </div>}
                </div>

            </div>
        </>

    );
}




export default ChatPanel;