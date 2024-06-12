import './Studies.css';

function Studies() {
  return (
    <>
      <div className='color-studies'>
        <p className='title'>ESTUDIOS REALIZADOS</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>E.G.B</p>
          <p>DELINEANTE INDUSTRIAL MECÁNICO - FPII</p>
          <p>curso AUTOCAD  V.2.0 (1989)</p>
        </div>
      
        <div className='hobbies'>
          <div className='text-hobbies'>
            <p>HOBBIES</p>
            <p>BASKET</p>
            <p>DIBUJO Y COMICS</p>
          </div>
          <div>
            <img src='../../../../foto-fp.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../foto-basket.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../foto-ibiza.png' style={{ height: '100px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
  </>
  )
}

export default Studies;
