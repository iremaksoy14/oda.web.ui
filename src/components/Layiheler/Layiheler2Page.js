import React from 'react'
import './style.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../assets/Images/layihler1png.png'
import img1 from '../../assets/Images/layiha2Page.png'
import img2 from '../../assets/Images/layiha2Page2.png'
export default function Layiheler2Page() {
    return (
        <div className='newcontainer'>
            <Card style={{ width: '350px', boxShadow: 'none' }}>
               
            <Card.Img variant="top" src={data} style={{ width: "738px", height: "598px" }} />
            <Card.Img variant="top" src={img1} style={{ width: "461px", height: "358px",marginLeft:'766px',marginTop:'-599px' }} />
            <Card.Img variant="top" src={img2} style={{ width: "461px", height: "188px",marginLeft:'766px',marginTop:'29px' }} />

                <Card.Body style={{ textAlign: "left", marginTop: "0px" }}>
                    <Card.Title style={{ textAlign: "left", marginLeft: '-120px',color: "black" }}>Why do we use it?</Card.Title>
                    <Card.Text style={{ textAlign: "left", width: "789px", marginLeft: '488px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                        English.
                    </Card.Text>
                    <Card.Text style={{ textAlign: "left", width: "789px", marginLeft: '488px' }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                        English.
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    )
}
