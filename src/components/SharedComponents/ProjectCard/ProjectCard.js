import  React  from 'react';
import './ProjectCard.css';
import image from '../../../assets/Images/projects.svg'
import { useHistory } from 'react-router-dom';
export const ProjectCard =()=>{
    const history = useHistory();
    const title = "Lorem Ipsum is simply dummy"
    const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    const imgPath = ""
    return(
        <div className="projectCardFrame">
            <img src={image}/>
            <label className='bldCardText'>{title}</label>
            <label className='thnCardText'>{content}</label>
            <label className='moreText' onClick={()=>{history.push('/projectContent')}}>Daha çox</label>
        </div>
    )
}
export default ProjectCard;