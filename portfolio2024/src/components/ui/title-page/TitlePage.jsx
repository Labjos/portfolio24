import './TitlePage.css';

function TitlePage({ title, color, text }) {
  return (
    <div className='title-page'>
      <p className='title-text'>{text}</p>
      <div className='color-it' style={{ backgroundColor: color}}><p>{ title }</p></div>
    </div>
  )
}

export default TitlePage;