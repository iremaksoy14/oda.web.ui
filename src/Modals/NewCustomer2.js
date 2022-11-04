import { TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {
    Button, Modal, ModalHeader, Container, Row, Col
} from "shards-react";
import Box from "@mui/material/Box";
import Butt from "@mui/material/Button";
import ControllinoStable from "./ComponentsModal.js/ControllinoStable";
export default function NewCustomer2() {
    const history=useHistory()
    const location=useLocation()
    const [show, setShow] = useState(location.state ? location.state.status : false);
    function toggleShow() {
        setShow(!show);
    }

    const closeShow=()=>{
        history.push("/customers")

    }

    return (
        <div id="newCustomer2">
         
            <Modal open={show} toggle={toggleShow} style={{ width: '100%', height: '100%' }}>
                <ModalHeader >New Customers <CloseIcon sx={{ marginLeft: 45 }} onClick={closeShow} />
                </ModalHeader>

                <div>
                    <Container className="dr-example-container">

                        <Row>
                            <Col><p style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Is there a solar water heater?</p></Col>
                            <Col><p style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Is there a solar water heater?</p></Col>
                        </Row>
                        <Row>
                            <Col><Button outline style={{ height: 39, width: 124 }}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 39, width: 124 }}>No</Button></Col>
                            <Col><Button outline style={{ height: 39, width: 124 }}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 39, width: 124 }}>No</Button></Col>

                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col><TextField label="How many liters?" defaultValue="90" style={{ height: 1 }} /></Col>
                            <Col><TextField label="How many kW?" defaultValue="If any" style={{ height: 1 }} /></Col>
                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col><h6 style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Solar panel phase</h6></Col>
                            <Col><h6 style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Electricity meter</h6></Col>
                        </Row>
                        <Row>
                            <Col>
                                <div class="dropdown">
                                    <button class="btn  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: 48, width: "261px", backgroundColor: "#F4F6F9" }}>
                                        1 Phase
                                    </button>
                                </div>
                            </Col>
                            <Col>
                                <div class="dropdown">
                                    <button class="btn  btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ height: 48, width: "261px", backgroundColor: "#F4F6F9" }}>
                                        Analog
                                    </button>
                                </div>
                            </Col>
                        </Row>

                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Show consumption on app</p>

                        <Row>
                            <Col><Button outline style={{ height: 39, width: 225 }}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 39, width: 225 }}>No</Button></Col>


                        </Row>
                        <p style={{ width: "100%", marginTop: 20, marginLeft: 15 }}>Connected to module</p>

                        <Row>
                            <Col><Button outline style={{ height: 39, width: 225 }}>Yes</Button></Col>
                            <Col><Button outline style={{ height: 39, width: 225 }}>No</Button></Col>


                        </Row>
                        <Row style={{ marginTop: 30 }}>
                            <Col><TextField label="Brand" defaultValue="Jet Stream" style={{ height: 1, width: "100%" }} /></Col>
                            ,                            </Row>
                    </Container>
                    <ModalHeader style={{ marginTop: 20 }}></ModalHeader>


                    <Button style={{ width: "90%", borderRadius: "8px solid", marginLeft: "30px", marginTop: "15px" }} >Save Customer Information</Button>


                </div>
            </Modal>
        </div>
    );

}