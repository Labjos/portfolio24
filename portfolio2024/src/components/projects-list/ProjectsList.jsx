import { useState } from 'react';
import './projectsList.css';
import projectsData from'../../data/projects.json';
import ProjectsItem from '../projects-item/ProjectsItem';



function ProjectsList() {
  const [projects, setProjects] = useState(projectsData);


  return (
    <div className="row row-cols-3 g-2">
        
          {projects.map((project) => (
            <div key={project.id} className="col">
              <ProjectsItem 
                project={project}
                /></div>
          ))}
        
      </div>
    
  )
}

export default ProjectsList;