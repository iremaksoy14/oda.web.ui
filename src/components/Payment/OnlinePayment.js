import React from 'react'
import './style.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { TextField, Box } from "@mui/material";
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import home from '../../assets/Images/House With Garden.png'
import park from '../../assets/Images/National Park.png'
import resim from '../../assets/Images/payment.png'
const validationSchema1 = Yup.object().shape({
    fullName: Yup.string().required('Zaruri'),
    email: Yup.string().email('səhv e-mail').required('Email ünvanı dəyişdirilə bilməz'),
    dateOfBirth: Yup.date().required(),
});
export default function OnlinePayment() {
    const history = useHistory()
    const initialValues1 = {
        fullName: '',
        email: '',
        dateOfBirth: ""
    }
    return (
        <div  >
            <div style={{ width: 255 }}><p className='text'>Kart ilə ödəmə</p></div>


            <div className='payment_container' style={{ width:1000,margin: 'auto' }}>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-6" >
                            <img src={resim} className='paymentImg' />
                            <div className='form'>
                                <div class="col-lg-12">

                                    {/* <div><p>Məlumatlarım</p></div> */}
                                    <Formik
                                        initialValues={initialValues1}
                                        validationSchema={validationSchema1}
                                        onSubmit={(values) => {
                                        }}
                                    >
                                        {({ errors, touched, handleChange, values }) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <TextField
                                                            variant="outlined"
                                                            label="Kart sahibinin adı "
                                                            name="fullName"
                                                            value={values.fullName}
                                                            onChange={handleChange}
                                                            className="mb-2 mt-2 col-md-12"
                                                            error={errors.fullName}
                                                            touched={touched.fullName}

                                                        />


                                                        <TextField
                                                            name="email"
                                                            label="Kart nömrəsi"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            className="mb-2 mt-2 col-md-12"
                                                            error={errors.email}
                                                            touched={touched.email}

                                                        />


                                                        <TextField
                                                            name="email"
                                                            label="Son istifadə tarici"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            className="mb-2 mt-2 col-md-12"
                                                            error={errors.email}
                                                            touched={touched.email}

                                                        />



                                                    </div>

                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6" >
                            <div class='col-lg-6' >
                                <div className="orderBox">
                                    <div style={{ width: 385, marginLeft: 25, marginTop: 10 }}><p className='text-order'>Sifariş №0001</p></div>
                                    <div className='card_row'>
                                        <div className='card_section'>
                                            <p style={{ margin: 0 }}>Bütün ev</p>
                                            <img src={home} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                                        </div>
                                        <div className='card_section_text'>
                                            <p className='textFont'>250 ₼</p>
                                        </div>
                                    </div>
                                    <div className='card_row'>
                                        <div className='card_section'>
                                            <p style={{ margin: 0 }}>Landşaft</p>
                                            <img src={park} style={{ height: 28, width: 30, marginLeft: 11 }} alt="" />
                                        </div>
                                        <div className='card_section_text'>
                                            <p className='textFont'>250 ₼</p>
                                        </div>
                                    </div>
                                    <div className='card_row'>
                                        <div className='text-bottom '>
                                            <p style={{ margin: 0, marginLeft: -256 }}>Xidmətə Ə.D.V. daxildir.</p>

                                        </div>

                                    </div>
                                    <div className='text-top-bottom'>
                                        Total: 500 AZN
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => history.push("/packages")} className='button'>Elə indi ödə</button>
                            <div className='text-container'>
                                <p className='text-wp'>Whatsapp  dəstək xidməti</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
