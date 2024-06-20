import { Link } from 'react-router-dom';
import resume from '../../../assets/CV-Jose Lorente.pdf'
import './DownLoad.css';



function DownLoad() {
  return (
    <div>
      <div className='download'>
        <p className='title-down'>Download</p>
        <p className='text-down'>Here you can download my CV and a cover letter. In Spanish or English, if you have any inconvenience in downloading, please do not hesitate to contact me.</p>
        <div className='container d-flex down'>
            <li><Link  to={resume} download={resume} target="_blank"><i className="bi bi-file-earmark-pdf-fill"></i>CV-ES</Link></li>
            <li><Link to={resume} download={resume} target="_blank"><i className="bi bi-file-earmark-pdf-fill"></i>LC-ES</Link></li>
            <li><Link to={resume} download={resume} target="_blank"><i className="bi bi-file-earmark-pdf-fill"></i>LC-EN</Link></li>
            <li><Link to={resume} download={resume} target="_blank"><i className="bi bi-file-earmark-pdf-fill"></i>LC-EN</Link></li>
        </div>
      </div>
    </div>
  )
}

export default DownLoad;