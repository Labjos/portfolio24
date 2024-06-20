import './Studies.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Studies() {

  useEffect(() => {
    Aos.init({duration: 2_000});
  }, [])

  return (
    <>
    <div className='container-studys'>
      <div className='color-bar' data-aos = "fade-right">
        <p className='title-bar'>Applied Studies</p>
      </div>
      <div className='studys-box'>
        <div className='text-studys'>
          <p>E.G.B</p>
          <p>DELINEANTE INDUSTRIAL MECÁNICO - FPII</p>
          <p>curso AUTOCAD  V.2.0 (1989)</p>
        </div>
        <div className='hobbies-studys' data-aos = "fade-right">
          <div className='text-hobbies'>
            <p>HOBBIES</p>
            <hr/>
            <p>BASKET, SPORTS</p>
            <p>Drawing and Comics</p>
          </div>
          <div data-aos = "fade-left">
            <img className='pictures' src='../../../../foto-fp.png' style={{ height: '90px'}} alt='imagen de muy joven' />
            <img className='pictures' src='../../../../foto-basket.png' style={{ height: '90px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../foto-ibiza.png' style={{ height: '90px'}} alt='imagen de joven' />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Studies;
