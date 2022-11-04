import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/Images/layihler1png.png'
import img2 from '../../assets/Images/img2.png'
import { useHistory } from "react-router-dom";
export default function Layiheler() {
    const history = useHistory();

   
    return (
        <div className='container'>
            {data.map((data) => (
                <Card style={{ width: '350px', boxShadow: 'none', justifyContent: 'flex'}}>
                    <Card.Img variant="top" src={data} />
                    <Card.Body style={{ textAlign:"left" }}>
                        <Card.Title style={{ textAlign:"left", marginLeft: '-77px',marginTop:'9px' }}>Lorem Ipsum is simply dummy </Card.Title>
                        <Card.Text  style={{ textAlign:"left" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Card.Text>
                        <Button variant="link" href="/layihelerDetail" className='button'  style={{ marginLeft: '-294px' }}>Daha çox</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
const data = [
    img1,
    img2,
    img1, 
    img1,
    img2,
    img1, 
];

