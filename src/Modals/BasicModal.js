import React, { useState } from "react";
import { Button, FormInput, Modal, ModalBody, ModalHeader } from "shards-react";
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "../index.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function BasicModal() {
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
            <Button onClick={toggleShow} className="btn btn-primary" style={{ height: 25, width: 125, marginTop: 18, padding: 5, textAlign: "center", display: "flex", justifyContent: "center" }}>New User</Button>

            <Modal open={show} toggle={toggleShow} style={{ width: '100%' }}>
                <ModalHeader>New User  <CloseIcon sx={{ marginLeft: 25 }} onClick={() => toggleShow()} /></ModalHeader>

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", left: "-43px" }}>
                    <TextField label="Name*" defaultValue="Jhon" style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <TextField label="Lastname*" defaultValue="Doe" style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <TextField label="Email*" defaultValue="johndoe@example.com" style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <FormControl style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }}>
                        <InputLabel id="demo-simple-select-label" >Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={tech}
                            label="Technician"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Technician</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <Button style={{ height: 40, width: 343, marginLeft: 66, marginTop: 24, marginBottom: 16 }}>Add User</Button>
                </div>




            </Modal>
        </div>
    );
}
