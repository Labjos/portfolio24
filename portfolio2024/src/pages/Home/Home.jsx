import './Home.css';
import Line from '../../components/ui/line-time/Line';
import Box from '../../components/ui/box/Box';
import Jos from '../../components/ui/Jos/Jos';
import { Link } from 'react-router-dom';




function Home() {
  return (
    
  <div className="home">
    <div>
      <Line />
    </div>
    <div className='boxes'>
      <Link to='/trayectory' style={{ textDecoration: 'none' }}><Box className='box-one' text="STUDIES" /></Link>
      <Link to='/trayectory' style={{ textDecoration: 'none' }}><Box className='box-two' text="DRAWING AND DESIGN" /></Link>
      <Link to='/trayectory' style={{ textDecoration: 'none' }}><Box className='box-three' text="PROJECT AND SUPERVISE" /></Link>
      <Link to='/trayectory' style={{ textDecoration: 'none' }}><Box className='box-four' text="PROJECT, SUPERVISE AND RETURN TO UNIVERSITY" /></Link>
      <Link to='/trayectory' style={{ textDecoration: 'none' }}><Box className='box-five' text="MARKETING AND TOURISM ENTREPRENEURSHIPS" /></Link>
      <Link to='/register'><Box className='box-six' text=" IT " /></Link>
    </div>
    <div>
      <Jos />
    </div>
  </div>
  )
}

export default Home;