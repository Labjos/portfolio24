import ButtonLike from '../ui/Button-like/ButtonLike';
import './ProjectsItem.css';

import { Link } from 'react-router-dom';


function ProjectsItem({ project }) {
  

  



  return (
          <div className="project position-relative">
            <img className='image-project' src={project.image}  alt={project.title} />
            <div className="overlay position-absolute top-0 end-0" style={{ right: '10px'}}>
              <ButtonLike />
              <p>{project.title}</p>
              <div className="iconsContainer">
                <Link to={project.linkGit} target="" rel="noopener noreferrer"><i className="bi bi-github"></i></Link>
                <Link to={project.linkWeb} target="" rel="noopener noreferrer"><i className="bi bi-laptop"></i></Link>
              </div>
            </div>
          </div>
  )
}

// ProjectsItem.defaultProps = {
//   onToogleHeart: () = {}
// }




export default ProjectsItem;