import './It.css';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function It() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])



  return (
    <div>
     <>
     <div className='color-it' data-aos = "flip-up">< Link className='link'  to="/register">
        <p className='titulo'>IT</p></Link>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>UNIVERSIDAD TECNOLOGICA NACIONAL </p>
          <p>CODERHOUSE</p>
          <p><strong>IRONHACK</strong></p>
        </div>
        <div className='draw' data-aos = "flip-down">
          <div className='text-hobbies'>
            <p>Estudiar desarrollo web y regresar a España</p>
          </div>
          <div data-aos = "flip-up">
            <img className='pictures' src='../../../../jos.JPG' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos y facu.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-glauka.jpg' style={{ height: '100px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
  </>
    
    </div>
  )
}

export default It;