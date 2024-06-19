import './Trayectory.css';

import Navbar from '../../components/ui/Navbar/Navbar';
import Drawing from './Drawing/Drawing';
import Marketing from './Marketing/Marketing';
import Studies from './Studies/Studies';
import Supervise from './Supervise/Supervise';
import University from './University/University';
import It from './It/It';
import Footer from '../../components/ui/footer/Footer';
import TitlePage from '../../components/ui/title-page/TitlePage';



function Trayectory() {

  return (
    <div>
      <Navbar />
      <TitlePage title='Trajectory' color='grey' text='It is a true privilege to be able to do everything I am passionate about while I am working. I never knew how to sit still, once again I have decided to try' />
      <Studies />
      <Drawing />
      <Supervise />
      <University />
      <Marketing />
      <It />
      <Footer />
    </div>
  )
}

export default Trayectory;