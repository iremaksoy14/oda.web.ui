import * as requestFromServer from "./UserCrud";
import {userSlice, callTypes} from "./UserSlice";

const {actions} = userSlice;

export const getUserCrud = (userid,token) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getUsers(userid,token)    
    .then(response => {
     //State güncelleme          
      dispatch(actions.userGetList(response.data));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const getUserDetailCrud = (id,token) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .getUsersDetail(id,token)    
    .then(response => {
     //State güncelleme  
      dispatch(actions.userForEdit(response.data.data.users));
      return true
    })
    .catch(error => {      
     //Hata gönderme      
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return false
    });
  
};
export const addUsersCrud = (data,token) => dispatch => {  
   dispatch(actions.startCall({ callType: callTypes.action }));
   return requestFromServer    
    .addUsers(data,token)  
    .then(response => { 
      dispatch(actions.userAdd(response.data.data));
      return result
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.action }));
      return   false
      
    });
  };
export const deleteUsersCrud = (data,token) => dispatch => {
  
   dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .deleteUsers(data,token)    
    .then(response => {
     //State güncelleme 
        
     dispatch(actions.userDelete(data));
    //  const result= response.data.success ? 
    //  ResultShowModal(true,response.data.message,setAlertField) :   
    //  ResultShowModal(false,response.data.message,setAlertField)      
     return result 
    })
    .catch(error => {      
     //Hata gönderme    
      dispatch(actions.catchError({ error, callType: callTypes.list }));
      return ResultShowModal(false,error)
    });
  
};
export const updateUserCrud = (data,token) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer

     //Api işlemleri için
    .updateUsers(data,token)    
    .then(response => {
     //State güncelleme 
     
     dispatch(actions.userUpdate(response.data.data));
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



 