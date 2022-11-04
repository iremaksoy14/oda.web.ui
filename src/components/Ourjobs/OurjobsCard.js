
import React from 'react';
import Card from 'react-bootstrap/Card';

function OurjobsCard(props) {

  return (
     
    <div className='jobcard' style={{paddingBottom:0,marginBottom:110}}>
      <img src={props.img} className='bizimIslerImage'></img>
      <label className='bizimIslerTitle'>{props.title}</label>
      <label className='bizimIslerContentText'>{props.content}</label>

      {/* <Card.Img variant="top" src={props.img} style={{width:390,height:316}}/>
      <Card.Body>
        <Card.Text className='ourjobs-text'>
          <p>{props.title}</p>  
          <p>{props.content}</p>
        </Card.Text>       
      </Card.Body> */}
    </div> 
    
  );
}

export default OurjobsCard;