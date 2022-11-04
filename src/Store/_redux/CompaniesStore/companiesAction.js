import * as requestFromServer from "./companiesCrud";
import {Slice, callTypes} from "./companiesSlice";

const {actions} = Slice;

export const getCompanyCrud = (companyid) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .getCompanies(companyid)    
    .then(response => {
      if(response.data.success){
        dispatch(actions.companyGetList(response.data));
      }
        return response.data.message
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const getCompanyDetailCrud = (id) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getCompaniesDetail(id)    
    .then(response => {
      if(response.data.success){
        dispatch(actions.companyForEdit(response.data.data.companies));
      }
     
    
      return response.data.message
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const addCompanyCrud = (data,setAlertField) => dispatch => {  

   dispatch(actions.startCall({ callType: callTypes.action }));
   
   return requestFromServer    
    .addCompanies(data)  
    .then(response => { 
    
      if(response.data.success){
      
        // setAlertField({
        //   title: "Success",
        //   text: response.data.message,
        //   show: true,
        //   color: "green"
        // })
        dispatch(actions.companyAdd(response.data.data));
         
      }
      else{
        // setAlertField({
        //   title: "Fail",
        //   text: response.data.message,
        //   show: true,
        //   color: "blue"
        // })
        console.log("error")

      }
      
      return response.data
    })
   
  };
export const deleteCompanyCrud = (data,setAlertField) => dispatch => {
  
   dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .deleteCompanies(data)    
    .then(response => {
     //State güncelleme 
     if(response.data.success)
     {
      setAlertField({
        title: "Success",
        text: response.data.message,
        show: true,
        color: "green"
      })
       dispatch(actions.companyDelete(data));
     }  
     else{
      setAlertField({
        title: "Fail",
        text: response.data.message,
        show: true,
        color: "blue"
      })
     }      
    
       return response.data.message 
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return ResultShowModal(false,error)
    });
  
};
export const updateCompanyCrud = (data,setAlertField) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .updateCompanies(data)    
    .then(response => {
      if(response.data.success){
        setAlertField({
          title: "Success",
          text: response.data.message,
          show: true,
          color: "green"
        })
        dispatch(actions.companyUpdate(response.data.data));
      }
      else{
        setAlertField({
          title: "Fail",
          text: response.data.message,
          show: true,
          color: "blue"
        })
      }
    return response.data.message
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



 