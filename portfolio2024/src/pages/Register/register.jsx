import Footer from '../../components/ui/footer/Footer';
import Navbar from '../../components/ui/Navbar/Navbar';
import TitlePage from '../../components/ui/title-page/TitlePage';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

import './Register.css';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [error, setError] = useState();
  
  async function onSubmit(dataUser) {
    try {
      setError(false);
      const response = await axios.post('http://localhost:3000/api/v1/users', dataUser);
      console.log(response)

      navigate('/register')
    } catch(err) {
      setError(true)
    }
  }

  return (
  <> 
    <Navbar /> 
    <TitlePage title='Welcome' color='magenta' text='"If you register, I will know that you have been here. if not, you can continue as a guest. Thank you for taking a few minutes to review this summary of my life..."' />
    
    <div>Technologies</div>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <div className="alert alert-danger">error. review form data</div>}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">User Name</label>
          <input required id='username' type="text" className={ `form-control ${errors.username ? "is-invalid" : ""}`}
          {...register("username")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input required id='email' type="email" className={ `form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input required id='password' type="password" className={ `form-control ${errors.password ? "is-invalid" : ""}`}
          {...register("password")}
          />
        </div>
        <button type='submit' className='btn btn-success'>Register</button>
    </form>
  <Footer />
  </>
  )
}

export default Register