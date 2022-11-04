import React, { useState } from "react";
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";

export default function DropDownExample(props) {
  const [stateBrand,setStateBrand]=useState("blacksmith")
  const [stateConnect,setStateConnect]=useState("Yes")
  const [stateReConnect,setStateReConnect]=useState("5 Min")
  const [stateMode,setStateNMode]=useState("Top up wheen needed")

 

const setChangeEvent=(e)=>{
//  setState(e.target.value)
  if(props.title==="Brand"){
   // console.log(e.target.value)
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
//console.log(stateBrand)

  return (
    <div>
       <FormControl fullWidth  style={{width: 200}} >
        <InputLabel id="demo-simple-select-label">{props.text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.title==="Brand" ? stateBrand :props.title==="Connect" ? stateConnect :props.title==="Reconnect" ? stateReConnect :props.title==="Mode" ?  stateMode : "" }
          label={props.titşe}
          onChange={setChangeEvent}
        >
            {props.data.map((item)=>( <MenuItem value={item.name}>{item.name}</MenuItem>))}
        </Select>
      </FormControl>
    </div>
  );
}
