import React from 'react';
import "./style.css"
import logo3 from "../../assets/Images/usertype1.png";
import logo2 from "../../assets/Images/usertype2.png";
import logo1 from "../../assets/Images/usertype3.png";

const data = [
    { logo: logo1, text: "Müştəri", id: 1 },
    { logo: logo2, text: "Şirkət", id: 2 },
    { logo: logo3, text: "Memar", id: 3 },
]

function UserType(props) {
    return (
        <div className='register-page'>
            <p className='main-title' style={{ marginLeft: 33, marginTop: 89 }}>Qeydiyyat</p>
            <hr style={{ marginLeft: 33 }} />
            <span className='title2' style={{ marginLeft: 33, marginTop: 49 }}>Zəhmət olmasa qeydiyyat tipini seçin.</span>
            <div className='register-item' style={{ marginBottom: 90, marginTop: 22 }}>
                <div className='usertype'>
                    {data.map(item =>
                        <div className='center' key={item.id} onClick={() => props.selectType(item.id)}>
                            <img src={item.logo} alt="register" />
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserType;