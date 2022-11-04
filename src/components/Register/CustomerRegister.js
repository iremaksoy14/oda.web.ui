import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../.././index.css"
import * as Yup from 'yup';
import leftImg from "./../../assets/Images/usertype-left.png"
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import PhoneInput from 'react-phone-input-2'
import * as customerAction from '../../Store/_redux/CustomersStore/customerAction'
import "./style.css"
import { ErrorMessage, Formik, Form } from 'formik';
import PopupModal from '../../Modals/PopupModal'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
const validationSchema = Yup.object().shape({
    //.matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    email: Yup.string().email('E-mail ünvanı səhvdir').required('Zəruri'),
    password: Yup.string().min(6).matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/).required('Zəruri'),
    confirmPassword: Yup.string().min(6).oneOf([Yup.ref('password')], 'iki parol uyğun gəlmir').required('Zəruri').matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/),
    fullName: Yup.string().required('Zəruri'),
    // phone: Yup.number().typeError('nömrə daxil etməlisiniz').required('telefon nömrəsi Zəruri'),

});

function CustomerRegister(props) {

    const [phone, setPhone] = useState("")
    const [phonestatus, setPhonestatus] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const setPhoneFunc = (val) => {
        setPhone(val)
        if (phone === "") {
            setPhonestatus(true)
        }
        else if (phone.length <= 10) {
            setPhonestatus(true)

        }
        else {
            setPhonestatus(false)


        }
    }
    const [alertField, setAlertField] = useState({
        title: "",
        text: "",
        show: false,
        color: "#23ba47"
    })

    const goLogin =()=>{        
        history.goBack();
    }
    return (
        <div className='register-page' style={{ marginTop: 85 }}>
            <p className='main-title'>Qeydiyyat</p>
            <hr />
            <div className='register-item'>
                <div className='customertype' style={{ width: 1172, height: 560, justifyContent: 'flex-start' }}>
                    <img src={leftImg} alt="customer" className='customerImage' />
                    <div className="form-content" style={{ padding: 0, paddingTop: 25 }}>
                        <div style={{ display: 'flex', maxWidth: 326, flexDirection: 'column', alignItems: 'center' }}>
                            <label className="title-span">Elə indi qeydiyyatdan keç</label>
                            <label className="sub-Title" onClick={props.login} style={{ marginTop: 18,zIndex:2 }}>Hesabın var? <span className="link" onClick={()=>goLogin()}>Daxil ol </span></label>
                        </div>

                        <div className="card-block px-2">
                            <Formik
                                initialValues={{ fullName: '', email: '', password: '', phone: '', confirmPassword: '' }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    var name = values.fullName.split(" ");
                                    var testData = {
                                        email: values.email,
                                        firstName: name[0],
                                        lastName: name[1],
                                        roleName: "client",
                                        password: values.password,
                                        phoneNumber: phone,
                                        confirmPassword: values.confirmPassword
                                    }

                                    var data1 = JSON.stringify(testData)

                                    if (name[1] === undefined || name[1] === "" || phone === "" || phone === undefined || phone.length <= 10) {
                                        if (phone === "" || phone === undefined) {
                                            setPhonestatus(true)
                                        } else if (phone.length <= 10) {
                                            setPhonestatus(true)
                                        }
                                        else {
                                            setPhonestatus(false)

                                        }
                                        if (name[1] === undefined || name[1] === "") {
                                            setAlertField({
                                                title: "Fail",
                                                text: "Soyadınızı daxil etməlisiniz.Ad və soyad arasında boşluq olmalıdır",
                                                show: true,
                                                color: "red"
                                            })
                                        }
                                    }
                                    else {
                                        dispatch(customerAction.addCustomerCrud(data1, setAlertField)).then((res) => {

                                            if (res.success === true) {
                                                history.push("/qeydiyyat")

                                            }
                                            else {
                                                setAlertField({
                                                    title: "Error",
                                                    text: res.message,
                                                    show: true,
                                                    color: "red"
                                                })
                                            }
                                        })
                                    }
                                }}
                            >
                                {({ errors, touched, handleChange, values }) => (
                                    <Form>
                                        <TextField
                                            label="Ad Soyad"
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            className="col-md-12"
                                            //  error={errors.fullName}
                                            //  touched={touched.fullName}
                                            helperText={touched.fullName && errors.fullName}
                                            FormHelperTextProps={{
                                                classes: {
                                                    root: "text-danger"
                                                }
                                            }}
                                            style={{ maxWidth: 326 }}
                                        />
                                        <TextField
                                            label="E-mail"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            // error={errors.email}
                                            // touched={touched.email}
                                            className="mt-4 col-md-12"
                                            helperText={touched.email && errors.email}
                                            FormHelperTextProps={{
                                                classes: {
                                                    root: "text-danger"
                                                }
                                            }}
                                            style={{ maxWidth: 326 }}
                                        />

                                        {/* <TextField
                                            label="Telefon nömrəsi"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            className="mb-2 mt-2 col-md-12"
                                            // error={errors.phone}
                                            // touched={touched.phone}
                                            helperText={touched.phone && errors.phone}
                                            FormHelperTextProps={{
                                                classes:{
                                                    root:"text-danger"
                                                }
                                        }}

                                        />    */}
                                        <PhoneInput

                                            disableAreaCodes
                                            className="mt-4 col-md-12"
                                            placeholder="Phone nmber"
                                            inputStyle={{
                                                width: "100%",
                                                height: 56,
                                                fontSize: 13,
                                                paddingLeft: 48,
                                                borderRadius: 5
                                            }}
                                            country={'tr'}
                                            value={phone}
                                            onChange={(val) => setPhoneFunc(val)}
                                            style={{ maxWidth: 326, marginBottom: 0 }}
                                        />
                                        {phonestatus ? <p style={{ color: "red", margin: 0 }}>telefon alanını boş girdiniz</p> : <p></p>}

                                        <TextField
                                            type="password"
                                            label="Şifre"
                                            onChange={handleChange}
                                            name="password"
                                            value={values.password}
                                            className="col-md-12"
                                            // error={errors.password}
                                            // touched={touched.password}
                                            helperText={touched.password && errors.password}
                                            FormHelperTextProps={{
                                                classes: {
                                                    root: "text-danger"
                                                }
                                            }}
                                            style={{ maxWidth: 326 }}
                                        />
                                        {/* <TextField
                                            type="password"
                                            label="Tekrar Şifre"
                                            onChange={handleChange}
                                            value={values.confirmPassword}
                                            name="confirmPassword"
                                            // error={errors.confirmPassword}
                                            // touched={touched.confirmPassword}
                                            helperText={touched.confirmPassword && errors.confirmPassword}
                                            FormHelperTextProps={{
                                                classes: {
                                                    root: "text-danger"
                                                }
                                            }}
                                            className="mb-2 mt-2 col-md-12"
                                            style={{maxWidth:326}}

                                        /> */}
                                        {/* <FormControlLabel control={<Checkbox />} label="İstifadə şərtlərini qəbul edirəm" /> */}

                                        <button type="submit" className="btn btn-primary" style={{marginTop:16, backgroundColor: "#01577D", width: "100%", borderRadius: 6, maxWidth: 326 }}>Tamamla</button>

                                    </Form>
                                )}
                            </Formik>
                            <div className='registerBottomFrame'>
                                <label className="registerBottomText">
                                    "Tamamla" düyməsini basaraq istifadəçi şərtlərini qəbul edirsiniz{"("}
                                    <label className="c-blue">
                                        İstifadəçi şərtləri
                                    </label>
                                    {")"}
                                </label>
                            </div>

                        </div>
                        <PopupModal
                            {...alertField}
                            show={alertField.show}
                            onHide={() => setAlertField(value => ({ ...value, show: false }))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerRegister;