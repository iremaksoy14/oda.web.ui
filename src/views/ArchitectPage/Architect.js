import React, { useState } from 'react';
import ArchitectCard from '../../components/SharedComponents/ArchitectCard/ArchitectCard';
import './Architect.css'
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import SliderImage from '../../components/SharedComponents/SliderImage/SliderImage';
import Modal from 'react-bootstrap/Modal';

export const Architect = () => {
    const architects = Array.apply(0, Array(10));
    const [modalShow, setModalShow] = React.useState(false);
    const [open, setOpen] = useState(false);
    let size = {
        width: 1046,
        height: 667,
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='archContainer'>
            <label className='archBoldText'>Seçilən insanlara, seçilmiş memarlar</label>
            <label className='archThinText'>İşinin mütəxəssisi olan memarlardan birini seç</label>
            <div className='archCardContainer'>
                {
                    architects.map((item) => {
                        return (<ArchitectCard setOpen={setOpen} />)
                    })
                }
            </div>
            <Modal
                onHide={handleClose}
                show={open}
                centered
                className='arcModal'
            >
                <SliderImage size={size} />
            </Modal>
        </div >
    )
}
export default Architect;