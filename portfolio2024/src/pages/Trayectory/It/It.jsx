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
    
     <>
     <div className='container-tec'>
     <div className='color-tec' data-aos = "flip-up">< Link className='link'  to="/register">
        <p className='title-tec'>IT</p></Link>
      </div>
      <div className='box-tec'>
        <div className='text-tecnolo'>
        <p>Curso Marketing Digital</p>
          <p>Certificado Digitaliza y Seguridad GOOGLE</p>
          <p>Marketing Digital Certificado GOOGLE</p>
          <p>UNIVERSIDAD TECNOLOGICA NACIONAL </p>
          <p>CODERHOUSE</p>
          <p><strong>IRONHACK</strong></p>
        </div>
        <div className='hobbies-tec' data-aos = "flip-down">
          <div className='text-hobbies'>
            <p>Study Web Development and return to Spain.<br></br> Two important decisions that made us start again</p>
          </div>
          <div data-aos = "flip-up">
            <img className='pictures' src='../../../../jos.JPG' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos y facu.png' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-glauka.jpg' style={{ height: '90px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
    </div>
  </>

  )
}

export default It;