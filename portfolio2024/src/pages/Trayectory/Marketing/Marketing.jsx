import './Marketing.css';

function Marketing() {
  return (
    <>
      <div className='color-marketing'>
        <p className='titulo-marketing'>MARKETING & ENTREPRENEURSHIPS</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>ESTABLECIMIENTO LAHUEN</p>
          <p>RESTAURANTE A LA SOMBRA</p>
          <p>TELTECA TOURS</p>
          <p>COMERCIALIZADORA DE BEBIDAS - MUNDO SUR</p>
          
          <p>Curso Marketing Digital</p>
          <p>Certificado Digitaliza y Seguridad GOOGLE</p>
          <p>Marketing Digital Certificado GOOGLE</p>

        </div>
      
        <div className='draw'>
          <div className='text-hobbies'>
            <p>Turismo y alimentación y bebidas</p>
          </div>
          <div>
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