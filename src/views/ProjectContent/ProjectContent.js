import React from 'react';
import image from '../../assets/Images/projects.svg'
import image1 from '../../assets/Images/projectContent1.svg'
import image2 from '../../assets/Images/projectContent2.svg'
import './ProjectContent.css'
import SideNavBar from './../../components/layout/MainSidebar/SideNavBar';
import { classNames } from 'classnames';
export const ProjectContent =()=>{
    const question = "Why do we use it?";
    const content1 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    const content2 = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    return(
        <div className="projectContentContainer">
            <div className='firstDiv'>
                <div>
                    <SideNavBar />
                </div>
                <div>
                    <img src={image} alt="" />
                    <div>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div> 
                </div>
            </div>
            <div className='secondDiv'>
                <label>{question}</label>
                <label>{content1}</label>
                <label>{content2}</label>
            </div>
        </div>
    )
}
export default ProjectContent;