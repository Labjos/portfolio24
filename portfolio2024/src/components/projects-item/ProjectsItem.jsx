import ButtonLike from '../ui/Button-like/ButtonLike';
import './ProjectsItem.css';

import { Link } from 'react-router-dom';


function ProjectsItem({ project }) {
  

  return (
          <div className="project position-relative">
            <img className='image-project' src={project.image}  alt={project.title} />
            <div className="overlay position-absolute top-0 end-0" style={{ right: '10px'}}>

              <div className='marc'>
             
                <p className='text-overlay'>{project.title}</p>
                <ButtonLike />
                </div>
              
              <div className="icons-Container">
                <Link to={project.linkGit} target="" rel="noopener noreferrer"><i className="bi bi-github picture"></i></Link>
                <Link to={project.linkWeb} target="" rel="noopener noreferrer"><i className="bi bi-laptop picture"></i></Link>
              </div>
              <div className='description'>
                <p>{project.description}</p>
                </div>
              </div>
            </div>
            
  )
}

// ProjectsItem.defaultProps = {
//   onToogleHeart: () = {}
// }




export default ProjectsItem;