import React, { useState,useEffect,memo } from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloseIcon from '@mui/icons-material/Close';
import PauseIcon from '@mui/icons-material/Pause';
import { useLocation } from "react-router-dom";
import {
    Button, Container, Modal, ModalHeader, Row,Col

} from "shards-react";
import { useHistory } from "react-router-dom";
import "../index.css";
import TestRelay from "../views/TestRelay";
import TestInputs from "../views/TestInputs";
 
const  SelectTestTyp =()=>{
    
    const history=useHistory();
    const location=useLocation()

    const [show, setShow] = useState( false);   
    // function toggleShowMenu() {
      
    //     if(location.state){
    //          location.state=undefined
    //         setShow(false)
    //          history.push('/controllino');
    //     }
    //     else{
    //         setShow(!show);

    //     }
       
    //   }
      function toggleShow() {
        setShow(!show)
       
      
      }
    
      const page2= () =>{
    history.push('/testInput');
    };
    const page1= () =>{ 
    history.push('/testRelay');
   
    };
   
    
    

    // console.log("location",location.state)
    
  const closeModal=()=>{
    setShow(false)
    history.push('/controllino')
  }
        return (
            <div id="select-test">
                <Button onClick={toggleShow} outline >Test</Button>
                <Modal open={location.state ? location.state.fromDashboard : show} toggle={toggleShow} >
                <ModalHeader>Select Test Type<CloseIcon sx={{ marginLeft: 27}} onClick={closeModal}/></ModalHeader> <Button style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }}  onClick={()=>page1()}>Tests Port</Button>
                    <Button style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }} onClick={()=>page2()}>Tests Inputs</Button>
                    <Button style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }} >Full Diagnostic (5m 24s)<PauseIcon  sx={{ marginLeft: 2}}/></Button>
                    <ModalHeader></ModalHeader>
                    <Button outline style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }}>Backwash</Button>
                    <Button outline style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }}>Filter</Button>
                    <Button outline style={{ height: 40, width: 343, marginLeft: 66, marginTop: 16, marginBottom: 16 }}>Lights</Button>
                    <ModalHeader></ModalHeader>
                    <Container className="dr-example-container">
                            <Row>
                                <Col sm="12" lg="6" sty>
                                    <div  style={{ fontSize:24, marginBottom:0, marginTop:0,}}>
                                    <ThermostatIcon style={{margin:0,fontWeight: "bold"}} fontSize="large"  sx={{ marginLeft: 5,marginTop:2}}/> 
                                   24 <span style={{fontWeight: "bold",fontSize: 12,
    marginLeft: 3,position: "absolute",marginTop:2}}>°C</span>
                                    </div>
                                   
                                 </Col>
                           
                                <Col sm="12" lg="6">
                                  <p style={{ marginTop:10,color:'#9EAAB4'}}>Last updated: 10.08.2022</p>
                                </Col>
                            </Row>
                    </Container>
                </Modal>
            </div>
        );
    }
    
export default memo(SelectTestTyp);