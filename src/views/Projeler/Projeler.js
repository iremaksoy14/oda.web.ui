import React from 'react';
import './Projeler.css';
import SideNavBar from './../../components/layout/MainSidebar/SideNavBar';
import  ProjectCard  from './../../components/SharedComponents/ProjectCard/ProjectCard';

export const Projeler =()=>{
    return(
        <div className="projectsContainer">
            <div style={{position:'relative',marginLeft:25}}>
                <SideNavBar />
            </div>
            <div className='projectCardContainer'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Projeler;