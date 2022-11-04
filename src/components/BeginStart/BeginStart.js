import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import benginstart1 from "../../assets/Images/mainpage/1number.PNG";
import benginstart2 from "../../assets/Images/mainpage/2number.PNG";
import benginstart3 from "../../assets/Images/mainpage/3number.PNG";
import benginstart4 from "../../assets/Images/mainpage/4number.PNG";
import lampSvg from "../../assets/Images/lampSvg.svg";
import mimarIcon from "../../assets/Images/mimarIcon.svg";
import dizaynIcon from "../../assets/Images/dizaynIcon.svg";
import lastIcon from "../../assets/Images/lastIcon.svg";
import "./style.css"




function BeginStart() {


   return (

      <div style={{width:'100%',paddingLeft: 114, marginTop: 90 }}>
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <p style={{ fontSize: 24, fontWeight: "700" }}>Necə istifadə edilir <span role="img" aria-label='grinning-face'>🤔</span></p>
         </div>
         <div className='istifadeFrame'>
            <div className='istifadeInsideBox bl-solid'>
               <img className='boxImages' style={{marginRight:58}} src={dizaynIcon} alt='' />
               <label className='istifadeText' style={{marginRight:58}}>Dizayn paketini seç.</label>
               {/* <label className='istifadeText'>Dizayn paketini seç.</label> */}
            </div>
            <div className='istifadeInsideBox bl-solid flex-1'>
               <img className='boxImages' src={mimarIcon} alt='' />
               {/* <label className='istifadeText' style={{marginRight:83,marginLeft:92}}>2. Memarını seç.</label> */}
               <label className='istifadeText'>2. Memarını seç.</label>
            </div>
            <div className='istifadeInsideBox bl-solid flex-1'>
               <img className='boxImages' src={lampSvg} alt='' />
               {/* <label className='istifadeText' style={{marginRight:41,marginLeft:42}}>3. Sənə özəl dizayn hazırlansın.</label> */}
               <label className='istifadeText'>3. Sənə özəl dizayn hazırlansın.</label>
            </div>
            <div className='istifadeInsideBox flex-1'>
               <img className='boxImages' src={lastIcon} alt='' />
               {/* <label className='istifadeText' style={{marginLeft:78}}>4. Alış-verişə başla!</label> */}
               <label className='istifadeText'>4. Alış-verişə başla!</label>
            </div>
         </div>
         {/* <div className="row">
            <div className="col-md-3 list">
               <img style={{ width: 80, height: 80 }} src={benginstart1} alt='' className='img1' />

            </div>
            <div className="col-md-3 list">
               <img style={{ width: 80, height: 80 }} src={benginstart2} alt='' className='img2' />

            </div>
            <div className="col-md-3 list">
               <img style={{ width: 85, height: 80 }} src={benginstart3} alt='' className='img3' />

            </div>
            <div style={{ display: "flex", justifyContent: "center" }} className="col-md-3 list">
               <img style={{ width: 80, height: 80 }} src={benginstart4} alt='' className='img' />

            </div>
         </div>

         <div className="row list-text" style={{ padding: 30 }}>
            <div className="col-md-3">

               <p>1.Dizayn paketini seç.</p>
            </div>
            <div className="col-md-3 ">

               <p>2. Memarını seç.</p>
            </div>
            <div className="col-md-3 ">

               <p>3. Sənə özəl dizayn hazırlansın.</p>
            </div>
            <div className="col-md-3 ">

               <p>4. Alış-verişə başla!</p>
            </div>
         </div> */}

      </div>

   );
}







export default BeginStart;
