import Footer from '../../components/ui/footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import TitlePage from '../../components/ui/title-page/TitlePage';
import './register.css';


function register() {
  return (
  <> 
    <Navbar /> 
    <TitlePage title='WELCOME' color='magenta' text='"If you register, I will know that you have been here. if not, you can continue as a guest. Thank you for taking a few minutes to review this summary of my life..."' />
      <div>Technologies</div>
      <div>forms</div>
    <Footer />
  </>
  )
}

export default register