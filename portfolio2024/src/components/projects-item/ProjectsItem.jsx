import './ProjectsItem.css';


function ProjectsItem({ project }) {
  return (
          <div className="project position-relative">
            <img className='image-project' src={project.image}  alt={project.title} />
            <div className="overlay position-absolute top-0" style={{ right: '10px'}}>
            <i className="bi bi-bookmark-heart"></i>
              <p>{project.title}</p>
              <div className="iconsContainer">
                <a href="" target="" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                <a href="" target="" rel="noopener noreferrer"><i className="bi bi-laptop"></i></a>
              </div>
            </div>
          </div>
  )
}
export default ProjectsItem;