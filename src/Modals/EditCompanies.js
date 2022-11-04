import React, { useState } from "react";
import { Button, Col, Container, FormInput, Modal, ModalBody, ModalHeader, Row } from "shards-react";
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "../index.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function EditCompanies() {
    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(!show);
    }
    const [tech, setTech] = React.useState('');

    const handleChange = (event) => {
        setTech(event.target.value);
    };
    return (
        <div id="user">
         <Button onClick={toggleShow} className="btn btn-primary" style={{ height: 35, width: 85, padding: 5, textAlign: "center", justifyContent: "center" }}>Edit </Button>

            <Modal open={show} toggle={toggleShow} style={{ width: '100%' }}>
                <ModalHeader>Edit Company<CloseIcon sx={{ marginLeft: 20 }} onClick={() => toggleShow()} /></ModalHeader>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", left: "-43px" }}>
                    <TextField label="Company Name*"  style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <TextField label="Email Domain	*" style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <TextField label="Total Staff*"  style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
           
                    <Container className="dr-example-container" >
                        <Row>
                            <Col sm="12" lg="6">
                            <Button onClick={() => toggleShow()} outline style={{ height: 40, width: 120, marginLeft: 100, marginTop: 34, marginBottom: 16 }}>Cancel</Button>
                            </Col>
                            <Col sm="12" lg="6">
                            <Button  className="btn btn-primary"style={{ height: 40, width: 120, marginLeft:46, marginTop: 34, marginBottom: 16 }}>Save</Button>
                            </Col>
                        </Row>
                      </Container>                                         
                   

                </div>




            </Modal>
        </div>
    );
}
