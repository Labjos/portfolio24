import './Box.css';

function Box( { text, className }) {
  
  return (
    <div className= {className}><p className='text-box'>{text}</p></div>
  )
}

export default Box;