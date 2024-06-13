import ProjectsList from '../../components/projects-list/ProjectsList';
import Footer from '../../components/ui/footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import './Projects.css';

function projects() {
  return (
    <>
    <Navbar />
    <div className='projects'><ProjectsList /></div>
    <Footer />
    </>
  )
}

export default projects;