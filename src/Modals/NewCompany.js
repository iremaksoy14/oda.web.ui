import React,{ useState} from "react";
import { Button,Modal, ModalHeader} from "shards-react";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import "../index.css"
export default function NewCompany () {

    const [show, setShow] = useState(false);   
    function toggleShow() {
        setShow(!show);
      }
      const toggle = () => setShow(!show);
      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };
   
        return (
            <div id="newCompany">
                       <Button onClick={toggleShow} className="btn btn-primary" style={{ height: 25, width: 120, marginTop: 18, padding: 5, textAlign: "center", display: "flex", justifyContent: "center" }}>New Company</Button>
                <Modal open={show} toggle={toggleShow} style={{ width: '100%' }}>
                
                    <ModalHeader>New Company <CloseIcon sx={{ marginLeft: 19}} onClick={() =>toggleShow()}/></ModalHeader>
                    <div style={{ display: "flex", flexDirection: "column",justifyContent: "center",position:"relative",left:"-43px"}}>
                    <TextField label="Name" defaultValue="A Company"  style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <TextField label="Email Domain" defaultValue="acompany.com"  style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }}/>
                    <TextField label="Admin Mail" defaultValue="johndoe@example.com" style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }} />
                    <FormControl style={{ height: 40, width: 343, marginLeft: 66, marginTop: 32 }}>
                        <InputLabel id="demo-simple-select-label" >Staff Limit</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Staff Limit"
                            onChange={handleChange}
                        >
                            <MenuItem value={10} >50</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={{ height: 40, width: 343, marginLeft: 66, marginTop: 24, marginBottom: 16 }}>Save User</Button>
                    </div>
                </Modal>
            </div>
        );
    
}