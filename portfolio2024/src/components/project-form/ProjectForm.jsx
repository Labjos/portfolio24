import { useState } from 'react';
import './ProjectForm.css';





function ProjectForm() {
const [project, setProject] = useState(
  {
    title: '',
    image: ''
  }
)

const handleChange = (e) => {
  const { name, value} = e.currentTarget;
  setProject ({
    ...project, 
    [name]: value

  })
  
 
}
const handleSubmit = () => {

} 


  return (
    <form onSubmit={handleSubmit}>
      <div className='input-group mb-3'>
        <span className='input-group-text' ><i className="bi bi-tags-fill"></i></span>
        <input type='text'  name='title' value={project.title} onChange={handleChange} className='form-control' placeholder='Project Title' />


      </div>
    
    
    </form>
  )
}

export default ProjectForm;