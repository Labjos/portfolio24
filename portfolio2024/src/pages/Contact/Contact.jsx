import Navbar from '../../components/ui/Navbar/Navbar';
import Thanks from '../../components/ui/Thanks/Thanks';
import Footer from '../../components/ui/footer/Footer';
import TitlePage from '../../components/ui/title-page/TitlePage';

import './Contact.css';


function Contact() {
  return (
    <>
      <Navbar />
      <TitlePage title='Contact' color='orange' text='This is a space created to publicize my work in programming. What am I looking for?. I am looking to be part of a work team where I can contribute to the development of challenging and innovative projects. Learn, grow and contribute.' />
      <div className='contact-box'>
      <Thanks />
        <div className='cafe-box'>
          <img  className='cafe' src='../../../cafe.jpeg' style={{ height: '200px'}} alt='taza de café' /><p className='cafe-talk'>Let's talk</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;
