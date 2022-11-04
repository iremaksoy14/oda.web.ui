import React from "react";
import { isUndefined } from "lodash";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "../../routes";

 

function Guard (props) {
const loginUserPermission=useSelector(state=>state.auth.loginUser)
const userPermission=loginUserPermission ===null ? "anyallow":loginUserPermission.userTypes  
const history=  useHistory()  
const urlPermission=isUndefined(props.permit)

const handleGuard=()=>{    
 
    if(urlPermission)
        return history.push("/")

    var authhorized=false;

    var requiredPermissions=props.permit.split(','); 
    
      requiredPermissions.forEach(requiredPermit => {
        if(userPermission===requiredPermit)
          authhorized=true;
      });
    
 
      if(authhorized)
      {
        return props.children
      } 
      else
      {
        if(props.url!==null && !isUndefined(props.url))
            return history.push("/")
        return null
      }
  
}

    return(<>    
    { handleGuard()}    
    </>) 

}

export default Guard
