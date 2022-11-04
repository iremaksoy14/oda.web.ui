import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';



function PopupModal(props) {
    const { intl } = props;
    //butontext
    //type
    //text
    //title
    //color
    //bgcolor

    return (
        <div>
            <Modal

                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                contentClassName="alert-class"
                centered
            >
                <div style={{ backgroundColor: "#fff", color: "#000", borderRadius: "5px" }}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="text-center">

                            <div style={{ color: props.color }}>{props.title}</div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {props.text}
                    </Modal.Body>
                    <Modal.Footer>
                       
                     <button style={{backgroundColor:"green"}} className="modal-button-style btn btn-success" onClick={props.toPushPage ? () => props.toPushPage() : props.onHide}>Close</button>
                                


                        

                    </Modal.Footer>
                </div>
            </Modal>

        </div>
    );
}

export default PopupModal