import React, { useState } from "react";
import { Button, ModalHeader, Text } from "shards-react";
import { TextField } from "@mui/material";
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { ModalBody } from "react-bootstrap";

export default function ResetPassword() {

    const [show, setShow] = useState(true);
    const history = useHistory();
    const handle2=() => {
        history.push('/');

    }
    const toggle = () => setShow(!show);

    const ResetPasswordSchema = Yup.object().shape({
        password: Yup.string().email('Invalid email').required('Required'),
        password2: Yup.string().required('Required'),
    });

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        validationSchema: ResetPasswordSchema,
        initialValues: { password: '', password2: '' },
        //     onSubmit: values =>
        //       alert(`Email: ${values.email}, Password: ${values.password}`)
        //       navigation.navigate("MainScreen")
    });

    return (
        <div id="resetPass1">
            <Modal
                show={show}
                onHide={toggle}
                backdrop="static"
                keyboard={false}
                centered
                size="sm"
                style={{ fontSize: 14, backgroundImage: `url("bg.png")` }}
            >
                <Modal.Header >
                    <Modal.Title  >TuinLuxe Login</Modal.Title>
                </Modal.Header >
                <Modal.Body style={{ padding: 10 }}>
                <TextField label="Password*" defaultValue="demaz@mail.com" style={{ marginTop: 0 }} className="mb-2 mt-2 col-md-12"

                />
                <TextField label="Password Again*" defaultValue="**************" style={{ marginTop: 20 }}                     className="mb-2 mt-2 col-md-12"
                    
/>
                <Button className="col-12"  onClick={handle2} style={{ marginTop: 20 }}>Confirm New Password</Button>

                </Modal.Body>
            </Modal>
        </div>
    );

}