import ProjectsList from '../../components/projects-list/ProjectsList';
import Footer from '../../components/ui/footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import TitlePage from '../../components/ui/title-page/TitlePage';
import './Projects.css';

function projects() {
  return (
    <>
    <Navbar />
    <TitlePage title='Projects' color='turquoise' text='"Samples of my published works, the models, the bootcamp projects, projects in progress and revisions... a little bit of everything, always trying to improve and continue learning."' />
    <div className='projects'><ProjectsList /></div>
    <Footer />
    </>
  )
}

export default projects;