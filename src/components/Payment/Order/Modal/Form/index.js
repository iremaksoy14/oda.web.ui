import React, { useState } from 'react';
import '../app.css'
import * as Yup from 'yup';
import { ErrorMessage, Formik, Form } from 'formik';
import * as actionsAuth from "../../../../../Store/_redux/AuthStore/authSlice"
import * as actions from '../../../../../Store/_redux/AuthStore/authActions'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import RegisterModal from '../Container/RegisterModal';

const validationSchema = Yup.object().shape({


    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),

});

export const FormComponent = ({ onClick, selected , triggertext}) => {
    const history = useHistory()
    const actionAuthSlice = actionsAuth.Slice;
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    console.log(selected)
    const logout = () => {
        localStorage.removeItem('@authToken')
        dispatch(actionAuthSlice.actions.logOut())
        history.push("/register")
    }
    return (
        <div className="form_column_class">

            <p className='complete_malumat_header'> Sifarişi tamamlamaq üçün
                aşağıdakı məlumatları daxil edin</p>
            <p className='complete_malumat_text'>Daxil Ol</p>

            <Formik
                initialValues={{

                    email: "",

                    password: ""
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(actions.userStoreIdentitiyAction({ email: values.email, password: values.password }))
                        .then((response) => {

                            if (response.success) {
                                dispatch(actionAuthSlice.actions.loginUser(response.data.user))
                                dispatch(actionAuthSlice.actions.loginUserName(response.data.user))

                                onClick()

                                if (selected === "Kart ilə") {
                                    history.push("/onlinePayment")
                                }
                                else if (selected === "Köçürmə") {
                                    history.push("/otherPayment")
                                }
                                else if (selected === "Nağd") {
                                    history.push("/cashPayment")

                                }
                            } else {


                                setMessage("Hatalı email veya şifre")


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



                }}

            >
                {({ errors, touched, handleChange, values }) => (
                    <Form style={{ margin: 0, maxWidth: "100%" }}>

                        <div className="row">
                            <div className="col-md-12">

                                <TextField
                                    label="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="mb-2 mt-2 col-md-12"
                                    // error={errors.businessSectorOfCompany}
                                    // touched={touched.businessSectorOfCompany}
                                    helperText={touched.email && errors.email}
                                    FormHelperTextProps={{
                                        classes: {
                                            root: "text-danger"
                                        }
                                    }}

                                />






                            </div>
                            <div className="col-md-12">



                                <TextField
                                    label="Şifrə"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    className="mb-2 mt-2 col-md-12"
                                    //  error={errors.officialCompanyEmailAddress}
                                    //  touched={touched.officialCompanyEmailAddress}
                                    helperText={touched.password && errors.password}
                                    FormHelperTextProps={{
                                        classes: {
                                            root: "text-danger"
                                        }
                                    }}
                                />
                                <p className="text-danger">{message}</p>






                                {/* <div onClick={logout} className="daxil_button"><p className="login_daxil_tex">Hesabınız yoxdur? <span className='login_daxil_span'>Qeydiyyatdan keçmək</span> </p></div> */}


                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#01577D", width: "100%", borderRadius: 6 }}>Tamamla</button>
                            </div>
                        </div>




                    </Form>
                )}
            </Formik>
        </div>

    );
};
export default FormComponent;
