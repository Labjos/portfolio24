import './Drawing.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Drawing() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])

  return (
    <>
      <div className='color-drawing' data-aos = "flip-down">
        <p className='title'>Professional Activity</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>AUGUSTA II (Estudio de Arquitectura) 1989 | 1992</p>
          <p>PANADELL & CAMPELL (Estudio de Diseño) 1990 | 1992</p>
        </div>
      
        <div className='draw'>
          <div className='text-hobbies'>
            <p></p>Years where I was able to learn and grow as a professional, living and understanding how to work as a team, I was lucky to have excellent mentors... Always grateful!
          </div>
          <div data-aos = "flip-up">
            <img src='../../../../foto-draw.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-sport.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-bici.jpg' style={{ height: '100px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
  </>
  )
}

export default Drawing;