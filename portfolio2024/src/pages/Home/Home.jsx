import './Home.css';
import Line from '../../components/ui/line-time/Line';
import Box from '../../components/ui/box/Box';
import Jos from '../../components/ui/Jos/Jos';



function Home() {
  return (
    
  <div className="home">
    <div>
      <Line />
    </div>
    <div className='boxes'>
      <Box className='box-one' text="STUDIES" />
      <Box className='box-two' text="DRAWING AND DESIGN" />
      <Box className='box-three' text="PROJECT AND SUPERVISE" />
      <Box className='box-four' text="PROJECT, SUPERVISE AND RETURN TO UNIVERSITY" />
      <Box className='box-five' text="MARKETING AND TOURISM ENTREPRENEURSHIPS" />
      <Box className='box-six' text=" IT " />
    </div>
    <div>
      <Jos />
    </div>
  </div>
  )
}

export default Home;