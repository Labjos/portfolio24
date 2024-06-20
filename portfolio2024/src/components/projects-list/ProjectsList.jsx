import { useState } from 'react';
import './projectsList.css';
import projectsData from'../../data/projects.json';
import ProjectsItem from '../projects-item/ProjectsItem';
//import ProjectForm from '../project-form/ProjectForm';



function ProjectsList() {
  const [projects, setProjects] = useState(projectsData);



  return (
    <>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-2">
          {projects.map((project) => (
              <div key={project.id} className="col">
                <ProjectsItem 
                  project={project}
                  /></div>
            ))}
          
        </div>
    </>
  )
}

export default ProjectsList;