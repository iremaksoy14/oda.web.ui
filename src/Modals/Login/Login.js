import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { TextField } from "@mui/material";
import "../.././index.css"
import * as actionsAuth from "../../Store/_redux/AuthStore/authSlice"
import { useHistory } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import * as actions from '../../Store/_redux/AuthStore/authActions'
import leftImg from "./../../assets/Images/loginLeft.png"
import "./style.css"
import { Container } from "shards-react";
import { motion } from 'framer-motion';

import PopupModal from "../PopupModal";
function Login(props) {
    const [alertField, setAlertField] = useState({
        title: "",
        text: "",
        show: false,
        color: "#23ba47"
    })

    const dispatch = useDispatch()
    const actionAuthSlice = actionsAuth.Slice;
    const [message, setMessage] = useState("");
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
    });

    const formik = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: '', password: '' },
        onSubmit: values => {
            dispatch(actions.userStoreIdentitiyAction({ email: values.email, password: values.password }))
                .then((response) => {
                    debugger;
                    if (response.success) {
                        dispatch(actionAuthSlice.actions.loginUser(response.data.user))
                        dispatch(actionAuthSlice.actions.loginUserName(response.data.user))

                        history.push('/')
                    } else {

                        if (response.message === "The user is waiting for acceptance confirmation. Not active yet !!") {
                            history.push('/messages')


                        }
                        else {
                            setMessage("Hatalı email veya şifre")

                        }
                    }
                    //console.log(response)
                    // dispatch(actionAuthSlice.actions.loginUser(response.data.user))

                    // if(response.data.user.userTypes==="architect"){
                    //     history.push('/messages');
                    // }
                    // else{
                    //     history.push('/mainpage');

                    // }

                    // setMessage("")





                })
        }
    });



    const [show, setShow] = useState(true);
    const history = useHistory();

    const toggle = () => setShow(!show);
    // const handleLogin = () => {
    //     // history.push('/customers');

    // };
    const fun = () => {
        history.push('*');

    }

    return (
        <Container className="container-login" style={{marginTop:70,height:'auto'}}>
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }}>
                <div id="login">
                    <div className="card login-content loginCenterFrame" style={{marginTop:0}}>
                        <img style={{height:'100%'}} src={leftImg} alt="" />
                        <div className="form-content" style={{padding:0,flex:1,alignItems:'center',justifyContent:'center'}}>
                            <span className="title">Daxil ol</span>
                            <span className="subtitle">Zəhmət olmasa e-mail ünvanı ilə şifrənizi daxil edin </span>
                            <div className="card-block px-2 ">
                                <form onSubmit={formik.handleSubmit}>
                                    <TextField
                                        label="E-mail*"
                                        name="email"
                                        value={formik.values.email}

                                        onChange={formik.handleChange}
                                        defaultValue="demaz@mail.com"
                                        className="mb-2 mt-2 col-md-12"
                                        error={formik.errors.email}
                                        touched={formik.touched.email}
                                    />
                                    <TextField type="password" label="Şifre" onChange={formik.handleChange} name="password" value={formik.values.password} defaultValue="**************" className="mb-2 mt-2 col-md-12" />
                                    <p className="text-danger">{message}</p>
                                    <div className="row reset">
                                        <div className="col-md-6">
                                            <FormGroup style={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel control={<Checkbox />} label="Məni xatırla" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-md-6">
                                            <FormLabel style={{ color: "#01577D", marginTop: 5, marginBottom: 5, cursor: "pointer", fontWeight: "500" }} onClick={fun}>Şifrəmi unutdum</FormLabel>
                                        </div>
                                    </div>

                                    <Button className="col-12" type="submit" style={{ backgroundColor: "#01577D", borderRadius: 20 }} >Daxil ol</Button>
                                    <div className="new"><span>Hesabınız yoxdur?</span>
                                        <span
                                            style={{ color: "#01577D", cursor: "pointer" }}
                                            onClick={() => history.push("/register")}
                                        >
                                            Qeydiyyatdan keç
                                        </span></div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
            <PopupModal
                {...alertField}
                show={alertField.show}
                onHide={() => setAlertField(value => ({ ...value, show: false }))}
            />
        </Container>


    )
}

export default Login;