import React from 'react'
import "./index.css"
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {IoIosArrowForward} from "react-icons/io";
 const List=()=> {
  return (
    <div style={{padding:30}}>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <p style={{fontSize:24,fontWeight:"700"}}>Paketlər</p>
    <p className='more' style={{fontSize:14,fontWeight:"400",color:"#7E7D7A",cursor:"pointer"}}>Daha çox <IoIosArrowForward/></p>
    </div>
    
    <Carousel                          
     addArrowClickHandler   
     slidesPerPage={0}         
     offset={50}
     itemWidth={240}
     itemHeight={100}
     clickToChange
     centered
     plugins={['arrows']} 
     infiniteLoop={true} 
            
    >
        <SlideButton/>
        <SlideButton/>
        <SlideButton/>
        <SlideButton/>               
        <SlideButton/>               
        <SlideButton/>               
        <SlideButton/>               
        <SlideButton/>               
   </Carousel>
   </div>    
  )
}



const SlideButton = ({ onClick }) => {

    return (
        <button className="itembtn btn" onClick={onClick} style={{borderRadius:30,color:"black",width:250,fontWeight:"600"}}>
          Yataq otağı <span role="img" aria-label='grinning-face'>🛌</span>
        </button>
    );
} 

 
 


export default List;
