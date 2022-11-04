
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
import counter from "./../../assets/Images/counter.png"
import { useHistory } from 'react-router-dom';
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const data=[
    {id:1,orderTitle:"Yataq otağı 🛌",status:"İcradadır"},
    {id:2,orderTitle:"Qonaq otağı 🚿 ",status:"Təsdiqləndi"},
    {id:3,orderTitle:"Qonaq otağı 🚿 ",status:"Təsdiqləndi"},
]


function Messages(props) {
const history=useHistory()
// useEffect(()=>{

//     setTimeout(()=>{
//         history.push("qeydiyyat")
//     },5000)
// },[])
 
 return (
      
            <div className='messages-parent'>
               
                <p className='messages-header'>Mesajlar</p>
                
           
      
      
      <div className='message'>    
     
       <p className='quediyyat-message'>Qeydiyyatınızı incələyirik... </p> 
       <img src={counter} className="counter_images"  alt=""/>         
       <p className='text-message'>hr@oda.az mail ünvanına cv və portfolionu yollamağı unutmayaq...</p>    
     </div>
            </div>
            
           
            
        
    );
}


 

export default Messages;