import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../.././index.css"
import { ErrorMessage, Formik, Form } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import leftImg from "./../../assets/Images/usertype-arcitecture-left.png"
import "./style.css"
import { useDispatch } from "react-redux";
import PopupModal from "../../Modals/PopupModal";
import * as architectAction from '../../Store/_redux/ArchitectStore/architectAction'
import { useHistory } from "react-router-dom";
const validationSchema = Yup.object().shape({

    email: Yup.string().email('səhv e-mail').required('Zəruri'),

    password: Yup.string().min(6).matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/).required('Zəruri'),
    experience: Yup.string().required('Zəruri'),
    titles: Yup.string().required('Zəruri'),
    education: Yup.string().required('Zəruri'),
    description: Yup.string().required('Zəruri'),
    fullName: Yup.string().required('Zəruri'),
    // phone: Yup.number().typeError('Nömrə göstərməlisiniz').required('telefon nömrəsi zəruri'),
    confirmPassword: Yup.string().min(6).oneOf([Yup.ref('password')], 'Sizin parolunuz uyğun gəlmir.').required('Zəruri').matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/),
});



function ArchitectRegister(props) {
    const history = useHistory();
    const [phone, setPhone] = useState("")
    const [phonestatus, setPhonestatus] = useState(false)
    const navigateLogin =()=>{
        history.goBack();
    }
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
    const dispatch = useDispatch()
    return (
        <div className='register-page'>
            <p className='main-title'>Qeydiyyat</p>
            <hr />
            <div className='register-item'>
                <div className='customertype' >
                    <img src={leftImg} alt="articture" className="arc-img" />
                    <div className="form-content" style={{ padding: 0, paddingRight: 153 }}>
                        <span className="title-span" style={{ margin: 'auto', marginTop: 40 }}>Elə indi qeydiyyatdan keç</span>
                        <span className="sub-Title" style={{ marginTop: 17, zIndex:2 }} onClick={props.login}>Hesabın var? <span className="link" onClick={navigateLogin}>Daxil ol </span></span>
                        <div className="card-block px-2">
                            <Formik
                                initialValues={{
                                    fullName: '',
                                    email: '',
                                    password: '',
                                    phone: null,
                                    confirmPassword: '',
                                    experience: '',
                                    description: '',
                                    titles: '',
                                    education: '',
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {
                                    var name = values.fullName.split(" ");

                                    var testData = {
                                        email: values.email,
                                        firstName: name[0],
                                        lastName: name[1],
                                        phoneNumber: phone,
                                        roleName: "architect",
                                        password: values.password,
                                        confirmPassword: values.confirmPassword,
                                        architect: {
                                            recentJobExperience: values.experience,
                                            about: values.description,
                                            education: values.education,
                                            adress: values.titles
                                        }

                                    }
                                    if (name[1] === undefined || name[1] === "" || phone === undefined || phone === "" || phone.length <= 10) {
                                        if (phone === "" || phone === undefined) {
                                            setPhonestatus(true)
                                        }
                                        else if (phone.length <= 10) {
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
                                        var data = JSON.stringify(testData) //objet to json

                                        dispatch(architectAction.addArchitectCrud(data, setAlertField)).then((res) => {

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

                                {({ errors, touched, handleChange, values, }) => (
                                    <Form className="maxWidthclass">

                                        <div className="row">
                                            <div className="col-md-6">

                                                <TextField
                                                    label="Ad Soyad"
                                                    name="fullName"
                                                    value={values.fullName}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.fullName}
                                                    // touched={touched.fullName}
                                                    helperText={touched.fullName && errors.fullName}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />



                                                <TextField
                                                    label="E-mail"
                                                    name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.email}
                                                    // touched={touched.email}
                                                    helperText={touched.email && errors.email}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />
                                                <TextField
                                                    label="Son iş yeri təcrübəsi"
                                                    name="experience"
                                                    value={values.experience}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.experience}
                                                    // touched={touched.experience}
                                                    helperText={touched.experience && errors.experience}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                <TextField
                                                    label="Özünüz haqqınızda qısa məlumat "
                                                    name="description"
                                                    value={values.description}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    multiline
                                                    minRows={4}
                                                    // error={errors.description}
                                                    // touched={touched.description}
                                                    helperText={touched.description && errors.description}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />

                                            </div>
                                            <div className="col-md-6">
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

                                                />  */}
                                                <PhoneInput

                                                    disableAreaCodes
                                                    className="mb-2 mt-2 col-md-12"
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
                                                /> {phonestatus ? <p style={{ color: "red", margin: 0 }}>telefon alanını boş girdiniz</p> : null}
                                                <TextField
                                                    label="Son aldığınız təhsil"
                                                    name="education"
                                                    value={values.education}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.education}
                                                    // touched={touched.education}
                                                    helperText={touched.education && errors.education}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                <TextField
                                                    label="Faktiki ünvan"
                                                    name="titles"
                                                    value={values.titles}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.titles}
                                                    // touched={touched.titles}
                                                    helperText={touched.titles && errors.titles}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                <TextField
                                                    type="password"
                                                    autoComplete="on"
                                                    label="Şifre"
                                                    onChange={handleChange}
                                                    name="password"
                                                    value={values.password}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.password}
                                                    // touched={touched.password}
                                                    helperText={touched.password && errors.password}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                <TextField
                                                    type="password"
                                                    label="Tekrar Şifre"
                                                    onChange={handleChange}
                                                    value={values.confirmPassword}
                                                    autoComplete="on"
                                                    name="confirmPassword"
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.confirmPassword}
                                                    // touched={touched.confirmPassword}
                                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                {/* <FormControlLabel control={<Checkbox />} label="İstifadə şərtlərini qəbul edirəm" /> */}

                                                <button type="submit" className="btn btn-primary tamamlaBtn" style={{ backgroundColor: "#01577D", width: "100%", borderRadius: 6 }}>Tamamla</button>
                                                <div className='registerBottomFrame' style={{width:'100%',marginBottom:22}}>
                                                    <label className="registerBottomText">
                                                        "Tamamla" düyməsini basaraq istifadəçi şərtlərini qəbul<br/>edirsiniz{"("}
                                                        <label className="c-blue">
                                                            İstifadəçi şərtləri
                                                        </label>
                                                        {")"}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#01577D", width: "100%", borderRadius: 6 }}>Tamamla</button> */}






                                    </Form>

                                )}
                            </Formik>

                            <span className="fo-title">
                                Komandamıza qoşulmaq üçün qeydiyyatı tamamladıqdan sonra  hr@oda.az mail ünvanına portfolio və cv ilə müraciət göndərməlisiniz.
                                Tərəfimizdən məqbul görüldüyü təqdirdə sizin qeydiyyat təsdiqlənəcək.Gəlsin sizə pullar! <span role="img" aria-label="img">💸</span>
                            </span>

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

export default ArchitectRegister;