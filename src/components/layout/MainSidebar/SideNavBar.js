import React from "react";
import shop from "../../../assets/Images/sidebar/shop.png";
import instagram from "../../../assets/Images/sidebar/instagram.png";
import Vector from "../../../assets/Images/sidebar/Vector.png";
import whatsapp from "../../../assets/Images/sidebar/whatsapp.png";
import youtube from "../../../assets/Images/sidebar/youtube.png";
import book from "../../../assets/Images/sidebar/book.png";
import "./style.css"
import { useHistory } from "react-router-dom";
function SideNavBar() {
    const history = useHistory();
    const navigatePackages =()=>{
        history.push('/packages');
    }
 
    return (
       <>
       <div className="sideNav">        
           <img src={shop} alt="shop" onClick={()=>navigatePackages()}/> 
           <img src={Vector} alt="shop"/> 
           <img src={book} alt="shop"/> 
           <img src={instagram} alt="shop" className="iconSet"/> 
           <img src={youtube} alt="shop" className="iconSet"/> 
           <img src={whatsapp} alt="shop"/> 
       </div>
       </>
  );
}


export default SideNavBar;
