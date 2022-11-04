import * as requestFromServer from "./architectCrud";
import {Slice, callTypes} from "./architectSlice";

const {actions} = Slice;

export const getArchitectCrud = (customerid) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getArchitects(customerid)    
    .then(response => {
     //State güncelleme          
      dispatch(actions.customerGetList(response.data));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const getArchitectDetailCrud = (id) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getCustomersDetail(id)    
    .then(response => {
     //State güncelleme  
      dispatch(actions.customerForEdit(response.data.data.customers));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const addArchitectCrud = (data,setAlertField) => dispatch => {  
   dispatch(actions.startCall({ callType: callTypes.action }));
   return requestFromServer    
    .addArchitect(data)  
    .then(response => { 
      
     
      if(response.data.success){
      //console.log(response.data)
        // setAlertField({
        //   title: "Success",
        //   text: response.data.message,
        //   show: true,
        //   color: "green"
        // })
        dispatch(actions.architectAdd(response.data.data));
         
      }
      else{
        // setAlertField({
        //   title: "Fail",
        //   text: response.data.message,
        //   show: true,
        //   color: "blue"
        // })
        console.log("hata")

      }
      
      return response.data
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      return   false
      
    });
  };
export const deleteCustomerCrud = (data,setAlertField) => dispatch => {
  
   dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .deleteCustomers(data)    
    .then(response => {
      if(response.data.success){
        // ResultShowModal(true,response.data.message,setAlertField)
        setAlertField({
          title: "Success",
          text: response.data.message,
          show: true,
          color: "green"
        })
        dispatch(actions.customerAdd(response.data.data));
         
      }
      else{
        setAlertField({
          title: "Fail",
          text: response.data.message,
          show: true,
          color: "blue"
        })

      }
      
    
     //State güncelleme 
        
     dispatch(actions.customerDelete(data,setAlertField));
    //  const result= response.data.success ? 
    //  ResultShowModal(true,response.data.message,setAlertField) :   
    //  ResultShowModal(false,response.data.message,setAlertField)      
     return response 
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return ResultShowModal(false,error)
    });
  
};
export const updateCustomerCrud = (data,setAlertField) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .updateCustomers(data)    
    .then(response => {
      if(response.data.success){
        // ResultShowModal(true,response.data.message,setAlertField)
        setAlertField({
          title: "Success",
          text: response.data.message,
          show: true,
          color: "green"
        })
        dispatch(actions.customerUpdate(response.data.data));
         
      }
      else{
        setAlertField({
          title: "Fail",
          text: response.data.message,
          show: true,
          color: "blue"
        })

      }
      
     //State güncelleme 
     
    
    })
    .catch(error => {      
     //Hata gönderme
    //  ResultShowModal(false,error,setAlertField)
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
  
};

 function ResultShowModal(result,message,setAlertField)
{
  if(!result)
  {      
      setAlertField({
        title: "Fail",
        text: message,
        show: true,
        color: "white"
      })
      return false
  }
  else
  {
    setAlertField({
      title: "Success",
      text: message,
      show: true,
      color: "white"
    })

    return true
  }
}



 