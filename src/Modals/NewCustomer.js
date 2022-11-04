import { TextField } from "@mui/material";
import React,{ useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

import {
    Button, FormInput, Modal, ModalHeader, Container, Row, Col, FormTextarea, Slider
} from "shards-react";
import Box from "@mui/material/Box";
import Butt from "@mui/material/Button";
import ControllinoStable from "./ComponentsModal.js/ControllinoStable";
import ModalsCont from "./ModalsCont";
import { useHistory } from "react-router-dom";
import NewCustomer2 from "./NewCustomer2";
export default function  NewCustomer () {


    const history=useHistory()
    const [show, setShow] = useState(false);   
    function toggleShow() {
        setShow(!show);
      }
 
    function next (){
        setShow(!show);
       
     }
  

        return (
            <div id='newCustomer'>
                <Button onClick={toggleShow} className="btn btn-primary" style={{ height: 25, width: 120, marginTop: 18, padding: 5, textAlign: "center", display: "flex", justifyContent: "center" }}>New Customers</Button>
                <Modal open={show} toggle={toggleShow} style={{ width: '100%' }}>
                
                     <ModalHeader>
                      New Customer
                                   
                            {/* <Slider connect={[true, false]} start={[20]} range={{ min: 0, max: 20 }} /> */} 
                        <CloseIcon sx={{ marginLeft: 55}} onClick={() =>toggleShow()} />    
                       
                     </ModalHeader>
                      

                    <Container className="dr-example-container">
                        <Row>
                            <Col sm="12" lg="6">
                                <TextField label="Name*" defaultValue="Jhon" style={{ height: 48, width: 276, marginLeft: 46, marginTop: 32 }} />
                            </Col>
                            <Col sm="12" lg="6">
                                <TextField label="Lastname*" defaultValue="Doe" style={{ height: 48, width: 276, marginLeft: 14, marginTop: 32 }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" lg="6">
                                <FormInput placeholder="Email" style={{ backgroundColor: '#F4F6F9', height: 48, width: 276, marginLeft: 46, marginTop: 16 }} />
                            </Col>
                            <Col sm="12" lg="6">
                                <FormInput placeholder="Phone Number" style={{ backgroundColor: '#F4F6F9', height: 48, width: 276, marginLeft: 14, marginTop: 16 }} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormTextarea placeholder="Adress" style={{ backgroundColor: '#F4F6F9', height: 111, width: 576, marginLeft: 46, marginTop: 16 }} />

                            </Col>
                        </Row>

                    </Container>
                    <Container className="dr-example-container" style={{ backgroundColor: '#F4F6F9', marginTop: 16 }}>
                        <Row>
                            <Col >
                                <Box component="span" style={{ backgroundColor: '#F4F6F9', height: 48, width: 1076, marginLeft: 46, marginTop: 16, p: 2, border: "2px dashed grey" }}>
                                    <Butt onClick={()=>   history.push({
      pathname: '/NewCustomer2',
      state: { status: true }
    })} style={{ width: '85%' }} >+ Add Controllino</Butt>
                                </Box>
                            </Col>
                            <Col>
                                <ControllinoStable style={{ height: 40, width: 1, marginLeft: 46, marginTop: 16 }}></ControllinoStable>
                            </Col>
                        </Row>

                       

                    </Container>
                    {/* <NewCustomer2 onClick={() =>next()} style={{  marginLeft: 146}} ></NewCustomer2> */}
                </Modal>
            </div>
        );
         
      
    
}