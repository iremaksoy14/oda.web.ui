
import React, { useState } from "react";
import { TextField } from "@mui/material";
import "../.././index.css"
import { ErrorMessage, Formik, Form } from 'formik';
import PhoneInput from 'react-phone-input-2'
import PopupModal from '../../Modals/PopupModal'
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'
import * as Yup from 'yup';
import * as companyAction from '../../Store/_redux/CompaniesStore/companiesAction'
import leftImg from "./../../assets/Images/usertype-arcitecture-left.png"
import { useHistory } from "react-router-dom";
import "./style.css"


const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Zəruri'),
    companyTitle: Yup.string().required('Zəruri'),
    //    companyCommunicationNumber: Yup.number().typeError('nömrə daxil etməlisiniz').required('Zəruri'),
    officialCompanyEmailAddress: Yup.string().email('E-mail ünvanı səhvdir').required('Zəruri'),
    nameOfContactPerson: Yup.string().required('Zəruri'),
    //    contactNumberOfContactPerson:Yup.number().typeError('nömrə daxil etməlisiniz').required('Zəruri'),
    businessSectorOfCompany: Yup.string().required('Zəruri'),
    password: Yup.string().min(6).matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/).required('Zəruri'),
    confirmPassword: Yup.string().min(6).oneOf([Yup.ref('password')], 'iki parol uyğun gəlmir.').required('Zəruri').matches(/^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/),
});

function PartnerRegister(props) {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState("")
    const [companyCommunicationNumber, setcompanyCommunicationNumber] = useState("")

    const [phonestatus, setPhonestatus] = useState(false)
    const [companyCommunicationNumberstatus, setcompanyCommunicationNumberstatus] = useState(false)

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
    const setPhoneCommunicationFunc = (val) => {
        setcompanyCommunicationNumber(val)
        if (companyCommunicationNumber === "") {
            setcompanyCommunicationNumberstatus(true)
        }
        else if (companyCommunicationNumber.length < 10) {
            setcompanyCommunicationNumberstatus(true)
        }

        else {
            setcompanyCommunicationNumberstatus(false)

        }
    }
    const [alertField, setAlertField] = useState({
        title: "",
        text: "",
        show: false,
        color: "#23ba47"
    })
    const history = useHistory()
    const navigateLogin =()=>{
        history.goBack();;
    }
    return (
        <div className='register-page'>
            <p className='main-title'>Qeydiyyat</p>
            <hr />
            <div className='register-item'>
                <div className='customertype'>
                    <div className="form-content">
                        <span className="title-span" style={{ margin: 'auto' }}>Şirkətini bütün dünyaya tanıt!</span>
                        <span className="sub-Title" style={{ marginTop: 10 ,zIndex:2}} onClick={props.login}>Hesabın var? <span className="link"  onClick={navigateLogin}>Daxil ol </span></span>
                        <div className="card-block px-2 p-equal">

                            <Formik
                                initialValues={{
                                    companyName: '',
                                    companyTitle: '',
                                    companyCommunicationNumber: '',
                                    officialCompanyEmailAddress: '',
                                    nameOfContactPerson: '',
                                    contactNumberOfContactPerson: "",
                                    businessSectorOfCompany: "",
                                    password: "",
                                    confirmPassword: "",
                                    phoneNumber: ""
                                }}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {

                                    var name = values.nameOfContactPerson.split(" ");
                                    var data = {

                                        email: values.officialCompanyEmailAddress,
                                        firstName: name[0],
                                        lastName: name[1],
                                        roleName: "companie",
                                        password: values.password,
                                        phoneNumber: phone,
                                        confirmPassword: values.confirmPassword,
                                        companie: {
                                            name: values.companyName,
                                            vatNumber: companyCommunicationNumber,
                                            sector: values.businessSectorOfCompany,
                                            title: values.companyTitle,
                                            ownerNumber: phone
                                        }

                                    }

                                    var testData = JSON.stringify(data)
                                    // console.log(name[1])

                                    console.log(testData)
                                    if (name[1] === undefined || name[1] === "" || phone === "" || phone === undefined || companyCommunicationNumber === undefined || companyCommunicationNumber === "" || companyCommunicationNumber.length < 10) {
                                        if (phone === "" || phone === undefined) {
                                            setPhonestatus(true)
                                        } else {
                                            setPhonestatus(false)
                                        }
                                        if (companyCommunicationNumber === "" || companyCommunicationNumber === undefined || companyCommunicationNumber.length < 10) {
                                            setcompanyCommunicationNumberstatus(true)
                                        } else if (companyCommunicationNumber.length < 10) {
                                            setcompanyCommunicationNumberstatus(true)
                                        }
                                        else {
                                            setcompanyCommunicationNumberstatus(false)


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


                                        dispatch(companyAction.addCompanyCrud(testData, setAlertField)).then((res) => {
                                            console.log(res)
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


                                            // console.log(res)
                                        })


                                    }

                                }}
                            >
                                {({ errors, touched, handleChange, values }) => (
                                    <Form className="maxWidthclass" >

                                        <div className="row">
                                            <div className="col-md-6">
                                                <TextField
                                                    label="Şirkətin adı"
                                                    name="companyName"
                                                    value={values.companyName}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.companyName}
                                                    // touched={touched.companyName}
                                                    helperText={touched.companyName && errors.companyName}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />

                                                {/* <TextField 
                                            name="companyCommunicationNumber"
                                            label="Şirkətin əlaqə nömrəsi" 
                                            value={values.companyCommunicationNumber}
                                            onChange={handleChange}
                                            className="mb-2 mt-2 col-md-12"
                                            // error={errors.companyCommunicationNumber}
                                            // touched={touched.companyCommunicationNumber}
                                            helperText={touched.companyCommunicationNumber && errors.companyCommunicationNumber}
                                            FormHelperTextProps={{
                                                classes:{
                                                    root:"text-danger"
                                                }
                                        }}
                                        /> */}
                                                <PhoneInput

                                                    disableAreaCodes
                                                    className="mb-2 mt-2 col-md-12"

                                                    inputStyle={{
                                                        width: "100%",
                                                        height: 56,
                                                        fontSize: 13,
                                                        paddingLeft: 48,
                                                        borderRadius: 5
                                                    }}
                                                    country={'tr'}
                                                    value={companyCommunicationNumber}
                                                    onChange={(val) => setPhoneCommunicationFunc(val)}
                                                />
                                                {companyCommunicationNumberstatus && <p style={{ color: "red", margin: 0 }}>telefon alanını boş girdiniz</p>}



                                                <TextField
                                                    label="Şirkətin fəaliyyət sektoru"
                                                    name="businessSectorOfCompany"
                                                    value={values.businessSectorOfCompany}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.businessSectorOfCompany}
                                                    // touched={touched.businessSectorOfCompany}
                                                    helperText={touched.businessSectorOfCompany && errors.businessSectorOfCompany}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}

                                                />
                                                <TextField
                                                    label="Əlaqədar şəxsin adı ve soyadı "
                                                    name="nameOfContactPerson"
                                                    value={values.nameOfContactPerson}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    helperText={touched.nameOfContactPerson && errors.nameOfContactPerson}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />




                                            </div>
                                            <div className="col-md-6">
                                                <TextField
                                                    label="Şirkətin ünvanı"
                                                    name="companyTitle"
                                                    value={values.companyTitle}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    // error={errors.companyTitle}
                                                    // touched={touched.companyTitle}
                                                    helperText={touched.companyTitle && errors.companyTitle}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />

                                                <TextField
                                                    label="Rəsmi şirkət email ünvanı"
                                                    name="officialCompanyEmailAddress"
                                                    value={values.officialCompanyEmailAddress}
                                                    onChange={handleChange}
                                                    className="mb-2 mt-2 col-md-12"
                                                    //  error={errors.officialCompanyEmailAddress}
                                                    //  touched={touched.officialCompanyEmailAddress}
                                                    helperText={touched.officialCompanyEmailAddress && errors.officialCompanyEmailAddress}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />

                                                {/* <TextField 
                                            label="Əlaqədar şəxsin əlaqə nömrəsi" 
                                            name="contactNumberOfContactPerson"
                                            value={values.contactNumberOfContactPerson}
                                            onChange={handleChange}                                       
                                            className="mb-2 mt-2 col-md-12"
                                            //  error={errors.contactNumberOfContactPerson}
                                            //  touched={touched.contactNumberOfContactPerson}
                                            helperText={touched.contactNumberOfContactPerson && errors.contactNumberOfContactPerson}
                                            FormHelperTextProps={{
                                                classes:{
                                                    root:"text-danger"
                                                }
                                        }}

                                        />  */}
                                                <PhoneInput

                                                    disableAreaCodes
                                                    className="mb-2 mt-2 col-md-12"

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
                                                />
                                                {phonestatus && <p style={{ color: "red", margin: 0 }}>telefon alanını boş girdiniz</p>}



                                                <TextField
                                                    type="password"
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
                                                    name="confirmPassword"
                                                    value={values.confirmPassword}
                                                    // error={errors.confirmPassword}
                                                    // touched={touched.confirmPassword}
                                                    className="mb-2 mt-2 col-md-12"
                                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                                    FormHelperTextProps={{
                                                        classes: {
                                                            root: "text-danger"
                                                        }
                                                    }}
                                                />

                                                {/* <FormControlLabel control={<Checkbox />} label="İstifadə şərtlərini qəbul edirəm" /> */}

                                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#01577D", width: "100%", borderRadius: 6 }}>Tamamla</button>
                                                <div className='registerBottomFrame' style={{ width: '100%', marginBottom: 22 }}>
                                                    <label className="registerBottomText">
                                                        "Tamamla" düyməsini basaraq istifadəçi şərtlərini<br/>qəbul edirsiniz{"("}
                                                        <label className="c-blue">
                                                            İstifadəçi şərtləri
                                                        </label>
                                                        {")"}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>




                                    </Form>
                                )}
                            </Formik>
                            <span className="fo-title">
                                Şirkət qeydiyyatı sadəcə BIM kateqoriyasına aiddir. Qeydiyyat tərəfimizcə
                                incələnəcək və məqbul olduğu təqdirdə qeydiyyatınız  tamamlanacaqdır. Ətraflı məlumat üçün <span className="bim"><u>BIM Obyekt</u></span>
                            </span>

                        </div>
                    </div>
                </div>
                <PopupModal
                    {...alertField}
                    show={alertField.show}
                    onHide={() => setAlertField(value => ({ ...value, show: false }))}
                />
            </div>
        </div>
    );
}

export default PartnerRegister;