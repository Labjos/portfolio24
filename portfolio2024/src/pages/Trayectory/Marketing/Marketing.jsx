import './Marketing.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Marketing() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])




  return (
    <>
      <div className='color-marketing' data-aos = "zoom-in">
        <p className='titulo-marketing'>Marketing & Entrepreneurships</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>ESTABLECIMIENTO LAHUEN</p>
          <p>RESTAURANTE A LA SOMBRA</p>
          <p>TELTECA TOURS</p>
          <p>COMERCIALIZADORA DE BEBIDAS - MUNDO SUR</p>
        </div>
        <div className='draw' data-aos = "zoom-in">
          <div className='text-hobbies'>
            <p>Tourism and Food and Beverages</p>
          </div>
          <div data-aos = "zoom-in-rigth">
            <img className='pictures' src='../../../../alasombra.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos y nacho.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-agencia.png' style={{ height: '100px'}} alt='imagen de joven' />
            
         </div>
        </div>
    </div>
  </>
  )
}

export default Marketing;