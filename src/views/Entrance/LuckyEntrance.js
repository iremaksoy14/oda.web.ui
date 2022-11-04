
import React, { useRef, useState} from 'react';
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
import { Badge } from 'shards-react';
import leftImg from "./../../assets/Images/icon-enter.png"
import { useHistory } from 'react-router-dom';

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();




function LuckyEntrance(props) {
  const history=useHistory()

useEffect(()=>{
  setTimeout(()=>{
    history.push("/login")
  },5000)
},[])
 
 return (
      
            <div className='messages_parent_lucky'>
                
                <p className='messages-header'>Qeydiyyat</p>
                
           <div className='message'> 
      <img src={leftImg} className="icon_images"  alt=""/>      
       <p className='qeydiat-message'>Qeydiyyatınız uğurla tamamlandı!</p>      
       <p className='text-message'>Səhifənizə yönləndirilir...</p>    
     </div>
            </div>
            
           
            
        
    );
}


 

export default LuckyEntrance;