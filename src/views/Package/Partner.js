import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import partner1 from  "../../assets/Images/partner/partner1.png"
import partner1img from  "../../assets/Images/partner/partner1img.png"
import bed from '../../assets/Images/packages/bed.png'
import "./style.css"
import chair from '../../assets/Images/packages/chair.png'
import house from '../../assets/Images/packages/house.png'
import knife from '../../assets/Images/packages/knife.png'
import park from '../../assets/Images/packages/park.png'
import telescope from '../../assets/Images/packages/telescope.png'
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';



  


const images=[
    { name:"bed",img:bed },

    { name:"chair",img:chair },
    { name:"house",img:house },
    { name:"knife",img:knife },
    { name:"park",img:park },
    { name:"telescope",img:telescope },




    
]

function Partner() {
    

    return (
       
        <div  className='partner list_container' style={{padding:30}}>      
        
                {images.map((item)=>{
                    return(<SlideButton name={item.img} />)
                })}
                    
 </div>      
    
  );
}


const SlideButton = (props,{ onClick }) => {

    return (
        <div className='slide_container'>
       
        <div className="partnerbtn card" onClick={onClick} style={{borderRadius:30,color:"black",width:250,fontWeight:"600"}}>   
          <div className='card-body'>
          <img src={partner1img} alt="partner" className='partner-img'/>     
         <div className='card_list_section'>
            <div className='card_row_section'>
            <div className='card_first_section'>
                <p  style={{margin:0}}>Yataq otağı</p>
                
                  
            <img src={props.name} style={{height:28,width:30,marginLeft:11}} alt=""/>
                        
                
        
            </div>
          
            </div>
            
            <div className='card_second_section'><p style={{margin:0}}>250 ₼</p></div>
            <div><p className='card_third_section'>Xidmətə Ə.D.V. daxildir.</p></div>

         </div>
          </div>
        </div>
        </div>
        
    );
} 

 
 


export default Partner;