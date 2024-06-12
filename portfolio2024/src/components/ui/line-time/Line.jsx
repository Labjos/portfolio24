import './Line.css'

function Line() {
  return (
    <div className='line'>
      <div className='line-time'></div>
      <div className='years'>
        <p className='numbers'><br />1989</p>
        <hr className='number-line' />
        <p className='numbers'><br /><br /><br />1992</p>
        <hr className='number-line-noventa' />
        <p className='numbers'><br /><br /><br /><br /><br />2001</p>
        <hr className='number-line-dosmiluno' />
        <p className='numbers'><br /><br /><br /><br />2007</p>
        <hr className='number-line' />
        <p className='numbers'><br /><br /><br /><br /><br /><br /><br />2019</p>
        <hr className='number-line-dosmilveinte' />
        <p className='numbers'><br /><br />Today</p>
      </div>
    </div>

  )
}

export default Line