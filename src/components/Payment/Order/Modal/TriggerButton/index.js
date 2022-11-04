import React from 'react';
import '../app.css'
import {useHistory} from 'react-router-dom'
const Trigger = ({ triggerText, buttonRef, showModal,select }) => {
  console.log(select)
  
  const history=useHistory()
  const checkPayment=()=>{
    if(localStorage.getItem("@authToken")){
      if(select==="Kart ilə"){
        history.push("/onlinePayment")
     }
     else if(select==="Köçürmə"){
        history.push("/otherPayment")
     }
     else if(select==="Nağd"){
        history.push("/cashPayment")

     }

    }
    else{
      showModal()
    }
  }
  // const  triggerClick=()=>{
  //  if(select==="Kart ilə"){
  //   history.push("/onlinePayment")
  //  }
  //  else if(select==="Nağd "){
  //   history.push("/cashPayment")
  //  }
  //  else if(select==="Köçürmə "){
  //   history.push("/otherPayment")
  //  }

  // }
  return (
    <div className="trigger_button_parent"> <button 
    className="btn btn-lg  center modal-button trigger_text_button"
    ref={buttonRef}
    onClick={checkPayment}
  >
    {triggerText}
  </button></div>
   
  );
};
export default Trigger;
