import React, { useEffect, useState } from 'react'
import eye from "../../images/eye.png"
import {useFormik} from "formik"
import * as Yup from "yup"
import axios from "axios"
import LoginNavbar from './LoginNavbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const schema = Yup.object().shape({ 
        email: Yup.string().email("El email no es Valido").required(),
        password: Yup.string().min(6).required().matches(/[A-Z]/).matches(/[0-9]/)
    });

    const submitForm = async (values, ) => {
      console.log(values);
      const userData = { 
         identifier: "pruebatecnica@creativedog.agency", //email
         password: "9I@5)22Jbc<{" // password
      };
      try {
         const sendUserData = await axios.post('https://jellyfish-app-mpahs.ondigitalocean.app/api/auth/local', userData);
         const response = sendUserData.data;
         console.log(response);
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('user', JSON.stringify(response.user));
          navigate("/Home")
      } catch (error) {
         console.error('An error occurred:', error.response ? error.response.data : error.message);
      }
     };

    const { handleSubmit, handleChange, values, errors } = useFormik({ 
        initialValues: { 
          email: "",
          password: ""
        },
        onSubmit: submitForm,
        validationSchema: schema
    });

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        handleChange(e);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        handleChange(e);
    };

   
  return (
    <div>
       <LoginNavbar/>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight" style={{color:"#1F2937"}}> Ingresar </h2>
              <p className='mt-3' syle={{color:"#6B7280"}}>Ingresa con tu email y contraseña</p>
          </div>
          
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div className='flex flex-col justify-start items-start'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Correo Electronico</label>
              <div className="mt-2">
                <input  id="email" name="email" type="email" autoComplete="email" required className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"> Contraseña </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="relative">
                  <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  <img src={eye} alt="Eye icon" className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none mt-2" />
               </div>
            </div>

            <div className="flex items-center w-full">
              
              <button type="submit" style={{backgroundColor:"#0500FF"}}  className="flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" >
              👍 Ingresar 
              </button>
            </div>
          </form>

          <div class="flex flex-col lg:flex-row items-center justify-between mt-3">
             <p style={{color:"#0500FF"}} className='text-sm'>¿No tenes cuenta? Ingresa aca</p>
             <p  style={{color:"#0500FF"}} className='text-sm'>Olvide mi contraseña</p>
          </div>

          <div className='mt-2 flex flex-col items-center jsutify-center'>
            {errors.email ? <span className="text-red-600 font-medium text-sm">Email Invalido</span> : null}
            {errors.password ? <span className="text-red-600 font-medium text-sm mt-2">La contraseña no es Valida</span> : null}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login

