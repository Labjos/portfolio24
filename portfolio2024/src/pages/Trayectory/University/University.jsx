import './University.css';

function University() {
  return (
    <>
    <div className='color-university'>
        <p className='title'>BACK TO THE UNIVERSITY</p>
      </div>
      <div className='studys'>
        <div className='text-studys'>
          <p>ABT Ingenieria Medioambiental (ESP) 1992 | 1998</p>
          <p>UNIVERSIDAD DE CONGRESO (ARG) 2001 | 2007</p>
        </div>
      
        <div className='supervise'>
          <div className='text-hobbies'>
            <p>Realicé la Lic. de Marketing mientras continuaba trabajando</p>
            <p>bicicleta y Triatlon, siguen siendo mi pasión</p>
            <p>Realicé la Lic. de Marketing mientras continuaba trabajando</p>
            
            <img className='pictures' src='../../../../jos-chat.png' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../Josep.jpg' style={{ height: '100px'}} alt='imagen de joven' />
            <img className='pictures' src='../../../../jos-running.png' style={{ height: '100px'}} alt='imagen de joven' />
          </div>
        </div>
    </div>
  </>
  )
}

export default University;