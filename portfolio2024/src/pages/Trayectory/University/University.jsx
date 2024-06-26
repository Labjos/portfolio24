import './University.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function University() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])


  return (
    <>
    <div className='container-university'>
    <div className='color-university' data-aos = "zoom-out">
        <p className='title-university'>Back to the University</p>
      </div>
      <div className='university-box'>
        <div className='text-university'>
          <p>ABT Ingenieria Medioambiental (ESP) 1992 | 1998</p>
          <p>UNIVERSIDAD DE CONGRESO (ARG) 2001 | 2007</p>
        </div>
      
        <div className='hobbies-university' data-aos = "zoom-out">
          <div className='text-hobbies' data-aos = "zoom-out">
            <p>I completed my Marketing degree while continuing to work.<br></br>
            bicycle and Triathlon, continue to be my passion</p>
            
            <img className='pictures' src='../../../../jos-chat.png' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../Josep.jpg' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-running.png' style={{ height: '90px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
    </div>
 </>
  )
}

export default University;