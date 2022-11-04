import React, { useState } from "react";
import { Button, FormInput, Modal, ModalBody, ModalHeader, Container, Row, Col } from "shards-react";
import { TextField } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import CloseIcon from '@mui/icons-material/Close';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import {Select} from '@mui/material';
import {MenuItem,InputLabel,FormControl} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CalendarPicker from "../components/Date/CalendarPicker"
import TimePicker from "../components/Date/TimePicker"
import DropDownMenuForm from "../_shared/forms/DropDownMenuForm"
import "../../src/index.css"


const obj1=[{id:0,name:"Bowman"},{id:1,name:"blacksmith"}]
const obj2=[{id:0,name:"Yes"},{id:1,name:"No"}]
const obj3=[{id:0,name:"5 Min"},{id:1,name:"10 Min"}]
const obj4=[{id:0,name:"Top up wheen needed"},{id:1,name:"open no need"}]



function createData(ID, IP, MAC, StartDate, LastOnline, Status, Assigned, Transactions, Transactions2) {
    return { ID, IP, MAC, StartDate, LastOnline, Status, Assigned, Transactions, Transactions2 };
}
const rows = [
    createData('#353', '192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "10.10.2022", '10.10.2022', 'Error', "Yes", <Button></Button>, <Button outline>Test </Button>),
    createData('#354', '192.168.1.117', "MAC ADDRESS00:00:5e:00:53:af", "10.10.2022", '10.10.2022', 'Online', "No", <Button></Button>, <Button outline>Test </Button>)

];


export default function ModalsCont() {
    const [connectmodule,setConnectModule] =useState("")
    const [brand,setBrand] =useState("")
    const [recommend,setRecommend] =useState("")
    const [mode,setMode] =useState("")
    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(!show);
    }
    
  const handleChange = (event) => {
    setConnectModule(event.target.value);
  };
  const handleChangeRecommend = (event) => {
    setRecommend(event.target.value);
  };
  const setCss=(row)=>{
    if( row.Status=== "Error" ){
        return {backgroundColor:"#ff0000",marginRight:2,height:8,width: 8,borderRadius: "50%",display: "inline-block"}
    }
    else if( row.Status=== "Online" ){
return   {backgroundColor:"#009900",marginRight:2,height:8,width: 8,borderRadius: "50%",display: "inline-block"}
    }
  
  }
  const firstCss=(row)=>{
    if(row.ID==="#353"){
        return { opacity:0.2}
    }
    return 

  }



    return (
        <div id="modalsCont">
            <Button onClick={toggleShow} className="btn btn-primary" style={{ height: 35, width: 85, padding: 5, textAlign: "center", justifyContent: "center" }}>Configure</Button>
            <Modal open={show} toggle={toggleShow} style={{ marginTop: '210' }} size="lg" >
                <ModalHeader>
                <CloseIcon style={{float:"right",marginRight:15}} sx={{ marginLeft: 15}} onClick={() =>toggleShow()}/>
                    <TableContainer style={{ width: "100%", marginTop: 30 }}>
                        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                        <TableHead>
          <TableRow>            
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">IP</TableCell>
            <TableCell align="left">MAC</TableCell>
            <TableCell align="left">Start Date</TableCell>
            <TableCell align="left">Last Online</TableCell>
             <TableCell align="left">Status</TableCell>
            <TableCell align="left">Assigned</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
   </TableRow>
        </TableHead>
                            <TableBody>
                                {
                                    rows
                                        .map((row) => (
                                            <TableRow
                                            style={firstCss(row)}
                                                key={row.Name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row"><b>{row.ID}</b></TableCell>
                                                <TableCell align="left"><b>{row.IP}</b></TableCell>
                                                <TableCell align="left">{row.MAC}</TableCell>
                                                <TableCell align="left">{row.StartDate}</TableCell>
                                                <TableCell align="left">{row.LastOnline}</TableCell>
                                                <TableCell style={{padding:10}} align="left"><span style={setCss(row)}></span><span>{row.Status}</span></TableCell>
                                                <TableCell align="left">{row.Assigned}</TableCell>
                                                <TableCell align="left"><button type="button" class="btn btn-primary btn btn-primary">Configure</button></TableCell>
                                                <TableCell align="left"><button type="button" class="btn btn-outline-primary">Test</button></TableCell> 

                                               

                                                
                                                {/* <CloseIcon sx={{ marginLeft: 15}} onClick={() =>toggleShow()}/> */}
                                            </TableRow>
                                        ))}
                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                 
                </ModalHeader>

                <div>
                    <Container className="dr-example-container">
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600" }}>Warmtepomp</p>
 <Row>
                            <Col><Button outline style={{ height: 48,width: 224,borderWidth: 1.5,color: "#33A3F9",fontWeight: "bold",borderColor: "#33A3F9"}}>Classic Pump</Button></Col>
                            <Col><Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>Freq Drive Pump</Button></Col>
                            <Col><TextField label="Number of kW" defaultValue="124" style={{ height: 1 }} /></Col>
                            <Col><TextField label="COP Value" defaultValue="90" /></Col>

                        </Row>
                        <div style={{display:"flex",flexDirection:"row"}}>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600"  }}>Auto BackWash Valve</p>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600"  }}>Roller Shutter Present</p>
                        </div>

                        <Row>
                            <Col><Button outline style={{ height: 48,width: 224,borderWidth: 1.5,color: "#33A3F9",fontWeight: "bold",borderColor: "#33A3F9"}}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>No</Button></Col>
                            <Col>
                               <Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>Yes </Button>
                          </Col>
                            <Col><Button outline style={{ height: 48,width: 224,borderWidth: 1.5,color: "#33A3F9",fontWeight: "bold",borderColor: "#33A3F9"}}>No</Button></Col>

                        </Row>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600"  }}>Heat Exchanger</p>
                        <Row>
                            <Col><Button outline style={{ height: 48,width: 224,borderWidth: 1.5,color: "#33A3F9",fontWeight: "bold",borderColor: "#33A3F9"}}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>No</Button></Col>
                            <Col><FormControl  style={{margin:0}} required sx={{ m: 1, minWidth: 120 }}>
                           <DropDownMenuForm text="Brand" title="Brand" data={obj1}/>

      </FormControl></Col>
                            <Col><TextField label="Number of kW" defaultValue="90" /></Col>

                        </Row>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600"  }}>Refill system</p>
                        <Row>
                            <Col><Button outline style={{ height: 48,width: 224,borderWidth: 1.5,color: "#33A3F9",fontWeight: "bold",borderColor: "#33A3F9"}}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>No</Button></Col>
                            <Col>
                            <FormControl style={{margin:0}} required sx={{ m: 1, minWidth: 120 }} >
                                
                            <DropDownMenuForm text="Connected the Module" title="Connect" data={obj2} />
    
      </FormControl>
                          </Col>
                            <Col>
                            <FormControl style={{margin:0}} required sx={{ m: 1, minWidth: 120 }}>
                            <DropDownMenuForm text="Recommended Duration" title="Reconnect" data={obj3}/>
        {/* <FormHelperText>Required</FormHelperText> */}
      </FormControl></Col>

                        </Row>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15,fontWeight:"600"  }}>Backwash Settings</p>
                        <Row>
                            <Col> <CalendarPicker /></Col>
                            <Col><TimePicker/></Col>
                           
                            <Col><FormControl style={{margin:0}} required sx={{ m: 1, minWidth: 120 }}>
                            <DropDownMenuForm text="Mode"  title="Mode" data={obj4}/>
      </FormControl></Col>
                            <Col><Button outline style={{ height: 48, width: 224,color: "#000",borderWidth: 1.5,fontWeight: "bold",borderColor: "#ccc"}}>Hard Reset</Button></Col>

                        </Row>
                    </Container>
                    <ModalHeader></ModalHeader>
               
                    <Container className="dr-example-container">
                        <Row style={{marginTop:10,marginBottom:10}}>
                           <Col style={{display:"flex",justifyContent:"end"}}>
                           <Button style={{marginRight:10,color:"#000",fontWeight:"500",backgroundColor:"white",borderColor:"#ccc",borderWidth:1}}  >Cancel</Button>
                           <Button >Save Configure</Button>
                           </Col>
       
                    
                        </Row>
                    </Container>

                </div>
            </Modal >
        </div >
    );

}