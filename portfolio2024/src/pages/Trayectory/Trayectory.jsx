import './Trayectory.css';

import Navbar from '../../components/ui/Navbar/Navbar';
import Drawing from './Drawing/Drawing';
import Marketing from './Marketing/Marketing';
import Studies from './Studies/Studies';
import Supervise from './Supervise/Supervise';
import University from './University/University';
import It from './It/It';


function Trayectory() {
  return (
    <div>
      <Navbar />
      <Studies />
      <Drawing />
      <Supervise />
      <University />
      <Marketing />
      <It />
    </div>
  )
}

export default Trayectory;