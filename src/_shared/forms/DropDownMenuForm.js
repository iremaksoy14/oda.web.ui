import React ,{useState}from "react";
import {
  /* the components you used */
  Paper,
  Typography,
  TextField,
  Chip,
  Select,
  MenuItem
} from "@material-ui/core";
import getStoredState from "redux-persist/es/getStoredState";

/**
 * how you used the components
 */
export default function DropDownMenuForm(props) {
  const [stateBrand,setStateBrand]=useState("blacksmith")
  const [stateConnect,setStateConnect]=useState("Yes")
  const [stateReConnect,setStateReConnect]=useState("5 Min")
  const [stateMode,setStateNMode]=useState("Top up wheen needed")


const setChangeEvent=(e)=>{
//  setState(e.target.value)
  if(props.title==="Brand"){
    setStateBrand(e.target.value)
  }
  if(props.title==="Connect"){
    setStateConnect(e.target.value)
  }
  if(props.title==="Reconnect"){
    setStateReConnect(e.target.value)
  }
  if(props.title==="Mode"){
    setStateNMode(e.target.value)
  }
}

  // const setTitle=()=>{
  //   if(props.title==="Brand"){
  //     return stateBrand
  //   }
   
  //   if(props.title==="Connect"){
  //      stateConnect
  //   }
  //   if(props.title==="Reconnect"){
  //     return stateReConnect
  //   }
  //   if(props.title==="Mode"){
  //     return stateMode
  //   }
  // }
  return (
    <div>
     

{/*      
      <TextField
          label="Single Select input"
          variant="outlined"
          value={10}
          style={{ width: 200, marginRight: 8 }}
          select
          size="small"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField> */}
      {/* <TextField   style={{ width: 200, marginRight: 8 }}
       value={props.title==="Brand" ? stateBrand :props.title==="Connect" ? stateConnect :props.title==="Reconnect" ? stateReConnect :props.title==="Mode" ?  stateMode : "" }
      onChange={setChangeEvent}
      select variant={"outlined"}  label={props.text}>
     
      {props.data.map((item)=>( <MenuItem value={item.name}>{item.name}</MenuItem>))}
</TextField> */}

        <TextField
          label={props.text}
          variant={"outlined"} 
          value={props.title==="Brand" ? stateBrand :props.title==="Connect" ? stateConnect :props.title==="Reconnect" ? stateReConnect :props.title==="Mode" ?  stateMode : "" }
          style={{ width: 200, marginRight: 8 }}
          select
          onChange={setChangeEvent}
        >{props.data.map((item)=>( <MenuItem value={item.name}>{item.name}</MenuItem>))}
         
       
        </TextField>
</div>

     
     
    
  );
}
