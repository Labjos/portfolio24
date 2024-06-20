import './Supervise.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Supervise() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])



  return (
    <>
      <div className='container-supervise'>
      <div className='color-supervise' data-aos = "fade-down">
        <p className='title-supervise'>Professional - Big Changes</p>
      </div>
      <div className='supervise-box'>
        <div className='text-supervise'>
          <p>ABT Ingenieria Medioambiental (ESP) 1992 | 1998</p>
          <p>SEGHERS KEPPEL LatinoÁmerica (ARG) 1999 | 2007</p>
        </div>
        <div className='hobbies-supervise'>
          <div className='text-hobbies' data-aos = "fade-down">
            <p>Drawing and design of pipe layout and construction supervision. My work took me to many very interesting places.</p>
            <ul><p>COUNTRIES WHERE I HAVE WORKED:</p>
              <li>Argentina</li>
              <li>Brasil</li>
              <li>México</li>
              <li>Chile</li>
            </ul>
            <img className='pictures' src='../../../../jos-obra.png' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-viaje.png' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-guanaco.png' style={{ height: '90px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
  </div>
</>
  )
}

export default Supervise;