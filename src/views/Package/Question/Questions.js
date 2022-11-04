import React, { useState } from 'react'
import './index.css'
import { ErrorMessage, Formik, Form } from 'formik';
import * as Yup from 'yup';
import harita from '../../../assets/Images/harita.png'
import { useDispatch } from "react-redux";
import email from '../../../assets/Images/email.png'
import navigation from '../../../assets/Images/navigation.png'
import phone from '../../../assets/Images/phone.png'
import { TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import * as  questionAction from '../../../Store/_redux/AuthStore/authActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import PopupModal from '../../../Modals/PopupModal';
import phoneImage from '../../../assets/Images/phoneImage.svg'
import mailBoxImage from '../../../assets/Images/mailBoxImage.svg'
import locationImage from '../../../assets/Images/locationImage.svg'
const validationSchema = Yup.object().shape({
    question: Yup.string().required('Required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    fullName: Yup.string().required('Required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    phone: Yup.number().typeError('you must specify a number').required('phoneNumber is Required'),
});


export default function Questions() {
    const dispatch = useDispatch()
    const [alertField, setAlertField] = useState({
        title: "",
        text: "",
        show: false,
        color: "#23ba47"
    })
    return (
        <div className='question-page'>
            <div className='question'>
                <span className='title_sual'>Sualınız var?</span>
                <label className='prag'>Bizə yazın, sizə qaranlıq qalan<br />bütün suallarınızı işıqlandıraq.🤩</label>
                <div>
                    <Formik
                        initialValues={{
                            fullName: '',
                            question: '',
                            password: '',

                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            var data = {
                                message: values.question,
                                phone: values.phone,
                                fullName: values.fullName,
                                answered: false

                            }
                            dispatch(questionAction.addQuestions(data, setAlertField)).then((res) => {
                            })
                        }}
                    >
                        {({ errors, touched, handleChange, values, }) => (
                            <Form>
                                <div >
                                    <div className='gap30' style={{width:493}}>
                                        <TextField
                                            label="Adınız"
                                            name="fullName"
                                            value={values.fullName}
                                            onChange={handleChange}
                                            className="mt-2 col-md-12 textFields"
                                            error={errors.fullName}
                                            touched={touched.fullName}
                                        />
                                        <TextField
                                            label="Əlaqə nömrəniz"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            className="marginT30 col-md-12 textFields"
                                            error={errors.phone}
                                            touched={touched.phone}
                                        />
                                        <TextField
                                            label="Sualınız"
                                            name="question"
                                            value={values.question}
                                            onChange={handleChange}
                                            className="marginT30 col-md-12 textFields"
                                            multiline
                                            minRows={4}
                                            error={errors.question}
                                            touched={touched.question}
                                        />
                                    </div>
                                </div>
                                <div className='gonder_buttonFrame' style={{width:493}}>
                                    <button type="submit" className="gonder_button" >Gönder</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <div className='question_column'>
                <div><p className='alaga_text'>Əlaqə</p></div>
                <div className='information_class'>
                    <div className='information_submenu'>
                        <div className='information_submenu_menu'>
                            <img style={{ width: 16, height: 16, marginRight: 10 }} src={phoneImage} alt="" />
                            <p style={{ color: "#515151" }}>+994555555555</p>
                        </div>
                        <div className='information_submenu_menu'>
                            <img style={{ width: 16, height: 16, marginRight: 10 }} src={phoneImage} alt="" />
                            <p style={{ color: "#515151" }}>+994555555555</p>
                        </div>
                    </div>
                    <div className='information_submenu'>
                        <div className='information_submenu_menu'>
                            <img style={{ width: 16, height: 16, marginRight: 10 }} src={mailBoxImage} alt="" />
                            <p style={{ color: "#515151" }}>+info@oda.az</p>
                        </div>
                        <div className='information_submenu_menu'>
                            <img style={{ width: 16, height: 16, marginRight: 10 }} src={locationImage} alt="" />
                            <p style={{ color: "#515151" }}>Baki/Azerbaycan. Nizami m/s.Caspian/Plaza</p>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 20, marginLeft: 30 }}><img className='map_class' src={harita} alt="" /></div>
                <div className='last_text'>
                    <div><label className='hour_text'>Ofis calısma saatleri:</label></div>
                    <div><p className='day_text'> Hafta içi her gün 10.00-16.00</p> </div>
                </div>
            </div>
            <PopupModal
                {...alertField}
                show={alertField.show}
                onHide={() => setAlertField(value => ({ ...value, show: false }))}
            />
        </div>
    )
}