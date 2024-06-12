import './It.css';

function It() {
  return (
    <div>
     <>
      <div className='color-it'>
        <p className='titulo'>IT</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>UNIVERSIDAD TECNOLOGICA NACIONAL </p>
          <p>CODERHOUSE</p>
          <p><strong>IRONHACK</strong></p>
        </div>
        <div className='draw'>
          <div className='text-hobbies'>
            <p>Estudiar desarrollo web y regresar a España</p>
          </div>
          <div>
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