import './Supervise.css';

function Supervise() {
  return (
    <>
      <div className='color-supervise'>
        <p className='title'>PROFESIONAL - GRANDES CAMBIOS</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>ABT Ingenieria Medioambiental (ESP) 1992 | 1998</p>
          <p>SEGHERS KEPPEL LatinoÁmerica (ARG) 1999 | 2007</p>
        </div>
      
        <div className='supervise'>
          <div className='text-hobbies'>
            <p>Drawing and design of pipe layout and construction supervision.  me llevó a conocer muchos lugares:</p>
            <ul><p>PAISES DONDE HE TRABAJADO</p>
              <li>Argentina</li>
              <li>Brasil</li>
              <li>México</li>
              <li>Chile</li>
            </ul>
            <img className='pictures' src='../../../../jos-obra.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-viaje.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-guanaco.png' style={{ height: '100px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
</>
  )
}

export default Supervise;